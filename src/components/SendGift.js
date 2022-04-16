import React from "react";
import pic from '../img/send.png';
import '../css/sendGift.css';

const SendGift = () => {
    return (
        <section className="send section">
                <div className="send__container bd-container bd-grid">
                    <div className="send__content">
                        <h2 className="section-title-center send__title">Send Gift Now</h2>
                        <p className="send__description">Start giving away before the holidays are over. Write the home address of the person who will send the gift.</p>
                        <form action="">
                            <div className="send__direction">
                                <input type="text" placeholder="House address" className="send__input" />
                                <a href="#" className="button">Send</a>
                            </div>
                        </form>
                    </div>

                    <div className="send__img">
                        <img src={pic} alt="" />
                    </div>
                </div>
            </section>
    );
};

export default SendGift;