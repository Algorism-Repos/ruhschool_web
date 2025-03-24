import {React, useState} from "react";

import AfterSchool from "../Components/AfterSchool";
import CurioustoKnowMore from "../Components/Curioustoknowmore"
import Navbar from "../Components/Navbar"


import group_photo from "../assets/images/sports/group_photo.png"
import studio_1 from "../assets/images/sports/art_studio_1.png"
import studio_2 from "../assets/images/sports/art_studio_2.png"
import basketball from "../assets/images/sports/basketball.png"
import classical_music from "../assets/images/sports/classical_music.png"
import ukele from "../assets/images/sports/ukele.png"
import guitar from "../assets/images/sports/guitar.png"
import silambam from "../assets/images/sports/silambam.png"
import piano from "../assets/images/sports/piano.png"
import handwriting from "../assets/images/sports/handwriting.png"
import soccer from "../assets/images/sports/soccer.png"
import speech from "../assets/images/sports/speech.png"
import swimming from "../assets/images/sports/swimming.png"
import skating from "../assets/images/sports/skating.png"
import yoga from "../assets/images/sports/yoga.png"
import pickleball from "../assets/images/sports/pickleball.png"
import drama from "../assets/images/sports/drama.png"
import sports_arena from "../assets/images/sports/sports_arena.png"
import pulse_of_athletic_excellence from "../assets/images/sports/pulse_of_athletic.png"



