import { Service, Options, Plugin } from './types';
import useRequestImplement from './useRequestImplement';
import useAutoRunPlugin from '../plugins/useAutoRunPlugin';
import useLoadingDelayPlugin from '../plugins/useLoadingDelayPlugin';
const useRequest = <TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams> = {},
  plugins: Plugin<TData, TParams>[] = [],
) => {
  return useRequestImplement(service, options, [
    ...plugins,
    useAutoRunPlugin,
    useLoadingDelayPlugin,
  ]);
};

export default useRequest;
