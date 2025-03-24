import {React, useState} from "react";
import { Link } from "react-router-dom";
import ruhlogo_offwhite from "../assets/images/ruhlogo_offwhite.png"
import hamburger_menu_offwhite from "../assets/images/hamburger_menu_offwhite.png"
import facebook_icon_offwhite from "../assets/images/facebook-icon-offwhite.png"
import insta_icon_offwhite from "../assets/images/insta-icon-offwhite.png"
import linkedin_icon_offwhite from "../assets/images/linkedin-icon-offwhite.png"
import close_icon from "../assets/images/close-icon.png"

function ComingSoon (){

    const [navMenu, setNavMenu] = useState(false);

    return(
        <>
            <div className="!bg-brown w-screen h-screen">
                <div className=" w-full px-5 pt-7 sm:pt-16 sm:px-28 z-10">
                    <div className="flex flex-row justify-between items-center">
                        <Link to ="/home"><img src={ruhlogo_offwhite} alt="RUH-Logo" className="w-[153px] h-[99px]"/></Link>
                        <img src={hamburger_menu_offwhite} alt="hamburger-icon" className="w-[47px] h-[47px] cursor-pointer " onClick = {() => {setNavMenu(true)}}/>
                    </div>
                </div>

                <div className="max-w-[1280px] mx-auto text-offwhite flex flex-col items-center justify-center px-7 sm:px-20 sm:pt-40 mt-28 sm:mt-0 ">
                    <h1 className="font-aelyn sm:text-[64px] text-[30px] leading-[36px] uppercase text-center">Work in Progress...</h1>
                    <h4 className="font-causten sm:text-[32px] text-[20px] leading-[36px] font-medium text-center sm:mt-5">just like young minds!</h4>

                    <p className="font-causten font-medium text-[18px] sm:text-[20px] leading-[24px] w-full sm:w-[620px] text-center mt-9 sm:mt-16">Our website is under construction, just like the creative minds we nurture! Coming soon to inspire curiosity and wonder</p>

                    <hr className="border-t-[2px] border-offwhite w-full mt-20" />

                    <p className="font-causten text-[18px] sm:text-[24px] leading-[36px] mt-9 text-center sm:text-left">50, Dhamu Nagar, Puliakulam, Coimbatore Tamil Nadu - 641018</p>
                    <p className="font-causten text-[25px] sm:text-[32px] leading-[36px] mt-9 font-medium">+91 73958 05531</p>

                    <div className="flex items-center gap-x-9 mt-9">
                        <a href= "https://www.google.com"><img src={insta_icon_offwhite} alt="instagram_icon" className="w-[43px] h-[43px]" target="_blank"/></a>
                        <a href="https://www.google.com"><img src={facebook_icon_offwhite} alt="instagram_icon" className="w-[43px] h-[43px]" target="_blank"/></a>
                        <a href="https://www.google.com"><img src={linkedin_icon_offwhite} alt="instagram_icon" className="w-[43px] h-[43px]" target="_blank"/></a>
                    </div>
                </div>
            </div>


            {/* Menu Pop-up */}
            <div className={navMenu === false ? "hidden" : "w-screen h-screen bg-green fixed left-0 top-0 overflow-hidden z-10"}>
                <div className="max-w-screen-xl mx-auto sm:p-20 px-9 py-7">
                    <div className="flex flex-row items-start justify-between">
                        <img src={ruhlogo_offwhite} alt="ruhlogo-offwhite" className="sm:w-[208px] sm:h-[135px] w-[152px] h-[98px]" />
                        <img src={close_icon} alt="close-icon" className="sm:w-[72px] w-[32px] h-[32px] sm:h-[72px]  cursor-pointer" onClick = {() => {setNavMenu(false)}}/>
                    </div>
                    
                    <div className="flex flex-col gap-y-12 sm:flex-row sm:gap-x-36 text-offwhite mt-20">
                        <div className="flex flex-col gap-y-3">
                            <h5 className="font-causten font-bold text-[36px] sm:text-[48px] leading-[20px] uppercase">Home</h5>

                            <p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer mt-3">about us</p>
                            <p className="font-causten font-extralight text-[24px] leading-[24px]cursor-pointer">curriculum</p>
                            <Link to ="/contact"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">contact us</p></Link>
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <h5 className="font-causten font-bold text-[36px] sm:text-[48px] leading-[20px] uppercase">Life @ RUH</h5>

                            <p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer mt-3">school life</p>
                            <p className="font-causten font-extralight text-[24px] leading-[24px]cursor-pointer">sports & co-curricular</p>
                            <p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">parent's corner</p>
                            <p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">publications</p>
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

export default ComingSoon;