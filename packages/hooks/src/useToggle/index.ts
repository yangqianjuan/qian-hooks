import {  useState,useMemo} from "react";

type defaultFn=()=>void
interface Actions{
setLeft:defaultFn;
setRight:defaultFn;
toggle:defaultFn
}
// function useToggle<D>() :[D,Actions]
// function useToggle<D>(defaultValue:D) :[D,Actions]
function useToggle<D,R>(defaultValue?:D,reverseValue?:R) :[D|R,Actions]

function useToggle<D,R>(defaultValue?:D,reverseValue?:R) {
const defaultValueOrigin=defaultValue===undefined?false:defaultValue
const reverseOriginValue=reverseValue===undefined?!defaultValueOrigin:reverseValue
const [state,setState]=useState(defaultValueOrigin)

  const Actions=useMemo(()=>{

const setLeft=()=>setState(defaultValueOrigin)
const setRight=()=>setState(reverseOriginValue)
const toggle=()=>setState((s)=>s===defaultValueOrigin?reverseOriginValue:defaultValueOrigin)
return {setLeft,setRight,toggle}
  },[])

  return[state,Actions]

}

export default useToggle
