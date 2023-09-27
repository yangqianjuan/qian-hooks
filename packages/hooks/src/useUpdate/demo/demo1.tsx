import React from 'react';
import { useUpdate } from 'qianHooks';
export default () => {
  const update = useUpdate();
  return (
    <div>
      <p>{Date.now()}</p>
      <button onClick={update}>Update</button>
    </div>
  );
};
