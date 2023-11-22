import React from 'react'

export default function Reset(props:{
    setCount:Function,
    setIput:Function
}) {
  return (
    <div>
      <button className='h-8 w-16 bg-blue-600 text-white' onClick={()=>{
        props.setCount(0);
        props.setIput(0);
      }}>Reset</button>
    </div>
  )
}
