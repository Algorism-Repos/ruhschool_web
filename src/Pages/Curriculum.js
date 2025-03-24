import {React, useEffect} from "react";

import Navbar from "../Components/Navbar";
import Curioustoknowmore from "../Components/Curioustoknowmore"
import ExperimentalLearning from "../Components/ExperimentalLearning";
import AOS from "aos";
import "aos/dist/aos.css";

import pie_chart from "../assets/images/curriculum/pie_chart.png"
import early_curriculum from "../assets/images/curriculum/early_curriculum_image.png"
import primary_curriculum from "../assets/images/curriculum/primary_curriculum.png"
import visual_learners from "../assets/images/curriculum/visual_learners.png"
import auditory_learners from "../assets/images/curriculum/auditory_learners.png"
import kinaesthetic_learners from "../assets/images/curriculum/kinaesthetic_learners.png"
import diversity_kid from "../assets/images/curriculum/diversity_kid.png"
import experimental_1 from "../assets/images/curriculum/experimental_1.png"
import experimental_2 from "../assets/images/curriculum/experimental_2.png"
import experimental_3 from "../assets/images/curriculum/experimental_3.png"
import experimental_4 from "../assets/images/curriculum/experimental_4.png"
import weighing_scale from "../assets/images/curriculum/Weigh-Scale---Ruh.gif"


