import {React, useState} from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/Nav_logo.png"
import hamburger_menu from "../assets/images/hamburger_menu.png"
import logo_offwhite from "../assets/images/ruhlogo_offwhite.png"
import hamburger_menu_offwhite from "../assets/images/hamburger_menu_offwhite.png"
import close_icon from "../assets/images/close-icon.png"
import insta_icon_offwhite from "../assets/images/insta-icon-offwhite.png"
import linkedin_icon_offwhite from "../assets/images/linkedin-icon-offwhite.png"
import facebook_icon_offwhite from "../assets/images/facebook-icon-offwhite.png"

function Navbar (){
    const [navMenu, setNavMenu] = useState(false);

    const location = useLocation ();
    const pathname = location.pathname.slice(1);

    return(
       <>

        {/* About Page Navbar */}
        <div className={pathname === "about" ? "px-5 sm:px-28 z-10 block" : "hidden"}>
            <div className="w-full flex flex-row justify-between items-center pt-7">
                <Link to = "/"><img src={logo_offwhite} alt="RUH-Logo" className="w-[78px] h-[50px] sm:w-[153px] sm:h-[99px]" /></Link>
                <img src={hamburger_menu} alt="hamburger-icon" className="w-[30px] h-[30px] sm:w-[47px] sm:h-[47px] cursor-pointer sm:block hidden" onClick={() => {setNavMenu(true)}} />
                <img src={hamburger_menu_offwhite} alt="hamburger-icon" className="w-[30px] h-[30px] sm:w-[47px] sm:h-[47px] cursor-pointer sm:hidden block" onClick={() => {setNavMenu(true)}} />
            </div>
        </div>
        
        
        {/* Common Nav */}
        <div className={pathname != "about" ? "px-5 sm:px-28 z-10 block" : "hidden"}>
            <div className="w-full flex flex-row justify-between items-center pt-7">
                <Link to = "/"><img src={pathname === "parents-corner" || pathname === "life@RUH"? logo_offwhite : logo} alt="RUH-Logo" className="w-[78px] h-[50px] sm:w-[153px] sm:h-[99px]" /></Link>
                {/* <h1 className={pathname === "blog/1" || pathname === "blog/2" ? "font-causten font-bold text-[32px] sm:text-[60px] leading-[44px]  text-green " :"hidden"}>The Ruh'lington Post</h1> */}
                <img src={pathname === "parents-corner" || pathname === "life@RUH"? hamburger_menu_offwhite : hamburger_menu} alt="hamburger-icon" className="w-[30px] h-[30px] sm:w-[47px] sm:h-[47px] cursor-pointer" onClick={() => {setNavMenu(true)}} />
            </div>
        </div>
    

        {/* Pop-up Menu */}
        <div className={navMenu === false ? "hidden" : "w-screen h-screen bg-green fixed left-0 top-0 z-10 overflow-hidden"}>
                <div className="max-w-screen-xl mx-auto sm:p-20 px-9 py-7">
                    <div className="flex flex-row items-start justify-between">
                        <img src={logo_offwhite} alt="ruhlogo-offwhite" className="sm:w-[208px] sm:h-[135px] w-[152px] h-[98px]" />
                        <img src={close_icon} alt="close-icon" className="sm:w-[72px] w-[32px] h-[32px] sm:h-[72px]  cursor-pointer" onClick = {() => setNavMenu(false)} />
                    </div>
                    
                    <div className="flex flex-col gap-y-12 sm:flex-row sm:gap-x-36 text-offwhite mt-20">
                        <div className="flex flex-col gap-y-3">
                            <Link to = "/"><h5 className="font-causten font-bold text-[36px] sm:text-[48px] leading-[20px] uppercase">Home</h5></Link>

                            <Link to = "/about"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer mt-3">about us</p></Link>
                            <Link to = "/curriculum"><p className="font-causten font-extralight text-[24px] leading-[24px]cursor-pointer">curriculum</p></Link>
                            <Link to ="/contact"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">contact us</p></Link>
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <Link to = "/life@RUH"><h5 className="font-causten font-bold text-[36px] sm:text-[48px] leading-[20px] uppercase">Life @ RUH</h5></Link>

                            <a href = "/life@RUH"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer mt-3">school life</p></a>
                            <a href = "/sports"><p className="font-causten font-extralight text-[24px] leading-[24px]cursor-pointer">sports & co-curricular</p></a>
                            <a href = "/parents-corner"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">parent's corner</p></a>
                            {/* <Link to = "/underconstruction"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">publications</p></Link> */}
                        </div>
                    </div>

                    <hr className="border-t-2 border-offwhite w-full sm:mt-20 mt-12" />

                    <h6 className="font-causten sm:text-[24px] text-[16px] leading-[24px] sm:leading-[38px] w-[276px] sm:w-full font-light text-offwhite mt-5">50, Dhamu Nagar, Puliakulam Coimbatore, Tamil Nadu 641018</h6>
                    <h6 className="font-causten text-[24px] leading-[38px] font-semibold text-offwhite mt-3">+91 73958 05531</h6>

                    <div className="flex flex-row items-center gap-x-7 mt-3 sm:mt-9">
                        <a href="https://www.google.com" target="_blank"><img src={insta_icon_offwhite} alt="Instagram-icon" className="sm:w-[44px] sm:h-[42px] w-[35px] h-[35px]" /></a>
                        <a href="https://www.google.com" target="_blank"><img src={facebook_icon_offwhite} alt="Facebook-icon" className="sm:w-[44px] sm:h-[42px] w-[35px] h-[35px]" /></a>
                        <a href="https://www.google.com" target="_blank"><img src={linkedin_icon_offwhite} alt="Linkedin-icon" className="sm:w-[44px] sm:h-[42px] w-[35px] h-[35px]" /></a>
                    </div>
                </div>
        </div>

        
       </>
    )
}

export default Navbar;