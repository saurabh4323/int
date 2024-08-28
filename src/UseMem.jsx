import React, { useMemo, useState } from "react";

const UseMem = () => {
  const [count, setCount] = useState(0);
  const [triggerMemo, setTriggerMemo] = useState(false);

  const help = (a, b) => {
    console.log("Calculating sum...");
    return a + b;
  };

  const memoizedSum = useMemo(() => {
    if (triggerMemo) {
      return help(5, 8);
    }
    return null;
  }, [triggerMemo]);

  const handleShowClick = () => {
    setTriggerMemo(true);
  };

  return (
    <div>
      <h1>Use Memo</h1>
      <button onClick={handleShowClick}>SHOW</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>
        Sum:{" "}
        {memoizedSum !== null ? memoizedSum : "Click SHOW to calculate sum"}
      </p>
      <p>Count: {count}</p>
    </div>
  );
};

export default UseMem;
