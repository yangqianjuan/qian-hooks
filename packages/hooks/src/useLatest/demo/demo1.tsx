import React, { useState, useEffect } from 'react';
import { useLatest } from 'qianHooks';
export default function () {
  const [count, setCount] = useState(0);
  const latestValue = useLatest(count);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(latestValue.current);
      setCount(latestValue.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{count}</div>;
}
