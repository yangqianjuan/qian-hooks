(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{MZF8:function(e,t,n){"use strict";var o=n("ogwx");n.d(t,"a",(function(){return o["b"]}));n("VCU9")},OYlG:function(e,t,n){"use strict";n.r(t);var o=n("mn0l"),s=n("ahKI"),u=n.n(s),r=n("RGYn"),a=n("DBVu"),i=n("GAyR"),l=n("7JWa"),c="import React from 'react'\nimport useBoolean from '../index'\n\nexport default function() {\n  const [state,{setTrue,setFalse,toggle}]=useBoolean()\n\n  return <div>\n    <p>state:{`${state}`}</p>\n    <div>\n      <button onClick={setTrue}>seTrue</button>\n    </div>\n    <div>\n      <button onClick={setFalse}>seFalse</button>\n    </div>\n    <div>\n      <button onClick={toggle}>toggle</button>\n    </div>\n  </div>\n\n}",d="import { useMemo } from \"react\";\nimport useToggle from '../useToggle'\n\ntype defaultFn=()=>void\ninterface Actions{\nsetTrue:defaultFn;\nsetFalse:defaultFn;\ntoggle:defaultFn\n}\n\nfunction useBoolean<D>() :[D,Actions]\n\nfunction useBoolean<D>() {\n  const [state,{setLeft,setRight,toggle}]=useToggle(true)\n  const Actions=useMemo(()=>{\n    const setTrue=()=>setLeft()\n    const setFalse=()=>setRight()\nreturn {setTrue,setFalse,toggle}\n  },[])\nreturn [state,Actions]\n}\n\nexport default useBoolean",p='import {  useState,useMemo} from "react";\n\ntype defaultFn=()=>void\ninterface Actions{\nsetLeft:defaultFn;\nsetRight:defaultFn;\ntoggle:defaultFn\n}\n// function useToggle<D>() :[D,Actions]\n// function useToggle<D>(defaultValue:D) :[D,Actions]\nfunction useToggle<D,R>(defaultValue?:D,reverseValue?:R) :[D|R,Actions]\n\nfunction useToggle<D,R>(defaultValue?:D,reverseValue?:R) {\nconst defaultValueOrigin=defaultValue===undefined?false:defaultValue\nconst reverseOriginValue=reverseValue===undefined?!defaultValueOrigin:reverseValue\nconst [state,setState]=useState(defaultValueOrigin)\n\n  const Actions=useMemo(()=>{\n\nconst setLeft=()=>setState(defaultValueOrigin)\nconst setRight=()=>setState(reverseOriginValue)\nconst toggle=()=>setState((s)=>s===defaultValueOrigin?reverseOriginValue:defaultValueOrigin)\nreturn {setLeft,setRight,toggle}\n  },[])\n\n  return[state,Actions]\n\n}\n\nexport default useToggle',f="import React, { useState } from 'react';\nimport { useDebounce } from 'qianHooks';\n\nexport default () => {\n  const [value, setValue] = useState();\n  const debounceValue = useDebounce(value, 1000);\n  return (\n    <div>\n      <input\n        type=\"text\"\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        style={{ width: 180 }}\n      />\n      <p>{debounceValue}</p>\n    </div>\n  );\n};",g="import React, { useState, useEffect } from 'react';\nimport { useLatest } from 'qianHooks';\nexport default function () {\n  const [count, setCount] = useState(0);\n  const latestValue = useLatest(count);\n  useEffect(() => {\n    const interval = setInterval(() => {\n      console.log(latestValue.current);\n      setCount(latestValue.current + 1);\n    }, 1000);\n    return () => clearInterval(interval);\n  }, []);\n\n  return <div>{count}</div>;\n}",m="import React from 'react';\nimport { useTitle } from 'qianHooks';\n\nexport default () => {\n  useTitle('\u81ea\u5b9a\u4e49\u7684\u9875\u9762\u6807\u9898');\n  return <div>title\u8bbe\u7f6e</div>;\n};",v="import React from 'react'\nimport  {useToggle}  from \"qianHooks\";\nexport default function () {\nconst [state,{setLeft,setRight,toggle}]=useToggle()\nreturn <div>\n  <p>state:{`${state}`}</p>\n  <div><button onClick={setLeft}>setLeft</button></div>\n  <div><button onClick={setRight}>setRight</button></div>\n  <div><button onClick={toggle}>toggle</button></div>\n</div>\n}",b={"useboolean-demo1":{component:Object(l["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"yoie"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:c},"index.ts":{import:"../index",content:d},"useToggle/index.ts":{import:"../useToggle",content:p}},dependencies:{react:{version:"18.2.0"}},identifier:"useboolean-demo1"}},"usedebounce-demo1":{component:Object(l["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"eWij"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f}},dependencies:{react:{version:"18.2.0"}},identifier:"usedebounce-demo1"}},"uselatest-demo1":{component:Object(l["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"OCTU"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g}},dependencies:{react:{version:"18.2.0"}},identifier:"uselatest-demo1"}},"usetitle-demo1":{component:Object(l["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"dA01"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{react:{version:"18.2.0"}},identifier:"usetitle-demo1"}},"usetoggle-demo1":{component:Object(l["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:v}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-demo1"}}},h=n("Zs1V"),O=n("XyB1"),x=n.n(O);t["default"]=e=>u.a.createElement(x.a,Object(o["a"])({},e,{config:r,demos:b,apis:h}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"/hooks":[{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"},{"path":"/hooks/use-boolean","title":"useBoolean"},{"path":"/hooks/use-latest","title":"useLatest"}]},{"title":"DOM","children":[{"path":"/hooks/use-title","title":"useTitle"},{"path":"/hooks/use-debounce","title":"useDebounce"}]}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"}]},"title":"react hooks","logo":"/logo.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);