import React from "react";
import pic1 from "../img/accessory1.png";
import pic2 from "../img/accessory2.png";
import pic3 from "../img/accessory3.png";
import pic4 from "../img/accessory4.png";
import pic5 from "../img/accessory5.png";
import '../css/accessory.css';

const Accessory = () => {
  return (
    <section className="accessory section bd-container" id="accessory">
      <h2 className="section-title">
        New Christmas <br /> Accessories
      </h2>

      <div className="accessory__container bd-grid">
        <div className="accessory__content">
          <img src={pic1} alt="" className="accessory__img" />
          <h3 className="accessory__title">Snow Globe</h3>
          <span className="accessory__category">Accessory</span>
          <span className="accessory__preci">$9.45</span>
          <a href="#" className="button accessory__button">
            <i className="bx bx-heart"></i>
          </a>
        </div>

        <div className="accessory__content">
          <img src={pic2} alt="" className="accessory__img" />
          <h3 className="accessory__title">Candy</h3>
          <span className="accessory__category">Accessory</span>
          <span className="accessory__preci">$2.52</span>
          <a href="#" className="button accessory__button">
            <i className="bx bx-heart"></i>
          </a>
        </div>

        <div className="accessory__content">
          <img src={pic3} alt="" className="accessory__img" />
          <h3 className="accessory__title">Angel</h3>
          <span className="accessory__category">Accessory</span>
          <span className="accessory__preci">$13.15</span>
          <a href="#" className="button accessory__button">
            <i className="bx bx-heart"></i>
          </a>
        </div>

        <div className="accessory__content">
          <img src={pic4} alt="" className="accessory__img" />
          <h3 className="accessory__title">Sphere</h3>
          <span className="accessory__category">Accessory</span>
          <span className="accessory__preci">$4.25</span>
          <a href="#" className="button accessory__button">
            <i className="bx bx-heart"></i>
          </a>
        </div>

        <div className="accessory__content">
          <img src={pic5} alt="" className="accessory__img" />
          <h3 className="accessory__title">Surprise gift</h3>
          <span className="accessory__category">Accessory</span>
          <span className="accessory__preci">$7.99</span>
          <a href="#" className="button accessory__button">
            <i className="bx bx-heart"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Accessory;
