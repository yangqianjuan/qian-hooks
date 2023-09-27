import React, { useCallback, useState } from 'react';
import { message } from 'antd';
import { useMemorizedFn } from 'qianHooks';

export default () => {
  const [count, setCount] = useState(0);
  const callbackFn = useCallback(() => {
    message.info(`usecallback:${count}`);
  }, [count]);
  const memorizedFn = useMemorizedFn(() => {
    message.info(`useMemorized:${count}`);
  });
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={() => setCount((s) => s + 1)}>add</button>
      <button onClick={callbackFn}>useCallback</button>
      <button onClick={memorizedFn}>useMemorizedFn</button>
    </div>
  );
};
