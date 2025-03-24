import {React, useEffect} from "react";
import {motion, useScroll, useTransform, AnimatePresence} from "framer-motion";
import Navbar from "../Components/Navbar"
import AfterSchool from "../Components/AfterSchool";
import Curioustoknowmore from "../Components/Curioustoknowmore";
import Button from "../Components/Button";
import AOS from "aos";
import "aos/dist/aos.css";

import banner_image from "../assets/images/parents_corner/banner_image.png"
import mystery_readers from "../assets/images/parents_corner/mystery_readers.png"
import parents_group from "../assets/images/parents_corner/parents_group.png"
import scroll_1 from "../assets/images/parents_corner/scroll_1.png"
import scroll_2 from "../assets/images/parents_corner/scroll_2.png"
import scroll_3 from "../assets/images/parents_corner/scroll_3.png"
import scroll_4 from "../assets/images/parents_corner/scroll_4.png"
import scroll_5 from "../assets/images/parents_corner/scroll_5.png"
import RUH from "../assets/images/RUH.png"


function Parentscorner(){
    
    useEffect(() =>{
        AOS.init({duration:1500});
    }, [])

    
    return(
        <>
            <div className="bg-green w-full h-fit sm:h-[835px] relative mb-24 sm:mb-[500px]">

                <Navbar />

                <div className="flex flex-col pt-9 sm:pt-36 sm:flex-row h-full text-offwhite px-5">
                    <div className="flex flex-col items-center sm:items-start sm:w-[826px] relative sm:absolute sm:bottom-32 lg:left-12 xl:left-32 ">
                        <h1 className="font-aelyn text-[36px] leading-[42px] sm:text-[64px] sm:leading-[33px] font-normal text-center sm:text-left sm:text-nowrap ">The Ruh'Parents Community</h1>
                        <h4 className="font-causten font-bold text-[20px] sm:text-[32px] leading-[33px] mt-7 text-center sm:text-left">We believe education is a partnership</h4>

                        <p className="font-causten font-normal text-[16px] leading-[23px] sm:text-[24px] sm:leading-[42px] w-[293px] mx-auto sm:w-[443px] my-9 text-center sm:text-left sm:mx-0">The Ruh’Parent Community is where ideas are exchanged, friendships are built, and every parent finds support in the journey of raising curious, confident Ruh’lers.</p>

                        <Button name={"Join the community"} />
                        
                    </div>

                    <img src={banner_image} alt="banner_image" className="w-[363px] h-[436px] sm:w-[575px] sm:h-[691px] sm:absolute sm:bottom-[-250px] lg:right-3 xl:right-12 relative mb-[-30px] mx-auto mt-9" />

                    
                </div>

            </div>

            {/* Mystery Readers */}
            <div className="max-w-screen-xl mx-auto my-20 sm:px-20" data-aos = "fade-up">
                <div className="flex flex-col-reverse gap-y-12 sm:flex-row sm:justify-center items-center">
                    <img src={mystery_readers} alt="myster_readers" className="sm:w-[537px] sm:h-[593px] w-[333px] h-[368px]" />

                    <div className="sm:w-[420px] w-[332px] text-center mx-auto flex flex-col gap-y-5 sm:gap-y-12">
                        <h1 className="font-causten text-[32px] lading-[32px] sm:text-[58px] sm:leading-[64px] font-bold text-green">Mystery Readers</h1>

                        <p className="font-causten text-[20px] sm:text-[24px] leading-[33px] font-normal w-[292px] mx-auto sm:w-full">Our Mystery Readers programme turns reading into an adventure, as parents take the stage as surprise storytellers.</p>
                        <p className="font-causten text-[24px] leading-[33px] font-bold text-brown  mx-auto sm:w-full">This initiative builds excitement around books, strengthens parent engagement and encourages learners to see reading as a shared joy.</p>
                    </div>
                </div>
            </div>

            {/* Parent's corner */}
            <div className="bg-yellow  sm:h-[579px] mt-[450px] sm:mt-0 " data-aos = "fade-up">
                <div className="max-w-screen-xl relative  mx-auto lg:px-5 xl:px-32 py-12 sm:py-20 mt-48 flex flex-col sm:flex-row">
                    <div className=" sm:w-[379px] order-2 sm:order-1 px-9 sm:px-0">
                        <h5 className="font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] font-normal text-brown text-center">At Ruh, we see parents as partners in education. The Ruh'Parent Community is an initiative designed to bring families together, creating a space where collaboration, learning and shared experiences thrive.</h5>
                        <h5 className="font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] font-bold text-green text-center mt-7">By fostering this partnership, we create a stronger foundation for every child's success, nurturing not just academic growth but emotional and social development as well.</h5>
                    </div>

                    <img src={parents_group} alt="student_group" className="w-[393px] h-[375px] lg:w-[606px] lg:h-[600px]  xl:w-[654px] xl:h-[626px] sm:absolute mx-auto sm:mx-0 mt-[-350px] sm:mt-0 sm:top-[-100px] lg:right-0 xl:right-20 order-1 sm:order-2" />
                </div>
            </div>

            <div className=" mx-auto sm:my-28 mt-12 mb-28 px-12 overflow-x-hidden " data-aos = "fade-up">
                <div className="sm:flex sm:flex-row justify-start items-center gap-y-2 sm:gap-y-0 sm:w-full sm:gap-x-5 sm:justify-center  hidden ">
                    <h1 className="font-causten text-[32px] leading-[40px] sm:text-[64px] sm:leading-[80px] font-bold text-left sm:text-center text-brown">Coffee Connections at</h1>
                    <img src={RUH} className="w-[54px] h-[25px] sm:w-[112px] sm:h-[51px] sm:mb-3 mb-[9px]" />
                </div>

                <h1 className = "font-causten text-[32px] leading-[40px] font-bold text-brown block sm:hidden">Coffee <br /> Connections <br /> at <span className = "!font-aelyn text-brown">RuH</span></h1>


                <p className="font-causten w-[293px] sm:w-[774px] mt-3 mx-auto text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] font-normal text-black  text-center">Great discussions begin over coffee! Coffee Connections is a relaxed space for parents to connect, exchange thoughts, and strengthen relationships, making the school community even more vibrant and engaged.</p>

                <motion.div 
                    className="flex flex-row flex-nowrap items-center gap-x-3 mt-20 "
                    initial = {{x : 0}}
                    animate = {{x :"-100%"}}
                    transition = {{duration: 30, repeat: Infinity, ease: "linear"}}
                >
                    <img src={scroll_1} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                    <img src={scroll_2} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                    <img src={scroll_3} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                    <img src={scroll_4} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                    <img src={scroll_5} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />

                    <img src={scroll_1} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                    <img src={scroll_2} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                    <img src={scroll_3} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                    <img src={scroll_4} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                    <img src={scroll_5} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />

                    <img src={scroll_1} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                    <img src={scroll_2} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                    <img src={scroll_3} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                    <img src={scroll_4} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                    <img src={scroll_5} alt="scroll_image_parents" className="w-[300px] h-full sm:w-[597px] sm:h-[368px]" />
                </motion.div>


            </div>
            
            <AfterSchool />

            <Curioustoknowmore />
        </>
    )
}

export default Parentscorner
