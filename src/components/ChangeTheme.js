import React, { useEffect, useState } from "react";
import "../css/changeTheme.css";

const ChangeTheme = () => {
  const [changedTheme, setChangedTheme] = useState(false);

  const darkTheme = () => {
    setChangedTheme(!changedTheme);
  };

  useEffect(() => {
    var element = document.body;
    element.classList.toggle("dark-theme");
  }, [changedTheme]);

  return (
    <li>
      <i
        onClick={darkTheme}
        className={`bx change-theme ${
          changedTheme ? "bx-toggle-left" : "bx-toggle-right"
        }`}
        id="theme-button"
      ></i>
    </li>
  );
};

export default ChangeTheme;
