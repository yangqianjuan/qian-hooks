import { renderHook, act } from '@testing-library/react';
import usetitle from '../index';

describe('useTitle测试', () => {
  it('基础功能测试', () => {
    const hook = renderHook((props) => usetitle(props), { initialProps: '自定义页面标题' });
    expect(document.title).toBe('自定义页面标题');

    hook.rerender('另一个页面标题');
    expect(document.title).toBe('另一个页面标题');
  });

  it('页面关闭，标题回退功能', () => {
    document.title = '原来的页面标题';
    const hook = renderHook((props) => usetitle(props, { restorePretitle: true }), {
      initialProps: '自定义页面标题',
    });
    expect(document.title).toBe('自定义页面标题');

    hook.unmount();
    expect(document.title).toBe('原来的页面标题');
  });
});
