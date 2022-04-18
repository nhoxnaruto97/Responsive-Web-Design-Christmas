import React, { useState } from "react";
import "../css/header.css";
import "../css/navbar.css";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLink, setToggleLink] = useState("");

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const clickItem = (param) => {
    setToggleLink(param);
    setToggleMenu(false);
  };

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#section" className="nav__logo">
          Christmas Gift
        </a>
        <div
          className={`nav__menu ${toggleMenu ? "show-menu" : ""} `}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item" onClick={() => clickItem("Home")}>
              <a
                href="#home"
                className={`nav__link ${
                  toggleLink === "Home" ? "active-link" : ""
                } `}
              >
                Home
              </a>
            </li>
            <li className="nav__item" onClick={() => clickItem("Share")}>
              <a
                href="#share"
                className={`nav__link ${
                  toggleLink === "Share" ? "active-link" : ""
                }`}
              >
                Share
              </a>
            </li>
            <li className="nav__item" onClick={() => clickItem("Decorations")}>
              <a
                href="#decoration"
                className={`nav__link ${
                  toggleLink === "Decorations" ? "active-link" : ""
                }`}
              >
                Decorations
              </a>
            </li>
            <li className="nav__item" onClick={() => clickItem("Accessory")}>
              <a
                href="#accessory"
                className={`nav__link ${
                  toggleLink === "Accessory" ? "active-link" : ""
                }`}
              >
                Accessory
              </a>
            </li>

            <li>
              <i
                className="bx bx-toggle-left change-theme"
                id="theme-button"
              ></i>
            </li>
          </ul>
        </div>

        <div onClick={toggleNav} className="nav__toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
