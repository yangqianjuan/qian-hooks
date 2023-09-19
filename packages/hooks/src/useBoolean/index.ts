import { useMemo } from "react";
import useToggle from '../useToggle'

type defaultFn=()=>void
interface Actions{
setTrue:defaultFn;
setFalse:defaultFn;
toggle:defaultFn
}

function useBoolean<D>() :[D,Actions]

function useBoolean<D>() {
  const [state,{setLeft,setRight,toggle}]=useToggle(true)
  const Actions=useMemo(()=>{
    const setTrue=()=>setLeft()
    const setFalse=()=>setRight()
return {setTrue,setFalse,toggle}
  },[])
return [state,Actions]
}

export default useBoolean
