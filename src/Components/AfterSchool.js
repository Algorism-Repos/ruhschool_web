import React from "react";

import after_school_banner from "../assets/images/sports/after_school_banner_kid.png"

function AfterSchool(){
    return(
        <div className="bg-green h-[246px] sm:h-[420px] sm:mt-60">
            <div className="max-w-screen-xl mx-auto relative">
                <div className="flex flex-col sm:items-center items-start gap-y-5 absolute sm:top-12 sm:left-20 top-5 left-3 left-0">
                    <h1 className="font-causten font-bold text-[24px] leading-[40px] sm:text-[64px] w-[146px] sm:leading-[84px] text-offwhite sm:w-[508px] text-left sm:text-center">After School and Beyond Limits!</h1>
                    <button className="bg-offwhite text-brown w-[198px] h-[48px] sm:w-[322px] sm:h-[72px] font-causten font-bold text-[20px] sm:text-[24px] leading-[20px] sm:leading-[24px] sm:px-12 rounded-[16px]">Enroll Today</button>
                </div>
                <img src={after_school_banner} alt="after_school_banner_kid" className="sm:w-[627px] sm:h-[602px] w-[266px] h-[332px] absolute sm:right-0 sm:top-[-182px] right-[-70px] top-[-86px]" />
            </div>
        </div>
    )
}

export default AfterSchool;