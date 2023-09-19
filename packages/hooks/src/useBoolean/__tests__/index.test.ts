import { renderHook,act } from "@testing-library/react";
import useBoolean from '../index'

const actFalse=(hooks)=>{
  act(()=>hooks.result.current[1].setFalse())
}
const actToggle=(hooks)=>{
  act(()=>hooks.result.current[1].toggle())
}

describe('useBoolean测试',function () {
  it('基础功能测试',()=>{
    const hooks=renderHook(()=>useBoolean())
    expect(hooks.result.current[0]).toBeTruthy()
    actFalse(hooks)
    expect(hooks.result.current[0]).toBeFalsy()
    actToggle(hooks)
    expect(hooks.result.current[0]).toBeTruthy()
  })
})
