import React from "react";

import friends_has from "../assets/images/home/friends_has.png"
import friends_doc from "../assets/images/home/friends_doc.png"
import friends_yuva from "../assets/images/home/friends_yuva.png"
import friends_raack from "../assets/images/home/friends_raack.png"
import friends_spacekids from "../assets/images/home/friends_spacekidz.png"
import friends_wnc from "../assets/images/home/friends_wnc.png"

function Friends(){
    return(
        <div className="bg-green py-9 sm:py-20 ">
            <div className="max-w-screen-xl mx-auto">
                <h1 className="font-aelyn text-offwhite text-[50px] text-center leading-[60px] block sm:hidden "><span className="font-bold">Friends <br /> of</span> RUH</h1>
                <h1 className="font-aelyn text-offwhite text-[50px] text-center leading-[60px] hidden sm:block "><span className="font-bold">Friends  of</span> RUH</h1>
                <div className="flex flex-row items-center gap-x-5 gap-y-5 justify-center mt-7 flex-wrap">
                    <img src={friends_has} alt="Humane_Animal_Society_Logo" className="w-[93px] h-[93px] sm:w-[173px] sm:h-[173px]"/>
                    <img src={friends_doc} alt="Dogs_of_Coimbatore_Logo" className="w-[93px] h-[93px] sm:w-[173px] sm:h-[173px]"/>
                    <img src={friends_wnc} alt="Dogs_of_Coimbatore_Logo" className="w-[93px] h-[93px] sm:w-[173px] sm:h-[173px]"/>
                    <img src={friends_spacekids} alt="SpaceKids_Logo" className="w-[93px] h-[93px] sm:w-[173px] sm:h-[173px]"/>
                    <img src={friends_yuva} alt="Yuva_Logo" className="w-[93px] h-[93px] sm:w-[173px] sm:h-[173px]"/>
                    <img src={friends_raack} alt="RAACK_Logo" className="w-[93px] h-[93px] sm:w-[173px] sm:h-[173px]"/>
                </div>
            </div>
        </div>
    )
}

export default Friends;