import logo from '../assets/logo.png';
import React from 'react';
import './Footer.css'
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer-wrapper bg-white font-poppins" id='contactUs'>
            <div className="ft-content">
                <div className="contactUs">
                    <div className="f-heading">
                       <p className='text-md font-poppins'>Contact Us</p>
                    </div>
                    <div className="CU-body">
                        <span>
                            <h6>IIIT Dharwad,Ittigati Road,</h6>
                            <h6>Near Sattur Colony,Dharwad - 590001</h6>
                        </span>
                        <span>
                            <h6 className='py-2'>alma.matter.iiitdwd@gmail.com</h6>
                            <h6>+91 9036976542</h6>
                            <h6>+91 9929130153</h6>
                        </span>
                    </div>
                </div>
                <div className="help">
                    <div className="f-heading">
                        <p className='text-md font-poppins'>Help</p> 
                    </div>
                    <div className="help-body">
                    <Link to="/"><h6 className=" hover:text-pink-600">Home</h6></Link>
                    <Link to="/jobs"><h6 className=" hover:text-pink-600">Jobs</h6></Link>
                    <Link to="/news"><h6 className=" hover:text-pink-600">News</h6></Link>
                    <Link to="/alumni"><h6 className=" hover:text-pink-600">Alumni</h6></Link>
                    <Link to="/about"><h6 className=" hover:text-pink-600">About</h6></Link>
                    <Link to="/admin"><h6 className=" hover:text-pink-600">Console Login</h6></Link>
                    </div>
                </div>
                <div className="about">
                    <div className="f-heading">
                        <Link className="flex place-items-center gap-2 text-md font-poppins" to="/">
                            <div className="">
                                <div className="">
                                    <img src={logo} alt="" width="40" height="40" />
                                </div>
                            </div>
                            AlmaMatter
                        </Link>
                    </div>
                    <div className="about-body">
                        <p>“An alumni network fostering collaboration, bolstering job prospects, solidifying support structures, and keeping members informed about ongoing institute activities.”</p>
                    </div>
                    <div className="social-media">
                        <div className="icons flex items-center">
                        <a href="https://www.instagram.com/" target="_blank" rel="noReferrer" className="" ><FaSquareInstagram style={{fontSize:'36px', margin: '0px 5px'}} /></a>
                        <a href="https://in.linkedin.com/" target="_blank" rel="noReferrer" className="icon"><AiFillLinkedin style={{fontSize:'41px', margin: '0px 5px'}}/></a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noReferrer" className="icon"><FaSquareFacebook style={{fontSize:'36px', margin: '0px 5px'}}/></a>
                        <a href="https://twitter.com/?lang=en" target="_blank" rel="noReferrer" className="icon"><FaSquareXTwitter style={{fontSize:'36px', margin: '0px 5px'}} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-400">©2024 AlmaMatter. All Rights Reserved</div>
        </div>
    )
}

export default Footer;