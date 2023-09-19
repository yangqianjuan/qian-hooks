import React from 'react'
import useBoolean from '../index'

export default function() {
  const [state,{setTrue,setFalse,toggle}]=useBoolean()

  return <div>
    <p>state:{`${state}`}</p>
    <div>
      <button onClick={setTrue}>seTrue</button>
    </div>
    <div>
      <button onClick={setFalse}>seFalse</button>
    </div>
    <div>
      <button onClick={toggle}>toggle</button>
    </div>
  </div>

}
