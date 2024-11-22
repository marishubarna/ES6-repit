import React from "react";
import { useState } from "react";
const Themes = () => {
  const [Themes, setThemes] = useState(false);
  if (Themes === true) {
  }
  return (
    <body
      style={{
        backgroundColor: Themes ? "black" : "white",
        height: "100vh",
        width: "100%",
        margin: "0 auto ",
      }}
    >
      <button onClick={() => setThemes((prevTheme) => !prevTheme)}>
        {Themes ? "Dark" : "Daily"}
      </button>
    </body>
  );
};

export default Themes;
