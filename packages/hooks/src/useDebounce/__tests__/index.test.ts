import { renderHook } from '@testing-library/react';
import useDebounce from '../index';

function sleep(time: number) {
  return new Promise<void>((reslove) => {
    setTimeout(() => {
      reslove();
    }, time);
  });
}
describe('useDebounce的测试', () => {
  it('基础功能测试', async () => {
    let mountstate = 0;
    const hook = renderHook(() => useDebounce(mountstate, 200));
    expect(hook.result.current).toBe(0);

    mountstate = 1;
    hook.rerender();
    await sleep(100);
    expect(hook.result.current).toBe(0);

    // mountstate = 1;
    // hook.rerender();
    // await sleep(250);
    // expect(hook.result.current).toBe(1);
  });
});
