import React from 'react';
import { useTitle } from 'qianHooks';

export default () => {
  useTitle('自定义的页面标题');
  return <div>title设置</div>;
};
