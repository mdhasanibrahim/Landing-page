import React, {useState} from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import "../css/Navbar.css";
import iconImage from "../images/icon.png";

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <a href="#home-page"><img className="icon" src={iconImage}/></a></div>
                         <div className="menu" id={showLinks ? "hidden" : ""}>
                            <a onClick={()=> setShowLinks(false)} href="#home-page">Home</a>
                            <a onClick={()=> setShowLinks(false)} href="#download-page">Download</a>
                            <a onClick={()=> setShowLinks(false)} href="#features-page">Features</a>
                            <a onClick={()=> setShowLinks(false)} href="#contact-us-page">Contact Us</a>
                        </div>
                        <button className="nav-btn" onClick={()=> setShowLinks(!showLinks)}>
                            <AiOutlineMenu className="menu-btn"/>
                        </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;