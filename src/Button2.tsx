/** @format */

import React from "react";

export default function Button2(props: { setCout: Function; count: number; }) {
  return (
    <div>
      <button
        onClick={() => {
          if(props.count>1){

            props.setCout(props.count - 1)}}
          }
        className="h-8 w-28 bg-blue-500">
        decrement
      </button>
    </div>
  );
}
