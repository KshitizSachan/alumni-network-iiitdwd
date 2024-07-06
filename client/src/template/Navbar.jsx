import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {BorderButton, PrimaryButton} from "../components/Buttons";
import LoginSignup from "../pages/LoginSignup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRecoilValue} from "recoil";
import {userAtom} from "../store/atoms/User";
import {Avatar} from "@mui/material";
import Avatar1 from "../assets/avatar-22.png";
import logo from '../assets/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [dialogOpen, setDialogOpen] = useState("");
    const user= useRecoilValue(userAtom);

    const notify = (msg) => {
        toast.info(msg, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored"
        })
    };

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

            <Link to="/" className="home-link flex justify-center items-center">
                <img src={logo}
                     alt="logo"
                     style={{
                         width: '60px',
                         height: '40px'
                     }}
                     className="" />
                <div className="text-black hover:text-primaryPink flex ml-2">
                <h1 className="w-full text-2xl">AlmaMatter</h1>
                    <p className="text-sm pt-3 pl-1">Alpha</p>
                </div>
            </Link>

            <ul className="hidden md:flex ">
                {currentPage==="/" ? (
                  <Link to="/">
                  <li className={buttonStyle2}>
                      <div className="">
                          Home
                      </div>
                  </li>
                  </Link>
                ):(
                  <Link to="/">
                <li className={buttonStyle1}>
                    <div className="">
                        Home
                    </div>
                </li>
                  </Link>
                )}

                {currentPage==="/alumni" ? (
                  <Link to="/alumni">
                <li className={buttonStyle2}>
                    <div className="">
                        Alumni
                    </div>
                </li>
                  </Link>
                  ): (
                  <Link to="/alumni">
                  <li className={buttonStyle1}>
                      <div className="">
                          Alumni
                      </div>
                  </li></Link>
                )}
                {currentPage==="/jobs" ? (
                  <Link to="/jobs">
                <li className={buttonStyle2}>
                    <div className="">
                        Jobs
                    </div>
                </li>
                  </Link>
                  ): (
                  <Link to="/jobs">
                  <li className={buttonStyle1}>
                      <div className="">
                          Jobs
                      </div>
                  </li></Link>
                )}
                {currentPage==="/news" ? (
                  <Link to="/news">
                <li className={buttonStyle2}>
                    <div className="">
                        NewsHub
                    </div>
                </li></Link>
                  ): (
                  <Link to="/news">
                  <li className={buttonStyle1}>
                      <div className="">
                          NewsHub
                      </div>
                  </li></Link>
                )}
                {currentPage==="/about" ? (
                  <Link to="/about">
                  <li
                    className={buttonStyle2}>
                      <div className="">
                          About Us
                      </div>
                  </li></Link>
                ): (
                  <Link to="/about">
                  <li className={buttonStyle1}>
                      <div className="">
                          About Us
                      </div>
                  </li>
                  </Link>
                )}
            </ul>
            {isLaptop && !user.basic.isLoggedIn &&(
                <div className="flex">
                    <div onClick={() => setDialogOpen("login")}>
                        <PrimaryButton name="Login" />
                    </div>
                    <div onClick={() => setDialogOpen("signup")}>
                        <BorderButton name="Signup" />
                    </div>
                </div>
            )}
            {isLaptop && user.basic.isLoggedIn &&(
              <Link to="/profile">
                  <Avatar alt='profile' src={user?.profilePic || Avatar1} />
              </Link>
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
                         className="block md:hidden fixed right-7 top-10">
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
                    {user.basic.isLoggedIn &&(
                      <li className="p-4 border-b border-gray-600">
                          <Link to="/profile">Profile</Link>
                      </li>
                    )} {!user.basic.isLoggedIn && (
                  <li className="p-4 border-b border-gray-600">
                          <div className="cursor-pointer"
                               onClick={() => setDialogOpen("login")}>
                              Login/Signup
                          </div>
                      </li>
                    )}
                </div>
            </ul>
        </div>
          {dialogOpen !== "" && <LoginSignup type={dialogOpen}
                                             handleClose={() => setDialogOpen("")}
                                             callToast={notify} />} <ToastContainer position="top-right"
                                                                                    autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="light"
        />
      </>
    );
};

export default Navbar;
