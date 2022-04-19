import React, { useState, useEffect } from "react";
import "../css/scrollTop.css";

const ScrollTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <a
      onClick={goTop}
      href="#section"
      className={`scrolltop ${showTopBtn ? "show-scroll" : ""}`}
      id="scroll-top"
    >
      <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
    </a>
  );
};

export default ScrollTop;
