import { useRef } from 'react';
import { Timeout, Plugin } from '../src/types';
const useLoadingDelayPlugin: Plugin<any, any[]> = (instance, { ready, loadingDelay }) => {
  const timeRef = useRef<Timeout>();

  const cancelTimeOut = () => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
  };
  return {
    onBefore() {
      cancelTimeOut();
      if (ready !== false) {
        timeRef.current = setTimeout(() => {
          instance.setState({ loading: true });
        }, loadingDelay);

        return { loading: true };
      }
    },
  };
};

export default useLoadingDelayPlugin;
