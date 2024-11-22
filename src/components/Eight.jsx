import React from "react";
import { useState } from "react";
import "../App.css"

const Eight = () => {
  const [tables, setTables] = useState(table1);

  const renderContect = () => {
    switch (tables) {
      case table1:
        return <h1>This is a Table - 1</h1>;
      case table2:
        return <h1>This is a Table - 2</h1>;
      case table3:
        return <h1>This is a Table - 3</h1>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="conteinerTable">
        <button
          className={tables === "table1" ? "active" : ""}
          onClick={() => setTables("table1")}
        >
          Tab 1
        </button>
        <button
          className={tables === "table2" ? "active" : ""}
          onClick={() => setTables("table2")}
        >
          Tab 2
        </button>
        <button
          className={tables === "table3" ? "active" : ""}
          onClick={() => setTables("table3")}
        >
          Tab 3
        </button>
        <div className="content">{renderContect()}</div>
      </div>
    </div>
  );
};

export default Eight;
