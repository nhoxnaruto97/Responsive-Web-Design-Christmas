import React from "react";
import '../css/decorations.css';
import pic1 from '../img/decoration1.png';
import pic2 from '../img/decoration2.png';
import pic3 from '../img/decoration3.png';

const Decorations = () => {
    return (
        <section className="decoration section bd-container" id="decoration">
                <h2 className="section-title">Give Christmas Decorations <br/> For Your Home</h2>
                <div className="decoration__container bd-grid">
                    <div className="decoration__data">
                        <img src={pic1} alt="" className="decoration__img"/>
                        <h3 className="decoration__title">Christmas Bells</h3>
                        <a href="#" className="button button-link">Go Shopping</a>
                    </div>

                    <div className="decoration__data">
                        <img src={pic2} alt="" className="decoration__img"/>
                        <h3 className="decoration__title">Christmas Candies</h3>
                        <a href="#" className="button button-link">Go Shopping</a>
                    </div>

                    <div className="decoration__data">
                        <img src={pic3} alt="" className="decoration__img"/>
                        <h3 className="decoration__title">Christmas Trees</h3>
                        <a href="#" className="button button-link">Go Shopping</a>
                    </div>
                </div>
            </section>
    );
}

export default Decorations;