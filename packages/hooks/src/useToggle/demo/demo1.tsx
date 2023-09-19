import React from 'react'
import  {useToggle}  from "qianHooks";
export default function () {
const [state,{setLeft,setRight,toggle}]=useToggle()
return <div>
  <p>state:{`${state}`}</p>
  <div><button onClick={setLeft}>setLeft</button></div>
  <div><button onClick={setRight}>setRight</button></div>
  <div><button onClick={toggle}>toggle</button></div>
</div>
}
