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
                <div className="inner-3">
                <ul className="list">
                <li className="title">Get the free app</li>
                        <li>
                            <button className="btn-cls-1"></button>
                            <button className="btn-cls-2"></button>
                        </li>
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
                        
                    </ul>
                </div>
            </div>
            <footer className="footer-2">
                <div className="footer-left-1"><a href="#">Terms of use</a></div>
                <div className="footer-left-2"><a href="#">Privacy policy</a></div>
                <div className="footer-right"><a href="#">©Copyright 2021, Loveria.</a></div>
            </footer>
        </div>
    );
};

export default Footer;