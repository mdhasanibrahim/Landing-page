import React from 'react';
import '../css/Footer.css';
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="footer-page">
            <div className="outer-footer">
                <div className="inner-1">
                    <ul className="list">
                        <li className="title-1">Loveria</li>
                        <li className="para-1">Match chat date anytime anywhere. Just swipe.</li>
                    </ul>
                </div>
                <div className="inner-2">
                    <ul className="list">
                        <li className="title">Company</li>
                        <li className="pera"><a href="#">Inside Loveria</a></li>
                        <li className="pera"><a href="#">Jobs</a></li>
                        <li className="pera"><a href="#">Blog</a></li>
                        <li className="pera"><a href="#">Press</a></li>
                        <li className="pera"><a href="#">Stories</a></li>
                    </ul>
                </div>
                <div className="inner-3">
                <ul className="list">
                        <li className="title">Business</li>
                        <li className="pera"><a href="#">App promotion</a></li>
                        <li className="pera"><a href="#">Partnerships</a></li>
                        <li className="pera"><a href="#">Affiliate program</a></li>
                    </ul>
                </div>
                <div className="inner-4">
                <ul className="list">
                        <li className="title">More</li>
                        <li className="pera"><a href="#">Contact & Support</a></li>
                        <li className="pera"><a href="#">Tearms & Conditions</a></li>
                        <li className="pera"><a href="#">Privacy Policy</a></li>
                        <li className="pera"><a href="#">Security</a></li>
                    </ul>
                </div>
                <div className="inner-5">
                <ul className="list">
                        <li className="title">Social</li>
                        <li className="social">
                            <a href="https://www.instagram.com"><BsInstagram/></a>
                            <a href="https://www.facebook.com"><FaFacebookF/></a>
                            <a href="https://twitter.com"><BsTwitter/></a>
                        </li>
                        <li className="title">Connect People</li>
                        <li>
                            <button className="btn-cls-1"></button>
                            <button className="btn-cls-2"></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;