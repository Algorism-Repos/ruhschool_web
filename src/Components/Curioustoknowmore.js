import React from "react";
import { Link } from "react-router-dom";

import curious_section_image from "../assets/images/home/curious_section_image.png"

function Curioustoknowmore(){
    return (
        <div className="bg-orange px-5 py-12 sm:p-20 h-[621px] mb-24 sm:mb-0">
            <div className="max-w-screen-xl mx-auto relative">
                <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-end">
                    <img src={curious_section_image} alt="2_child_image" className="w-[333.57px] h-[329px] mt-5 sm:mt-0 sm:w-[543px] sm:h-[536px] sm:absolute lg:left-0 xl:left-[80px] sm:top-[90px] order-2 sm:order-1 " />

                    <div className="flex flex-col sm:items-start items-center sm:flex-none text-offwhite order-1 sm:order-2">
                        <h1 className="font-causten  text-[36px] leading-[45px] mx-auto sm:mx-0  sm:text-left text-center w-[250px]  sm:text-[64px] sm:leading-[84px] font-bold sm:w-[388px]">Curious to know more?</h1>
                        <p className="font-causten font-normal text-[16px] leading-[23px] sm:text-[24px] sm:leading-[33px] sm:w-[458px] mt-7 text-center sm:text-left w-[322px]">From questions about admissions to understanding our approach to learning, we’re here to help. Let’s connect and talk about your Ruh’ler’s path to success.</p>

                        <Link to = "/contact"><button className="w-[250px] h-[48px] sm:w-[322px] sm:h-[72px] bg-offwhite text-brown font-causten text-[20px] sm:text-[24px] leading-[20px] sm:leading-[24px] font-bold rounded-[8px] sm:rounded-[16px] mt-9 ">Contact learning advisor</button></Link>


                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Curioustoknowmore;