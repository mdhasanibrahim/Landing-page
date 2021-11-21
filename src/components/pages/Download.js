import React, { useEffect } from 'react';
import "../css/Download.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Download = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <div id="download-page">
            <div data-aos="zoom-in-up" className="outer">
                <div className="inner">
                    <div className="inner-text-section">
                        <h1>Get it on phone!</h1>
                        <p>Find someone your aura  mathes now!</p>
                    </div>
                    <div className="btn-div">
                        <div className="btn-1"><button></button></div>
                        <div className="btn-2"><button></button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;