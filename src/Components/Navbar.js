import React from "react";

import logo from "../assets/images/Nav_logo.png"
import hamburger_menu from "../assets/images/hamburger_menu.png"

function Navbar (){
    return(
       <>
        <div className="max-w-screen-xl mx-auto px-5 sm:px-28">
            <div className="w-full flex flex-row justify-between absolute top-0 left-0 px-28   items-center  ">
                <img src={logo} alt="RUH-Logo" className="w-[153px] h-[99px]" />
                <img src={hamburger_menu} alt="hamburger-icon" className="w-[47px] h-[47px] cursor-pointer " />
            </div>
        </div>

        
       </>
    )
}

export default Navbar;