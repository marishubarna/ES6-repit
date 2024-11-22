import React from "react";
import { useState } from "react";

const Six = () => {
  const [titleof, setTitleof] = useState("");
  const [commet, setCommet] = useState("");

  const handelTitle = (e) => {
    setTitleof(e.target.value);
  };

  const handelAddComment = (e) => {
    setCommet(e.target.value);
  };

  const rendering = () => {
    if (titleof.trim() && commet.trim()) {
      return alert("Коментар Отримано");
    } else {
      return alert("Коментар не Отримано");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={titleof}
        placeholder="Назва"
        onChange={handelTitle}
      />
      <input
        type="text"
        value={commet}
        placeholder="Опис"
        onChange={handelAddComment}
      />
      <button onClick={rendering}>Sign up</button>
    </div>
  );
};

export default Six;
