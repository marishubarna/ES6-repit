import React from "react";
import { useState } from "react";
const Nine = () => {
  const [add, setAdd] = useState("");
  const [changeAdd, setChangeAdd] = useState([]);
  const handelAdd = (e) => {
    setAdd(e.target.value);
  };

  const handelAddLine = () => {
    if (add.trim() !== "") {
      setChangeAdd([...add, changeAdd]);
      setAdd("");
    }
  };

  const handelDelet = (delet) => {
    setChangeAdd((prevList) => prevList.filter((item) => item !== delet));
  };

  return (
    <div>
      <input
        type="text"
        value={add}
        placeholder="Введіть новий текс"
        onChange={handelAdd}
      />
      <button onClick={handelAddLine}>Додати до списку</button>
      <ul>
        {changeAdd.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handelDelet(item)}>Видалити </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nine;
