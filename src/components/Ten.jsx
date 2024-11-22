import React from "react";
import { useState } from "react";
const Ten = () => {
  const [names, setNames] = useState("");
  //   const [lastN, setLastN] = useState("")
  const [displayN, setDisplay] = useState("");

  const handelAdd = (e) => {
    setNames(e.target.value);
  };

  //   const handelLast = (e) => {
  // setLastN(e.target.value)
  //   }

  const PrintName = () => {
    if (names.trim()) {
      setDisplay(names);
    } else {
      setDisplay("Немає даних");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={names}
        placeholder="Your Name"
        onChange={handelAdd}
      />

      <button onClick={PrintName}>Додати Дані</button>
      {displayN && <h1>Ваше Ім'я {displayN}</h1>}
    </div>
  );
};

export default Ten;