function Sports(){

    const data = [
        {
            sport: "Basketball",
            img: basketball,
            content: "Master dribbles, perfect the shots and build teamwork on the court."
        },
        {
            sport: "Silambam/Kalari",
            img: silambam,
            content: "Strengthen the body and mind through the disipline of traditional martial arts.",
        },
        {
            sport: "Speech & Drama",
            img: speech,
            content: "Build confidence, express creatively and bring stories to life on stage.",
        },
        {
            sport: "Piano",
            img: piano,
            content: "Explore melodies, master techniques and let the music flow.",
        },
        {
            sport: "Handwriting",
            img: handwriting,
            content: "Refine every stroke and develop beautiful, confident penmanship.",
        },
        {
            sport: "Soccer",
            img: soccer,
            content: "Learn the foundations of the game, improve footwork and play with strategy",
        },
        {
            sport: "Pickleball",
            img: pickleball,
            content: "A fast-paced, exciting sport that sharpens reflexes and coordination",
        },
        {
            sport: "Advanced Yoga",
            img: yoga,
            content: "Deepen flexibility, strength and mindfulness through guided practice."
        },
        {
            sport: "Drama & Theatre",
            img: drama,
            content: "Step into different roles, refine your performance and embrace storytelling",
        },
        {
            sport: "Ukelele",
            img: ukele,
            content: "Strum, sing and explore the joy of music with this versatile instrument",
        },
        {
            sport: "Guitar",
            img: guitar,
            content: "Learn chords, rhythm and techniques to create music that moves everyone.",
        },
        {
            sport: "Classical Music",
            img: classical_music,
            content: "Dive into the rich traditions of Carnatic music and develop vocal mastery.",
        },
        {
            sport: "Skating",
            img: skating,
            content: "Glide with confidence, build balance and master smooth fluid movements."
        },
        {
            sport: "Swimming",
            img: swimming,
            content: "Strengthen the strokes, boost endurance and feel at home in the water."
        }

    ];

    const[showIcon, setShowIcon] = useState(0);

    return(
        <>
            {/* Banner image small screens */}
            <div className="bg-sports-mobile h-[502px] bg-cover bg-no-repeat sm:hidden block">
                <Navbar />
                <div className="flex flex-col items-center justify-end h-full pb-24 gap-y-5">
                    <h1 className="text-offwhite font-aelyn text-[20px] leading-[33px]">Built for Champions</h1>
                    <h1 className="text-offwhite font-aelyn text-[20px] leading-[33px] ml-32">Designed for Growth</h1>
                </div>
            </div>
            {/* Banner image large screens */}
            <div className="bg-sports sm:h-[837px] md:bg-contain lg:bg-cover bg-no-repeat hidden sm:block">
                <Navbar />
                <div className="flex flex-col items-center justify-center pb-32 h-full">
                    <div className="flex flex-row items-center justify-around w-full">
                        <h1 className="font-aelyn text-[40px] leading-[33px] text-offwhite">Built for Champions</h1>
                        <h1 className="font-aelyn text-[40px] leading-[33px] text-offwhite">Designed for Growth</h1>
                    </div>
                </div>
            </div>

            {/* Sports Arena Section */}

            <div className="max-w-screen-xl mx-auto sm:px-32 px-7">
                <div className="flex flex-col sm:flex-row  sm:items-start sm:my-24 my-12 ">
                    <img src={sports_arena} alt="sport_arena" className="w-[153px] sm:w-[40%] h-full" />
                    <img src={pulse_of_athletic_excellence} alt="pulse_of_athletic_excellence" className="w-[95%] sm:w-[60%] h-full sm:ml-[-60px] animate-bounce transition duration-[8100ms]"/>
                </div>

                <div className="w-[280px] sm:w-[862px] mx-auto text-center">
                    <p className="font-causten text-[16px] sm:text-[24px] sm:leading-[32px]">At the pinnacle o four school lies the Ruh'ftop Sports Arena a premier space where, athletic ambition takes flight. From basketballs echoing with potential to footballs soaring and hockey sticks clashing, our arena is a dynamic stage for every sport.</p>
                    <p className="font-causten text-[20px] sm:text-[33px] sm:leading-[40px] text-brown font-bold mt-12">Whether on the court or the field, Ruh'lers hone their skills build resilience and embody the spirit of true sportsmanship.</p>
                </div>
            </div>
            

            
            <img src={group_photo} alt="Group_photo" className="w-[90%] h-full max-w-[1165px] mx-auto my-20" />

            <div className="max-w-screen-xl mx-auto my-20">
                <div className="flex flex-row justify-center gap-x-0">
                    <img src={studio_1} alt="art_studio_1" className=" w-[188px] h-[207px] sm:w-[564px] sm:h-[622px] z-10"/>
                    <img src={studio_2} alt="art_studio_2" className=" w-[188px] h-[207px] sm:w-[564px] sm:h-[622px] ml-[-40px] sm:ml-[-150px] z-2"/>
                </div>

                <div className="lg:w-[746px] lg:px-0 sm:w-full sm:px-3 w-[310px] mx-auto mt-5 sm:mt-12">
                    <h1 className="font-causten text-[32px] sm:text-[58px] leading-[33px] font-bold text-green text-center">The Art Studio</h1>

                    <p className="font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] text-center mt-9">Our Art Studio is a vibrant space where young artists experiment, explore and express themselves freely. Here, hands get messy, colours blend into new possibilities and ideas take shape in unique ways.</p>
                    <p className="font-causten text-[16px] leading-[24px] sm:text-[32px] sm:leading-[40px] text-center mt-9 text-brown font-bold">Creativity thrives in an environment where exploration is encouraged and expression is limitless.</p>
                </div>
            </div>

            {/* After School Section  */}
            <div className="max-w-screen-xl mx-auto px-5 sm:px-20 sm:mt-40  ">
                <h1 className="font-causten text-[32px] sm:text-[64px] leading-[33px] font-bold text-brown">Afterschool Programs</h1>
                <h4 className="font-causten text-[20px] leading-[28px] sm:text-[36px] sm:leading-[33px] font-semibold text-orange sm:w-[800px] w-[333px] sm:mt-9 mt-3 ">From sports to music and theatre, our afterschool programmes spark passion and growth.</h4>
            
                {/* Large screen list */}
                {data.map((items, index) => {
                    return(
                        <div 
                            key ={index}
                            className = "sm:flex flex-row items-center gap-x-12 h-[120px] border-b-[2px] border-black mt-12 justify-between hidden"
                            onMouseEnter = {() => {setShowIcon(index)}}
                            onMouseLeave = {() => {setShowIcon(null)}}
                        >
                            <h1 className="font-causten text-[48px] leading-[45px]  text-green font-bold uppercase w-[40%] ">{items.sport}</h1>
                            {/* <img src={items.img} alt="sport_icons" className="w-[128px] h-[127px] transition ease-out hover:ease-in duration-300" /> */}
                            {showIcon === index && (<img src={items.img} alt="sport_icons" className="w-[121px] h-[120px]" />)}
                            <p className="font-causten text-[24px] leading-[33px] font-normal text-black w-[420px]">{items.content}</p>
                        </div>
                    )
                })}

                {/* <table className="mt-20 sm:block hidden w-full ">
                    <tbody>
                        {data.map((items) =>{
                            return(
                                    <tr className="border-b-[1px]  border-black "onMouseEnter={() => console.log("Mouse entered " + items.sport)}>
                                        <td className="w-1/2 "> <h1 className="font-causten text-[48px] leading-[33px] text-green font-bold uppercase">{items.sport}</h1></td>
                                        <td className={showIcon != null ? "w-1/4 block" : "w-1/4"}> <img src={items.img} alt="sport_icons" className="w-[128px] h-[127px]" /> </td>
                                        <td className="third_column"><p className="font-causten text-[24px] leading-[33px] font-normal text-black w-[420px]">{items.content}</p> </td>                                
                                    </tr>                          
                            )
                        })}
                    </tbody>
                </table> */}
                {/* !---------------------! */}

                {/* Small screen list to iPAd */}
                <div className="mt-12 w-[334px] w-full my-20 sm:hidden block">
                    {data.map((items) => {
                        return(
                            <>
                                <div className="flex flex-row items-end justify-between border-b-[0.8px] border-green my-9 ">
                                    <div className="pb-5">
                                        <h1 className="font-causten text-[20px] leading-[33px] text-green font-bold uppercase">{items.sport}</h1>
                                        <p className="font-causten text-[16px] leading-[24px] text-black w-[187px] mt-3">{items.content}</p>
                                    </div>

                                    <img src={items.img} alt="items.img" className="w-[127px] h-[128px]" />
                                </div>
                            </>
                        )
                    })}
                </div>
                        
            </div>

            <AfterSchool />

            <CurioustoKnowMore />
        </>
    )
}

export default Sports;