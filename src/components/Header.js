import React, { useState, useEffect } from "react";
import "../css/header.css";
import "../css/navbar.css";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        {(toggleMenu || screenWidth > 500) && (
            <ul className="nav__list">
              <li className="nav__items">
                <a href="#home">
                  Home
                </a>
              </li>
              <li className="nav__items">
                <a href="#share">
                  Share
                </a>
              </li>
              <li className="nav__items">
                <a href="#decoration">
                  Decorations
                </a>
              </li>
              <li className="nav__items">
                <a href="#accessory">
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
        )}
        <button onClick={toggleNav} className="nav__btn">
          <i className="bx bx-grid-alt"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
