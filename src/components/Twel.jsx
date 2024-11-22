import React from "react";
import { useState } from "react";
const Twel = () => {
  const [counts, setCounts] = useState(0);

  const CountBefor5 = () => {
    if (counts < 4) {
      setCounts(counts + 1);
    } else if (counts === 4) {
      setCounts(counts + 1);
      alert("Ви клікнули 5 разів ");
    }
  };

  return (
    <div>
      <h1>Count: {counts}</h1>
      <button onClick={CountBefor5}>Click</button>
    </div>
  );
};

export default Twel;