function Curriculum (){

    useEffect(() =>{
            AOS.init({duration:1500});
    }, [])

    return(
        <>
            <div className="bg-curriculum-mobile h-[30vh] sm:bg-curriculum  bg-cover w-full sm:h-[800px]  sm:bg-contain xl:bg-cover bg-no-repeat relative">
                <Navbar/>
                <h1 className="font-aelyn text-[36px] leading-[33px] font-normal text-brown text-center mt-20 hidden sm:block">Nurturing Inquiry, Knowledge & Action</h1>
            </div>

            {/* Pie-Chart Section */}
            <div className="max-w-screen-xl mx-auto my-20 " data-aos= "fade-up">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-x-20">
                    <div>
                        <h1 className="font-causten text-[32px] leading-[33px] sm:text-[40px] sm:leading-[38px] font-normal text-black text-center"><span className="!font-aelyn text-brown">RuH</span>'s <br /> Way of Learning</h1>
                        <p className="font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] font-normal sm:w-[297px] w-[276px] text-center mt-7">We blend Montessori, Waldorf, and Reggio Emilia methodologies to create a play-centered, nurturing environment that fosters exploration, collaboration, and creativity. </p>
                    </div>

                    <img src={pie_chart} alt="pie-chart" className="sm:w-[637px] sm:h-[576px] w-[333px] h-[302px] mt-12 sm:mt-0 animate-pulse duration-100 " />

                </div>
            </div>

            {/* Early-Years-Curriculum Section  */}
            <div className="max-w-screen-xl mx-auto" data-aos = "fade-up">
                <div className="flex flex-col-reverse gap-y-12 sm:flex-row items-center justify-center gap-x-20">
                    <img src={early_curriculum} alt="early_curriculum_kidimage" className="sm:w-[501px] sm:h-[664px] w-[357px] h-[473px]"/>

                    <div className=" w-[337px] sm:w-[405px] flex flex-col items-center gap-y-7">
                        <h1 className="font-causten text-[32px] leading-[24px] sm:text-[64px] sm:leading-[72px] font-bold text-green text-center">Early Years Curriculum</h1>
                        <h5 className="font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] w-[285px] sm:w-full font-normal text-center text-black">Our learning framework combines Montessori, Reggio Emilia and Waldorf principles, emphasising creativity, play and self-directed learning.</h5>
                        <h5 className="font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] w-[285px] sm:w-full font-bold text-center text-brown">Inspired by global education, we evolve to meet every learner's needs.</h5>

                    </div>
                </div>
            </div>

            <img src={weighing_scale} alt="weighing_scale_animation" className="w-[95%] h-full mx-auto mt-12 sm:mt-0" />

            {/* Primary-Years-Curriculum Section */}
            <div className="max-w-screen-xl mx-auto my-20" data-aos = "fade-up">
                <div className="flex flex-col gap-y-12 sm:flex-row items-center justify-center gap-x-20">

                    <div className=" w-[357px] sm:w-[409px] flex flex-col items-center gap-y-7">
                        <h1 className="font-causten text-[32px] leading-[40px] sm:text-[64px] sm:leading-[72px] font-bold text-green text-center w-[196px] sm:w-full">Primary Years Curriculum</h1>
                        <h5 className="font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] w-[317px] sm:w-full font-normal text-center text-black"><span className="text-brown !font-bold">The IB Program Years Programme (PYP) fosters inquiry, exploration and global awareness,</span> nurturing critical thinking and innovation to prepare learners for the future</h5>
                        <h5 className="font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] w-[317px] sm:w-full font-normal text-center text-black">Inspired by global education, we evolve to meet every learner's needs.</h5>

                    </div>

                    <img src={primary_curriculum} alt="primary_curriculum_kidimage" className="sm:w-[501px] sm:h-[664px] w-[357px] h-[473px] aimate-bounce duration-300 transition"/>
                </div>
            </div>

            {/* Learning Methodologies Section */}
            <div className="bg-orange my-20 py-20" data-aos = "fade-up">
                <div className="max-w-screen-xl mx-auto">
                    <h1 className="font-causten text-[32px] sm:text-[64px] leading-[80px] font-bold text-offwhite text-center">Learning Methodologies</h1>
                    <p className="font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] font-normal text-center w-[288px] sm:w-[503px] text-offwhite mx-auto sm:mt-5">Each learner is unique, with their own way of absorbing and processing information.</p>

                    <div className="flex flex-col gap-y-16 sm:flex-row items-center justify-center gap-x-16 mt-16 flex-wrap mx-auto">
                        <div>
                            <img src={visual_learners} alt="visual_learners" className="w-[331px] h-[349px]"/>
                            <h5 className="font-causten text-[32px] leading-[44px] text-offwhite text-center font-bold mt-5">Visual Learners</h5>
                        </div>

                        <div>
                            <img src={auditory_learners} alt="auditory_learners" className="w-[331px] h-[349px]"/>
                            <h5 className="font-causten text-[32px] leading-[44px] text-offwhite text-center font-bold mt-5">Auditory Learners</h5>
                        </div>

                        <div>
                            <img src={kinaesthetic_learners} alt="kinaesthetic_learners" className="w-[331px] h-[349px]"/>
                            <h5 className="font-causten text-[32px] leading-[44px] text-offwhite text-center font-bold mt-5">Kinaesthetic Learners</h5>
                        </div>

                    </div>
                </div>
            </div>

            {/* Diversity_learning Section - Large Screen */}
            <div className="max-w-screen-xl sm:px-20 mx-auto h-[217px] sm:mt-[250px] relative hidden sm:block" data-aos = "fade-up">
                <div className="right-5 xl:right-[100px] top-[-80px] absolute">
                    <h1 className="font-causten text-[64px] leading-[72px] font-bold text-green">Diversity in learning</h1>
                    <p className="font-causten text-[24px] leading-[33px] font-normal text-black text-center sm:w-[461px] mx-auto mt-7">We foster diversity and inclusivity, enriching learning through global perspectives, critical thinking, and collaboration. </p>
                </div>
                    
            </div>

            <div className="bg-brown h-[323px] hidden sm:block ">
                    <div className="max-w-screen-xl mx-auto flex flex-row items-center relative ">
                        <img src={diversity_kid} alt="kid-image_diversity" className="lg:w-[480px] xl:w-[649px] h-[715px] absolute top-[-393px]" />
                        <h4 className="font-causten text-[40px] leading-[50px] font-normal text-offwhite sm:w-[502px] absolute right-[100px] top-12 text-center">Varied teaching approaches support different learning styles, preparing learners for <strong>a connected world.</strong></h4>
                    </div>
            </div>

            {/* Diversity_learning section - small screens */}
            <div className="max-w-screen-xl mx-auto flex flex-col items-center sm:hidden" data-aos = "fade-up">
                <h1 className="font-causten text-[32px] leading-[32px] text-green font-bold">Diversity in learning</h1>
                <p className="font-causten text-[16px] leading-[24px] text-black font-normal w-[264px] text-center mt-5">We foster diversity and inclusivity, enriching learning through global perspectives, critical thinking, and collaboration. </p>
            </div>

            <div className = "bg-brown flex flex-row justify-around items-center mt-16 sm:hidden">
                <img src = {diversity_kid} alt = "kid-image-diversity" className = "w-[259px] h-[286px] ml-[-20px] mt-[-60px]" />
                <p className = "font-causten text-[16px] leading-[24px] font-normal text-offwhite text-center w-[158px]">Varied teaching approaches support different learning styles, preparing learners for <strong>a connected world.</strong></p>
            </div>

            {/* Experiential Learning */}
            <ExperimentalLearning />

            <Curioustoknowmore />

        </>
    )
}


export default Curriculum;