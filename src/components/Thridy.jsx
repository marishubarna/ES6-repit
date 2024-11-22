import React from "react";
import { useState } from "react";
const FormTo = () => {
  const [inForm, setinForm] = useState(false);
  const handelInput = (e) => {
    setinForm(e.target.value.trim() !== "");
  };

  return (
    <div>
      <input type="text" placeholder="Введіть ім'я " onChange={handelInput} />
      <button onClick={() => alert(inForm ? "Поле заповнене" : "Поле пусте")}>
        Sign Up
      </button>
      {/* {inForm ? (
        <h4 style={{ color: "green" }}>Поле заповнене</h4>
      ) : (
        <h4 style={{ color: "red" }}>Поле пусте</h4>
      )} */}
    </div>
  );
};

export default FormTo;
