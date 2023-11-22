/** @format */

import React, { useState } from "react";
import Counter from "./Counter";
import Input from "./Input";
import Reset from "./Reset";
import Button1 from "./Button1";
import Button2 from "./Button2";

export default function App() {
  const [count, setCount] = useState(1);
  const [input, setInput] = useState(1);
  return (
    <div className="flex flex-col h-screen items-center px-8 justify-center gap-6 ">
      <div className="flex  gap-4">
        <Button2 setCout={setInput} count={input} />
        <Input setInput={setInput} input={input} />
        <Button1 setCount={setInput} count={input} />
      </div>
      <Reset setCount={setCount} setIput={setInput} />
      <Counter setCount={setCount} count={count} input={input} />
    </div>
  );
}
