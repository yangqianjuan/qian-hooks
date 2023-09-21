import { useEffect, useRef } from 'react';

const DEFAULT_OPTION = {
  restorePretitle: false,
};
function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}
function useUnmount(fn) {
  const refFn = useLatest(fn);
  useEffect(() => {
    return () => refFn.current();
  }, []);
}
function useTitle(title: string, options = DEFAULT_OPTION) {
  const refTitle = useRef(document.title);
  useEffect(() => {
    document.title = title;
  }, [title]);

  useUnmount(() => {
    if (options.restorePretitle) {
      document.title = refTitle.current;
    }
  });
}

export default useTitle;
