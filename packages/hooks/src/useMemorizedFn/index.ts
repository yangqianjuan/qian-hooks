import { useRef, useMemo } from 'react';
const useMemorizedFn = (fn) => {
  const refFn = useRef(fn);
  refFn.current = useMemo(() => fn, [fn]);
  const memorizedFn = useRef();
  if (!memorizedFn.current) {
    memorizedFn.current = function (...arg) {
      return refFn.current.apply(this, [...arg]);
    };
  }
  return memorizedFn.current;
};
export default useMemorizedFn;
