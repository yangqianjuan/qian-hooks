import React, { useState } from 'react';
import { useDebounce } from 'qianHooks';

export default () => {
  const [value, setValue] = useState();
  const debounceValue = useDebounce(value, 1000);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: 180 }}
      />
      <p>{debounceValue}</p>
    </div>
  );
};
