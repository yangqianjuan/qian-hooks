import { MutableRefObject } from 'react';
import { Service, Options, FetchState, PluginReturn } from './types';
class Fetch<TData, TParams extends any[]> {
  pluginsImpls: PluginReturn<TData, TParams>;
  state: FetchState<TData, TParams> = {
    loading: false,
    params: undefined,
    data: undefined,
    error: undefined,
  };
  constructor(
    public serviceRef: MutableRefObject<Service<TData, TParams>>,
    public options: Options<TData, TParams>,
    public update: () => void,
    public initState: FetchState<TData, TParams>,
  ) {
    this.state = {
      ...this.state,
      loading: !options.manual,
      ...initState,
    };
  }
  setState(state) {
    this.state = {
      ...this.state,
      ...state,
    };
    this.update();
  }
  runPluginHandler(event: keyof PluginReturn<TData, TParams>, ...rest) {
    const initState = this.pluginsImpls.map((p) => p[event]?.(...rest)).filter(Boolean);
    return Object.assign({}, ...initState);
  }
  async runAsync(...params: TParams): Promise<TData> {
    const {
      stopNow = false,
      returnNow = false,
      ...state
    } = this.runPluginHandler('onBefore', params);
    if (stopNow) {
      return new Promise(() => {});
    }
    this.setState({
      loading: true,
      ...state,
      params,
    });
    if (returnNow) {
      return Promise.resolve(state.data);
    }

    this.options?.onBefore?.(params);
    try {
      let { servicePromise } = this.runPluginHandler('onRequest', this.serviceRef.current, params);
      if (!servicePromise) {
        servicePromise = this.serviceRef.current(params);
      }
      const res = await servicePromise;
      debugger;
      this.setState({
        error: undefined,
        loading: false,
        data: res,
      });
      return res;
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
        data: undefined,
      });
      throw error;
    }
  }
}

export default Fetch;
