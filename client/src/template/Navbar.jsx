import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {BorderButton, PrimaryButton} from "../components/Buttons";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const currentPage = window.location.pathname;

    const buttonStyle1="cursor-pointer hover:bg-primaryPink hover:text-white rounded-full px-3 flex items-center py-1 mx-1"
    const buttonStyle2="cursor-pointer bg-primaryPink text-white rounded-full px-3 flex items-center py-1 mx-1"

    // const isMobile = useMediaQuery({ maxWidth: 767 }); // Define the mobile breakpoint
    const isLaptop = useMediaQuery({ minWidth: 780 });



    return (
      <>
        <div className="shadow-navbarShadow z-50 h-auto top-0 left-0 right-0 bg-white m-5 rounded-lg fixed flex justify-between items-center px-2 py-2 ">
            <Link to="/" className="home-link flex">
                {/*<img src={logo2} alt="logo" className="" />*/}
                <div className="text-black hover:text-primaryPink flex">
                    <h1 className="w-full text-2xl">AlmaMatter</h1>
                    <p className="text-sm pt-3 pl-1">Beta</p>
                </div>
            </Link>

            <ul className="hidden md:flex ">
                {currentPage==="/" ? (
                  <li className={buttonStyle2}>
                      <div className="">
                          <Link to="/">Home</Link>
                      </div>
                  </li>
                ):(
                <li className={buttonStyle1}>
                    <div className="">
                        <Link to="/">Home</Link>
                    </div>
                </li>
                )}

                {currentPage==="/alumni" ? (
                <li className={buttonStyle2}>
                    <div className="">
                        <Link to="/alumni">Alumni</Link>
                    </div>
                </li>
                  ): (
                  <li className={buttonStyle1}>
                      <div className="">
                          <Link to="/alumni">Alumni</Link>
                      </div>
                  </li>
                )}
                {currentPage==="/jobs" ? (
                <li className={buttonStyle2}>
                    <div className="">
                        <Link to="/jobs">Jobs</Link>
                    </div>
                </li>
                  ): (
                  <li className={buttonStyle1}>
                      <div className="">
                          <Link to="/jobs">Jobs</Link>
                      </div>
                  </li>
                )}
                {currentPage==="/news" ? (
                <li className={buttonStyle2}>
                    <div className="">
                        <Link to="/news">NewsHub</Link>
                    </div>
                </li>
                  ): (
                  <li className={buttonStyle1}>
                      <div className="">
                          <Link to="/news">NewsHub</Link>
                      </div>
                  </li>
                )}
                {currentPage==="/about" ? (
                  <li
                    className={buttonStyle2}>
                      <div className="">
                          <Link to="/about">About Us</Link>
                      </div>
                  </li>
                ): (
                  <li className={buttonStyle1}>
                      <div className="">
                          <Link to="/about">About Us</Link>
                      </div>
                  </li>
                )}
            </ul>
            {isLaptop && (
              <div className="flex">
                  <Link to="/login"> <PrimaryButton name="Login" /> </Link> <Link to="/signup"> <BorderButton name="Signup" />
                    </Link>
                </div>
            )}

            <div onClick={handleNav} className="block md:hidden">
                {nav ? (null) : <AiOutlineMenu size={20} />}
            </div>

            <ul
                className={
                    nav
                        ? "fixed right-0 top-0 w-[60%] h-full border-r border-r-gray-900  ease-in-out duration-500  backdrop-blur-[10px] bg-opacity-0"
                        : "ease-in-out duration-500 fixed left-[-100%] "
                }
            >
                <div className="">
                    <div onClick={handleNav}
                         className="block md:hidden fixed right-7 top-10 ">
                        {nav ? <AiOutlineClose size={20} /> : (null)}
                    </div>
                    {/* <h1 className='w-full text-3xl font-bold  m-4'>REACT.</h1> */}
                    <li className="mt-20 p-4 border-b border-gray-600">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/alumni">Alumni</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/jobs">Jobs</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/news">NewsHub</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="/login">Login/Signup</Link>
                    </li>
                </div>
            </ul>
        </div>
      </>
    );
};

export default Navbar;
