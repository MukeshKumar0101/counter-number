/** @format */

import React from "react";

export default function Input(props: { setInput: Function; input: number; }) {
  return (
    <div>
      <input 
        value={props.input}
        onChange={(event) => {
          //   console.log(event);
          const a = event.target.value;
          props.setInput(parseInt(a));
        }}
        type="number"
        placeholder="You can text here"
        className="h-8 w-28 border-2 border-blue-500" 
      />
    </div>
  );
}
