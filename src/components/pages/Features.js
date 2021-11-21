import React, { useEffect } from 'react';
import "../css/Features.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Features = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <div className="features">
            {/* <div className="circle"></div> */}
            {/* <div className="oval"></div> */}
            <div className="header-1"><h1>Match. Chat. Date</h1></div>
            <div className="behind-pic"></div>
            <div className="phn-pic"></div>
            <div className="upper-div">
                <div data-aos="fade-down" className="left-div">
                    <div className="icon"></div>
                    <div className="box-title">Let's Swipe</div>
                    <div className="inside-text">It is a long established fact that a reader will be distracted by the readable content of a page when</div>
                    <div className="readmore-btn" id="upper-left-btn">Read more...</div>
                </div>
                <div data-aos="fade-down" className="right-div">
                <div className="icon"></div>
                    <div className="box-title">Love Can Happen Anywhere</div>
                    <div className="inside-text">It is a long established fact that a reader will be distracted by the readable content of a page when</div>
                    <div className="readmore-btn" id="upper-right-btn">Read more...</div>
                </div>
            </div>
            <div className="bottom-div">
                <div data-aos="fade-down" className="left-div">
                <div className="icon"></div>
                    <div className="box-title">A Magic Moment</div>
                    <div className="inside-text">It is a long established fact that a reader will be distracted by the readable content of a page when</div>
                    <div className="readmore-btn" id="bottom-left-btn">Read more...</div>
                </div>
                <div data-aos="fade-down" className="right-div">
                <div className="icon"></div>
                    <div className="box-title">Go Premium</div>
                    <div className="inside-text">It is a long established fact that a reader will be distracted by the readable content of a page when</div>
                    <div className="readmore-btn" id="bottom-right-btn">Read more...</div>
                </div>
            </div>
            <div className="header-2" id="features-page"><h1>Smart Match Feed</h1></div>
            <div className="header-2-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a </div>
            {/* <div className="circle-2"></div> */}
            <div data-aos="zoom-in" className="pic-2"></div>
            <div className="header-3"><h1>Live Streaming</h1></div>
            <div className="header-3-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a </div>
            {/* <div className="circle-3"></div> */}
            <div data-aos="zoom-in" className="pic-3"></div>
            <div className="outer-box">
                <div className="inner-box">
                    <div className="inner-title">Only real verified profiles are allowed to join</div>
                    <div className="inner-text">State of art face recognition technology to verify profile and photos.</div>
                </div>
            </div>
            <div className="pic-4"></div>
            <div className="div-5">
                <div className="div-5-left">
                    <div className="title-5"><span id="title-span">Connecting People</span></div>
                    <div className="text-5"><span id="text-span">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</span></div>
                </div>
                <div data-aos="zoom-in" className="div-5-right"></div>
            </div>
        </div>
    );
};

export default Features;