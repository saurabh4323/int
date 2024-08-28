import React, { useEffect, useState } from "react";

const UseEffec = () => {
  const [count, setCount] = useState(0);
  const toggle = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    toggle();
  }, []);

  return (
    <div>
      <button onClick={toggle}>Click</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default UseEffec;
