import {renderHook,act  } from "@testing-library/react";
import useToggle from '../../useToggle';

const callLeft=(hooks)=>{
  act(()=>hooks.result.current[1].setLeft())
}
const callToggle=(hooks)=>{
  act(()=>hooks.result.current[1].toggle())
}
describe('useToggle的使用方法',()=>{
  it('基础用法',()=>{
    const hooks=renderHook(()=>useToggle())
    expect(hooks.result.current[0]).toBeFalsy()
    callToggle(hooks)
    expect(hooks.result.current[0]).toBeTruthy()
    callLeft(hooks)
    expect(hooks.result.current[0]).toBeFalsy()
  })
  it('模拟用法',()=>{
    const hooks=renderHook(()=>useToggle('left','right'))
    expect(hooks.result.current[0]).toBe('left')
    callToggle(hooks)
    expect(hooks.result.current[0]).toBe('right')
    callLeft(hooks)
    expect(hooks.result.current[0]).toBe('left')
  })
})
