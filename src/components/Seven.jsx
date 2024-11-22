import React from "react";
import { useState } from "react";
const Seven = () => {
  const [count, setCount] = useState(0);
  const CountFunkction = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <p>Ти натиснув {count} разів</p>
      <button onClick={CountFunkction}></button>
    </div>
  );
};

export default Seven;
