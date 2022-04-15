import React, { useState, useEffect } from "react";
import '../css/scrollTop.css';
import { FaAngleUp } from "react-icons/fa";
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
    <div className="top-to-btn">
      {showTopBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goTop} />
      )}
    </div>
  );
};

export default ScrollTop;
