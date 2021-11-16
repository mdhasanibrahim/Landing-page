import React from 'react';
import "../css/Home.css";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


const Home = () => {
    return (
        <div className="home" id="home-page">
                <nav className="navbar">
                    <div className="nav-width">
                        <a className="logo" href="#home-page">Loveria</a>
                        <a href="#home-page">Home</a>
                        <a href="#">About Us</a>
                        <a href="#features-page">Features</a>
                        <a className="contact-option" href="#">Contact Us</a>
                        <a href="#">Sign up</a>
                        <button className="login-btn">Login</button>
                    </div>
                </nav>
                <div className="icons">
                    <div className="insta-icon"><a href="https://www.instagram.com"><BsInstagram/></a></div>
                    <div className="fb-icon"><a  href="https://www.facebook.com"><FaFacebookF/></a></div>
                    <div className="twitter-icon"><a  href="https://twitter.com"><BsTwitter/></a></div>
                </div>
                <div className="home-contents">
                    <h1 className="line-1">It Is Never Too Late To Fall In Love.</h1>
                    <p className="line-2">One day, someone will walk into your life and make you see why it <br/> never worked out with anyone else.</p>
                    <button className="btn-1">FIND A LOVE</button>
                    <h1 className="line-3">It's a match!</h1>
                    <p className="line-4">You and jessica has common interests.</p>
                    <button className="download-btn"></button>
                </div>
                <div className="chat-pic"></div>
        </div>
    );
};

export default Home;