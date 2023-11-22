import React from 'react'

export default function Button1(props:{
  setCount:Function;
  count:number;
}) {
  return (
    <div>
      <button onClick={()=>props.setCount(props.count+1)} className='h-8 w-28 bg-blue-500'>increment</button>
    </div>
  )
}
