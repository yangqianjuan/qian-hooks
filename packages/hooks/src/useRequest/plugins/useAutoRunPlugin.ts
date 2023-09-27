import { useEffect, useRef } from 'react';
import { Plugin } from '../src/types';
const useAutoRunPlugin: Plugin<any, any[]> = (
  instance: any,
  { manual, ready = true, refreshDeps = [], refreshDepsAction, defaultParams = [] },
) => {
  const hasAutoRun = useRef(false);
  hasAutoRun.current = false;
  useEffect(() => {
    if (!manual && ready) {
      hasAutoRun.current = true;
      instance.runAsync(...defaultParams);
    }
  }, [ready]);

  useEffect(() => {
    if (hasAutoRun.current) {
      return;
    }
    if (refreshDepsAction) {
      refreshDepsAction(...defaultParams);
    } else {
      instance.refresh(...defaultParams);
    }
  }, [...refreshDeps]);
  return {
    onBefore() {
      if (!ready) {
        return { stopNow: true };
      }
    },
  };
};
useAutoRunPlugin.onInit = ({ manual, defaultParams = [], ready = true }) => {
  return {
    loading: !manual && ready,
    params: defaultParams,
  };
};
export default useAutoRunPlugin;
