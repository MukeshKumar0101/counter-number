/** @format */

import React from "react";

export default function Counter(props: {
  setCount: Function;
  count: number;
  input: number;
}) {
  return (
    <div className="flex justify-between w-full">
      <button
        onClick={() => {
          if(props.count>1){

            props.setCount(props.count- props.input)}}
          }
        className="h-8 w-8 bg-blue-500">
        -
      </button>
      <div className="h-8 w-8 bg-blue-400">{props.count}</div>
      <button
        onClick={() => props.setCount(props.count + props.input)}
        className="h-8 w-8 bg-blue-500">
        +
      </button>
    </div>
  );
}
