import React from "react";
import { Link, useLocation } from "react-router-dom";


import logo from "../assets/images/Nav_logo.png"
import insta_icon from "../assets/images/insta-icon.png"
import facebook_icon from "../assets/images/facebook-icon.png"
import linkedin_icon from "../assets/images/linkedin-icon.png"

function Footer (){

    const path = useLocation();
    const page = path.pathname;

    function scrollTop (){
        window.scrollTo (0,0);
    }
    
    return (
        <>
            <div className={page !== "/underconstruction" ? "max-w-screen-xl mx-auto pt-[172px] pb-12 px-28 sm:block hidden" : "hidden"}>
                <div className="flex flex-row items-start justify-between text-brown">
                    <div className="">
                        <img src={logo} alt="logo" className="w-[242px] h-[157px]" />

                        <h5 className="font-causten font-medium text-[24px] leading-[36px] w-[342px] mt-12">50, Dhamu Nagar, Puliakulam, Coimbatore, Tamil Nadu 641018</h5>
                        
                        <h5 className="font-causten font-medium text-[24px] leading-[36px] mt-5">Hours</h5>

                        <ul className="list-disc font-causten text-[24px] leading-[36px] font-medium ml-12 mb-16">
                            <li>Monday - Friday</li>
                            <li>9.00 AM - 5.00 PM</li>
                        </ul>
                        
                        <h5 className="font-causten font-bold text-[36px] leading-[36px] mt-7">+91 73958 05531</h5>

                        <div className="flex flex-row items-center gap-x-7 mt-9">
                            <a href="https://www.google.com" target="_blank"><img src={insta_icon} alt="Instagram-icon" className="w-[24px] h-[24px]" /></a>
                            <a href="https://www.google.com" target="_blank"><img src={facebook_icon} alt="Facebook-icon" className="w-[24px] h-[24px]" /></a>
                            <a href="https://www.google.com" target="_blank"><img src={linkedin_icon} alt="Linkedin-icon" className="w-[24px] h-[24px]" /></a>
                        </div>
                    </div>
                    
                    <div className="">
                        <div className="flex flex-row gap-x-40">
                            <div className="flex flex-col gap-y-3">
                                <Link to ="/"><h5 className="font-causten font-bold text-[24px] leading-[20px] uppercase">Home</h5></Link>

                                <Link to = "/about"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer mt-3" onClick={scrollTop}>about us</p></Link>
                                <Link to = "/curriculum"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer" onClick={scrollTop}>curriculum</p></Link>
                                <Link to ="/contact"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer" onClick={scrollTop}>contact us</p></Link>
                            </div>

                            <div className="flex flex-col gap-y-3">
                                <Link to ="/"><h5 className="font-causten font-bold text-[24px] leading-[20px] uppercase">Curriculum</h5></Link>

                                <Link to = "/quicklinks"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer mt-3" onClick={scrollTop}>Cambridge (PY)</p></Link>
                                <Link to = "/quicklinks"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer" onClick={scrollTop}>Cambridge (CLSP)</p></Link>
                                <Link to ="/quicklinks"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer" onClick={scrollTop}>IBDP (Diploma)</p></Link>
                                <Link to ="/quicklinks"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer" onClick={scrollTop}>IBCP</p></Link>

                            </div>

                           
                        </div>

                        <div className="flex flex-row gap-x-12 mt-16">
                            <div className="flex flex-col gap-y-1">
                                    <Link to = "/life@RUH"><h5 className="font-causten font-bold text-[24px] leading-[20px] uppercase mb-3">Life @ RUH</h5></Link>

                                    <Link to = "/life@RUH"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer mt-3" onClick={scrollTop}>school life</p></Link>
                                    <Link to = "/sports"><p className="font-causten font-extralight text-[24px] leading-[24px]cursor-pointer" onClick={scrollTop}>sports & co-curricular</p></Link>
                                    <Link to = "/parents-corner"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer" onClick={scrollTop}>parent's corner</p></Link>
                                    {/* <Link to = "/underconstruction"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">publications</p></Link> */}
                            </div>

                            <div className="flex flex-col gap-y-3">
                                <Link to ="/contact"><h5 className="font-causten font-bold text-[24px] leading-[20px] uppercase">ADMISSIONS</h5></Link>

                                <Link to = "/contact"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer mt-3" onClick={scrollTop}>Admission Process</p></Link>
                                <Link to = "/contact"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer" onClick={scrollTop}>Admission Form</p></Link>
                                <Link to ="/contact"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer" onClick={scrollTop}>Enquiry Form</p></Link>
                                

                            </div>

                            
                        </div>

                        <h3 className="font-causten font-bold text-[36px] leading-[20px] mt-24">Join the Ruh'lers</h3>
                        <div className="flex flex-row items-center gap-x-2 mt-7">
                            <input 
                                type="text"
                                placeholder="Enter your email"
                                className="newsletter-field"
                            />

                            <button className="font-causten font-normal text-[16px] w-[106px] h-[44px] bg-brown text-offwhite rounded-[8px]">Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr className="border-t-1 border-brown w-full mt-12" />

                <div className="flex flex-row items-center justify-between mt-5">
                    <p className="font-causten font-semibold text-[16px] text-brown">Ruh Continuum School 2025. All Rights Reserved</p>
                    
                    <div className="flex flex-row items-center gap-x-5">
                        {/* <p className="font-causten font-semibold text-[16px] text-brown cursor-pointer">Terms</p>
                        <p className="font-causten font-semibold text-[16px] text-brown cursor-pointer">Privacy</p>
                        <p className="font-causten font-semibold text-[16px] text-brown cursor-pointer">Cookies</p> */}
                        <a href="https://ssvminstitutions.ac.in" target="_blank"><p className="font-causten font-semibold text-[16px] text-brown cursor-pointer">SSVM Instituitions</p></a>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
                <div className={page !== "/underconstruction" ? "bg-offwhite py-12 px-9 sm:hidden block text-brown" : "hidden"}>
                    <img src={logo} alt="logo" className="w-[150px] h-[100px]" />

                    <div className="flex flex-row gap-x-24 mt-20">
                        <div className="flex flex-col gap-y-3 ">
                            <Link to ="/"><h5 className="font-causten font-bold text-[20px] leading-[20px] uppercase">Home</h5></Link>

                            <Link to = "/about"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>about us</p></Link>
                            <Link to = "/curriculum"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>curriculum</p></Link>
                            <Link to ="/contact"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>contact us</p></Link>
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <Link to= "/life@RUH"><h5 className="font-causten font-bold text-[20px] leading-[20px] uppercase" onClick={scrollTop}>Life @ RUH</h5></Link>
                            <Link to = "/life@RUH"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>school life</p></Link>
                            <Link to = "/sports"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>sports & co-curricular</p></Link>
                            <Link to = "/parents-corner"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>parent's corner</p></Link>
                            {/* <Link to= "/underconstruction"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer">publications</p></Link> */}
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-9 mt-20">
                        <div className="flex flex-col gap-y-3">
                            <Link to ="/contact"><h5 className="font-causten font-bold text-[20px] leading-[20px] uppercase">Admissions</h5></Link>

                            <Link to = "/contact"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>Admission Process</p></Link>
                            <Link to = "/contact"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>Admission Form</p></Link>
                            <Link to ="/contact"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>Enquiry Form</p></Link>
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <Link to= "/quicklinks"><h5 className="font-causten font-bold text-[20px] leading-[20px] uppercase" onClick={scrollTop}>Curriculum</h5></Link>

                            <Link to = "/quicklinks"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>Cambridge (PY)</p></Link>
                            <Link to = "/quicklinks"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>Cambridge (CLSP)</p></Link>
                            <Link to = "/quicklinks"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>IBDP (Diploma)</p></Link>
                            <Link to = "/quicklinks"><p className="font-causten font-extralight text-[16px] leading-[24px] cursor-pointer" onClick={scrollTop}>IBCP</p></Link>
                            
                        </div>
                    </div>

                    <h3 className="font-causten font-bold text-[24px] leading-[20px] mt-20">Join the Ruh'lers</h3>
                        <div className="flex flex-row items-center gap-x-4 mt-7">
                            <input 
                                type="text"
                                placeholder="Enter your email"
                                className="newsletter-field"
                            />

                            <button className="font-causten font-normal text-[16px] w-[106px] h-[44px] bg-orange text-offwhite rounded-[8px]">Subscribe</button>
                        </div>

                    <h5 className="font-causten font-semibold text-[16px] leading-[23px] w-[248px] mt-7">50, Dhamu Nagar, Puliakulam, Coimbatore, Tamil Nadu 641018</h5>

                    <div className="mt-9">
                        <h5 className="font-bold text-[20px]">Hours</h5>
                        <ul className="ml-5 mt-3 list-disc font-causten text-[16px] leading-[20px] text-brown">
                            <li>Monday - Friday</li>
                            <li>9.00 AM - 5.00 PM</li>
                        </ul>
                    </div>
                    <h5 className="font-causten font-bold text-[24px] leading-[36px] mt-5">+91 73958 05531</h5>

                    <div className="flex flex-row items-center gap-x-7 mt-9">
                        <a href="https://www.google.com" target="_blank"><img src={insta_icon} alt="Instagram-icon" className="w-[24px] h-[24px]" /></a>
                        <a href="https://www.google.com" target="_blank"><img src={facebook_icon} alt="Facebook-icon" className="w-[24px] h-[24px]" /></a>
                        <a href="https://www.google.com" target="_blank"><img src={linkedin_icon} alt="Linkedin-icon" className="w-[24px] h-[24px]" /></a>
                    </div>

                    <hr className="border-t-1 border-brown mt-12 w-full" />
                    <p className="font-causten font-semibold text-[17px] text-brown text-center mt-3 ">2025 RUH Schools. All rights reserved</p>
                    <div className="flex flex-row items-center justify-center mt-3 gap-x-5">
                        
                        <p className="font-causten font-semibold text-[16px] text-brown cursor-pointer">Terms</p>
                        <a href="https://www.termsfeed.com/live/bc051d09-f5ea-40e8-b8a9-8323f3edf351" target="_blank"><p className="font-causten font-semibold text-[16px] text-brown cursor-pointer">Privacy</p></a>
                        <p className="font-causten font-semibold text-[16px] text-brown cursor-pointer">Cookies</p>
                    </div>    
                        
                        
                </div>

        </>
    )
}

export default Footer;