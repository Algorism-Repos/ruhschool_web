import {React, useEffect} from "react";
import { Link } from "react-router-dom";

import Curioustoknowmore from "../Components/Curioustoknowmore";

import Navbar from "../Components/Navbar";
import banner_image from "../assets/images/school-life/banner-image.png"
import piazza from "../assets/images/school-life/piazza.png"
import playloft from "../assets/images/school-life/playloft.png"
import sandpit from "../assets/images/school-life/sandpit.png"
import dance_studio from "../assets/images/school-life/dance_studio.png"
import ey_library from "../assets/images/school-life/ey_library.png"
import py_library from "../assets/images/school-life/py_library.png"
import building from "../assets/images/school-life/buidling_circulareconomy.png"
import AOS from "aos";
import "aos/dist/aos.css";


function Schoollife (){

    useEffect(() =>{
            AOS.init({duration:1500});
        }, [])
    return(
        <>

            <div className="bg-brown">
                <Navbar />
                <div className="max-w-screen-xl mx-auto relative ">
                    <div className="flex flex-col sm:flex-row lg:gap-x-7 xl:gap-x-12 items-center pt-12 sm:pt-9  lg:px-12 xl:px-32">
                        <div className="text-offwhite flex flex-col gap-y-3 sm:gap-y-7 text-center sm:text-left  ">
                            <h1 className="font-aelyn font-normal text-[36px] sm:text-[64px] leading-[33px] w-[290px] sm:w-[466px] ">A Ruh'ler's Life</h1>
                            <h3 className="font-causten font-bold text-[20px] sm:text-[32px] leading-[33px] w-[287px] sm:w-[459px]">A Journey Beyond the Classroom</h3>
                            <p className="font-causten font-normal text-[16px] sm:text-[24px] leading-[23px] sm:leading-[42px] w-[293px] sm:w-[443px]">Every details is crafted with the Ruh'ler in mind, creating an environment where learning flourishes</p>

                            <Link to = "/contact"><button className="w-[198px] h-[48px] sm:w-[265px] sm:h-[72px] bg-offwhite text-brown font-causten text-[20px] sm:text-[24px] leading-[24px] font-bold rounded-[16px] mt-5 sm:mt-12 cursor-pointer">Book Campus Tour</button></Link>
                        </div>
                        <img src={banner_image} alt="banner-image" className="lg:w-[408px] lg:h-[517px] xl:w-[508px] xl:h-[617px] w-[393px] h-[477px] mt-12" />
                    </div>
                </div>
            </div>

            {/* Piazza Section */}
            <div className="max-w-screen-xl mx-auto lg:px-7 xl:px-12 my-28" data-aos = "fade-up">
                <div className="flex flex-col sm:flex-row items-center lg:gap-x-9 xl:gap-x-20 gap-y-5 sm:gap-y-0">
                    <img src={piazza} alt="piazza_image" className="sm:w-[613px] h-fit w-[369px]" />

                    <div className="w-[337px] sm:w-[299px] text-center ">
                        <h1 className="font-causten font-bold text-[32px] leading-[24px] sm:text-[58px] sm:leading-[33px] text-green">The Piazza</h1>
                        <p className="font-causten font-normal text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] text-black mt-7">Our Piazza is designed to reflect openness and community, inspired by the Reggio approach. With views of learning studios, play areas, and common spaces, it's a place where relationships and learning flourish for each learner.</p>
                    </div>
                </div>

            </div>

            {/* Playloft Section */}
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center my-28" data-aos = "fade-up">
                <img src={playloft} alt="playloft" className="xl:w-[1040px] xl:h-[616px] lg:w-[90%] lg:h-full mb-5 w-[378px] h-[226px]"/>

                <div className="sm:w-[686px] w-[285px] text-center flex flex-col gap-y-9 mt-5">
                    <h1 className="font-causten font-bold text-[32px] leading-[24px] sm:text-[58px] sm:leading-[33px] text-brown">The Playloft</h1>
                    <p className="font-causten font-normal text-black text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px]">Our play loft is a space where imagination and play come alive, helping our little Ruh'lers build confidence, explore and grow. It's designed to nurture social connections, spark adevntures and make learning a joyful experience.</p>

                    <h5 className="font-causten font-bold text-green text-[20px] leading-[24px] sm:text-[32px] sm:leading-[40px]">We created this space because we believe that play is at the heart of learning</h5>


                </div>

            </div>

            {/* Library Section */}
            <div className="max-w-screen-xl mx-auto lg:px-9 xl:px-32 my-20" data-aos ="fade-up">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-y-12 sm:gap-y-0">
                    <div className="sm:w-1/2 w-full">
                        <img src={ey_library} alt="EY_Library_Image" className=" mx-auto sm:w-[474px] sm:h-[524px] w-[364px] h-[387px]" />

                        <div className="w-[337px] sm:w-[419px] mx-auto text-center mt-7">
                            <h1 className="font-causten font-bold text-[32px] leading-[24px] sm:text-[58px] sm:leading-[33px] text-green ">EY Library</h1>
                            <p className="font-causten font-normal text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] w-[255px] sm:w-full mx-auto sm:mx-0 text-black mt-7">This library is a magical corner straight from a storybook, where every shelf invites young minds to dive into their next adventure. The space wraps around Ruh’lers like a warm hug, making every visit feel like a cherished part of their daily life.</p>
                        </div>
                    </div>

                    <div className="sm:w-1/2 w-full">
                        <img src={py_library} alt="EY_Library_Image" className="sm:w-[474px] mx-auto sm:h-[524px] w-[357px] h-[380px]" />

                        <div className="w-[337px] sm:w-[416px] mx-auto text-center mt-7">
                            <h1 className="font-causten font-bold text-[32px] leading-[24px] sm:text-[58px] sm:leading-[33px] text-green ">PY Library</h1>
                            <p className="font-causten font-normal text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] text-black mt-7 w-[255px] sm:w-full mx-auto sm:mx-0">Imagine a cosy nook where the charm of a bookstore mingles with the tranquility of a cafe. This library is crafted to be a haven for young readers, offering the comfort of a cafe while preserving the peaceful quiet of a library.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Building Banner */}
            <div className = "bg-brown">
                <div className="max-w-screen-xl mx-auto sm:mt-48 relative lg:h-[500px] xl:h-[578px] pt-16" data-aos = "fade-up">
                    <div className="flex flex-col sm:flex-row ">
                        <div className="order-2">
                            <img src={building} alt="building_front_image" className="w-[419px] mx-auto h-[331px] lg:w-[600px] lg:h-[526px] xl:w-[803px] xl:h-[689px] relative sm:absolute lg:top-[-75px] xl:top-[-160px] mt-12" />
                        </div>
                        <div className="relative sm:absolute lg:right-12 xl:right-20 sm:top-28 order-1 mx-auto w-[322px] flex flex-col items-center">
                            <h2 className="font-causten font-bold text-[32px] leading-[33px] text-offwhite">Play, Learn, Thrive</h2>
                            <p className="font-causten font-normal text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] text-offwhite mt-7 text-center">Fostering a love for the environment while balancing play and learning, <span className="font-bold text-yellow"> we create spaces where curiosity thrives and young minds flourish.</span></p>

                            <Link to = "/contact"><button className="w-[198px] h-[48px] sm:w-[265px] sm:h-[72px] bg-offwhite text-brown font-causten text-[20px] sm:text-[24px] leading-[24px] font-bold rounded-[16px] mt-12 cursor-pointer">Book Campus Tour</button></Link>

                        </div>
                    </div>
                </div>
            </div>

            {/* Sandpit Section */}
            <div className="max-w-screen-xl mx-auto sm:px-12 sm:my-28 my-20" data-aos = "fade-up">
                <div className="flex flex-col items-center sm:gap-x-20 gap-y-5 sm:gap-y-0">
                    <img src={sandpit} alt="sandpit_image" className="sm:w-[687px] h-fit w-[376px]" />

                    <div className="w-[337px] sm:w-[686px] text-center sm:mt-12 ">
                        <h1 className="font-causten font-bold text-[32px] leading-[24px] sm:text-[58px] sm:leading-[33px] text-green ">The Sandpit</h1>
                        <p className="font-causten font-normal text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] text-black mt-7 w-[285px] mx-auto sm:w-full">Our sand play area is a space for creativity, exploration and learning. As learners dig, build and shapre, they develop fine motor skills, problem-solving abilities and social connections</p>

                        <h5 className="w-[285px] sm:w-full mx-auto mt-9 text-brown font-causten text-[20px] sm:text-[30px] sm:leading-[40px] font-bold ">Whether constructing castles or feeling the sand, they're growing through play.</h5>
                    </div>
                </div>

            </div>

            {/* Dance Studio Section */}
            <div className="max-w-screen-xl mx-auto sm:px-12 sm:mt-40 sm:mb-20 my-20" data-aos = "fade-up">
                <div className="flex flex-col items-center sm:flex-row lg:gap-x-12 xl:gap-x-20">
                    <img src={dance_studio} alt="piazza_image" className="lg:w-[520px] xl:w-[720px] sm:h-fit w-[381px] h-[406px] mx-auto mb-5" />

                    <div className="sm:w-[348px] w-[365px] flex flex-col items-center sm:flex-none ">
                        <h1 className="font-causten font-bold  text-center sm:text-left text-[32px] leading-[24px] sm:text-[58px] sm:leading-[33px] text-brown">Dance Studio</h1>
                        <p className="font-causten font-normal text-center sm:text-left  text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] text-black mt-7 w-[299px] sm:w-full  ">No matter the style, we create an environment where technique, artistry, and expression come together. Ruh'lers express themselves in this space, moving freely, passionately, and unapologetically.</p>
                    </div>
                </div>

            </div>

            <Curioustoknowmore />

        </>
    )
}

export default Schoollife;