import React, { useState } from "react";
import "../css/header.css";
import "../css/navbar.css";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const navLink = document.querySelectorAll(".nav__link");
  const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
  };
  navLink.forEach((n) => n.addEventListener("click", linkAction));

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
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#share" className="nav__link">
                Share
              </a>
            </li>
            <li className="nav__item">
              <a href="#decoration" className="nav__link">
                Decorations
              </a>
            </li>
            <li className="nav__item">
              <a href="#accessory" className="nav__link">
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
