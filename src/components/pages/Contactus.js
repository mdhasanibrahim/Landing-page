import React from 'react';
import '../css/Contactus.css';

const Contactus = () => {
    return (
        <div id="contact-us-page">
            <div className="outer-div">
                <div className="inner-div">
                    <div className="inner-div-text">
                        <h1>Our Newsletter!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis aliquam arcu lacus.</p>
                    </div>
                    <form action="#">
                        <div className="field-email">
                            <input type="email" placeholder="Enter Your Email" required/>
                        </div>
                        <div className="send-btn" type="submit"><button></button></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactus;