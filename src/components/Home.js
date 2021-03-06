import React from "react";
import "../css/home.css";
import "../css/button.css";
import pic from "../img/home.png";
const Home = () => {
  return (

      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__img">
            <img src={pic} alt="home" />
          </div>

        <div className="home__data">
          <h1 className="home__title">Send A Gift For Christmas</h1>
          <p className="home__description">
            In these end of the year holidays send a gift to your loved one and
            share the happiness at Christmas.
          </p>
          <a href="#section" className="button">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
