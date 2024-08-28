import React, { useState } from "react";

const UseSta = () => {
  const [count, setCount] = useState(0);
  const toggle = () => {
    setCount(count + 1);
  };
  console.log("vexdbi");
  return (
    <div>
      <button onClick={toggle}>Click</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default UseSta;
