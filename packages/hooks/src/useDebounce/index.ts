import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, wait: number) {
  const [input, setInput] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setInput(value);
    }, wait);
    return () => clearTimeout(timer);
  }, [value, wait]);

  return input;
}

export default useDebounce;
