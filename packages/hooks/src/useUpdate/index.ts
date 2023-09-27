import { useState } from 'react';

const useUpdate = () => {
  const [, setState] = useState({});
  console.log('更新');
  return () => setState({});
};

export default useUpdate;
