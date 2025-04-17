import {React, useEffect} from "react";
import Navbar from "../Components/Navbar"
import Friends from "../Components/Friends";
import Curioustoknowmore from "../Components/Curioustoknowmore"
import AOS from "aos";
import "aos/dist/aos.css";

import k12 from "../assets/images/about/k-12_campus.png"
import early_years from "../assets/images/about/early-year_campus.png"
import k5 from "../assets/images/about/k-5_campus.png"
import building from "../assets/images/about/building_front.png"
import banner_boy from "../assets/images/about/banner_boy.png"
import student_group from "../assets/images/about/student_group.png"
import roles_of_future from "../assets/images/about/roles-of-future.gif"
import roles_of_future_mobile from "../assets/images/about/roles_of_future_mobile.gif"



function About (){

    useEffect(() =>{
            AOS.init({duration:1500});
    }, [])
    return(
        <>

            <div className="lg:h-[763px] bg-about bg-no-repeat bg-cover lg:bg-contain xl:bg-cover mb-12 lg:block hidden">
                <Navbar />
                <div className="flex flex-col gap-y-7 items-start justify-start mt-28 h-full pl-20">
                    <h1 className="font-aelyn text-[48px] leading-[33px] text-yellow"> The Story of Ruh</h1>
                    <h4 className="font-causten text-[24px] leading-[33px] text-offwhite w-[379px] ">At Ruh, we are redefining education through innovative, tailored curricula that nurture creativity and prepare students for a global future across three specialised campuses, all part of the SSVM Family.</h4>
                </div>

            </div>

            <div className="lg:hidden block bg-green">
                <Navbar />
                <div className="flex flex-col gap-y-7 items-center mt-12 pb-12">
                    <h1 className="font-aelyn text-[36px] leading-[33px] text-yellow">The Story of Ruh</h1>
                    <h4 className="font-causten text-[16px] leading-[23px] text-center w-[293px] text-offwhite">At Ruh, we are redefining education through innovative, tailored curricula that nurture creativity and prepare students for a global future across three specialised campuses, all part of the SSVM Family.</h4>                
                </div>
                <img src={banner_boy} alt="banner_boy" className="w-full h-full"/>
            </div> 

            {/* Our Campuses - Large Screen */}
            <div className="max-w-screen-xl mx-auto my-24 px-24 sm:block hidden" data-aos = "fade-up">
                <div className="flex flex-row sm:gap-x-20 xl:gap-x-40">
                    <div className="flex flex-col gap-y-48">
                        <div data-aos = "fade-up">
                            <h1 className="font-causten sm:text-[55px] xl:text-[64px] font-bold leading-[33px] text-brown">Our Campuses</h1>
                            <p className="font-causten text-[24px] font-normal leading-[33px] mt-9 w-[410px] mx-auto ">Our campuses are designed to nurture, every stage of learning, blending creativity, exploration and holistic growth in thoughtfull crafted environments </p>
                        </div>

                        <div data-aos = "fade-up">
                            <img src={k12} alt="K-12 campus" className="w-[353px] h-[432px] "/>
                            <p className="font-causten text-[24px] font-normal leading-[33px] mt-9 w-[295px] mx-auto text-center ">Our K -12 Cambridge campus caters to IGCSE, and IBDP/IBCP learners, ensuring a comprehensive pathway preparing learners for global challenges.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-40 mt-20">
                        <div data-aos = "fade-up">
                            <img src={early_years} alt="Early_years_campus" className="w-[352px] h-[430px] "/>
                            <p className="font-causten text-[24px] font-normal leading-[33px] mt-9 w-[295px] mx-auto text-center ">Our Early Years campus in Race Course, Coimbatore nurtures toddlers with a blend of Montessori, Reggio Emilia, and Waldorf philosophies, fostering creativity and exploration.</p>
                        </div>

                        <div data-aos = "fade-up">
                            <img src={k5} alt="K5_campus" className="w-[352px] h-[431px] "/>
                            <p className="font-causten text-[24px] font-normal leading-[33px] mt-9 w-[295px] mx-auto text-center ">Our K-5 Campus offers the International Baccalaureate curriculum up to Primary Years, providing a holistic educational experience. </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Campuses - Small Screen */}
            <div className="sm:hidden block my-12 px-5 py-12 " data-aos="fade-up">
                <h1 className="font-causten text-[32px] leading-[33px] font-bold text-brown text-center">Our Campuses</h1>
                <p className="font-causten text-[16px] leading-[23px] font-normal text-black text-center mt-5">Our campuses are designed to nurture every stage of learning, blending creativity, exploration, and holistic growth in thoughtfully crafted environments.</p>

                <div className="mt-12 flex flex-col items-center">
                    <img src={early_years} alt="Early_years_campus" className="w-[333px] h-[420px] "/>
                    <p className="font-causten text-[16px] font-normal leading-[24px] mt-9 w-[292px] mx-auto text-center ">Our Early Years campus in Race Course, Coimbatore nurtures toddlers with a blend of Montessori, Reggio Emilia, and Waldorf philosophies, fostering creativity and exploration.</p>
                </div>

                <div className="mt-12 flex flex-col items-center">
                    <img src={k12} alt="K-12 campus" className="w-[333px] h-[420px] "/>
                    <p className="font-causten text-[16px] font-normal leading-[24px] mt-9 w-[295px] mx-auto text-center ">Our K-12 Cambridge campus caters to IGCSE, and IBDP/IBCP learners, ensuring a comprehensive pathway preparing learners for global challenges.</p>
                </div>

                <div className="mt-12 flex flex-col items-center">
                    <img src={k5} alt="K5_campus" className="w-[333px] h-[420px] "/>
                    <p className="font-causten text-[16px] font-normal leading-[24px] mt-9 w-[295px] mx-auto text-center ">Our K - 5 Campus offers the International Baccalaureate curriculum up to Primary Years, providing a holistic educational experience. </p>
                </div>
            </div>


            <div className ="bg-brown">
                <div className="mx-auto max-w-screen-xl relative sm:h-[599px] pt-16" data-aos = "fade-up">
                    <div className="flex flex-col sm:flex-row max-w-screen-xl">
                        <div className="order-2">
                            <img src={building} alt="building_front_image" className="w-[419px] mx-auto h-[331px] lg:w-[653px] lg:h-[620px] lg:top-[-70px] xl:w-[803px] xl:h-[689px] relative sm:absolute xl:top-[-135px] mt-12" />
                        </div>
                        <div className="relative sm:absolute lg:right-5 xl:right-20 sm:top-20 order-1 mx-auto">
                            <h1 className="w-[305px] sm:w-[324px] font-causten text-[16px] sm:text-[24px] text-offwhite leading-[24px] sm:leading-[33px] font-normal text-center sm:text-left ">Ruh Continuum School, located at 50, Damu Nagar, <span className="!text-yellow font-bold">has a rich academic history spanning 50 years.</span> The site was originally home to number of schools</h1>
                            <h1 className="w-[305px] sm:w-[324px] font-causten text-[16px] sm:text-[24px] text-offwhite leading-[24px] sm:leading-[33px] font-normal mt-9 sm:mt-20 text-center sm:text-left ">These co-educational institutions served students from grades 1 to 12, along with a pre-primary section, playing a vital role in educating generations of learners.</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1015px] sm:h-[956px] sm:my-20 mt-32 relative mx-auto flex flex-row justify-center items-center" data-aos = "fade-up">
                <div>
                    <h1 className="w-[147px] sm:w-[316px]  font-causten text-center font-bold text-[32px] leading-[32px] sm:text-[64px] sm:leading-[70px]  mx-auto text-green">Roles of the future</h1>

                    <h5 className="sm:mt-7 mt-28 w-[200px]  sm:w-[436px] font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] text-center  ">We shape intentional individuals ready for the future - adaptable, digitally fluent and equipped with interdiciplinary skills.</h5>
                    <h5 className="mt-9 w-[200px]  sm:w-[436px] font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] font-bold text-center ">As industries evolve, we foster creativity, emotional intelligence and a mindset for lifelong learning</h5>
                </div> 
                <img src={roles_of_future_mobile} alt="roles_of_future_animation" className="w-[275px] h-[282px] absolute top-[-110px] sm:hidden block"/>

                <img src={roles_of_future} alt="roles_of_future_animation" className="w-full absolute md:top-16 lg:top-[-30px] hidden sm:block" />

                {/* <img src={waterresourceplanner} alt="water-resource-planner" className="w-[189px] h-[189px] absolute top-7 sm:block hidden" />
                <img src={urbanfarmer} alt="urbanfarmer" className="w-[189px] h-[189px] absolute top-36 right-16 sm:block hidden" />
                <img src={eco_tech_innovator} alt="eco_tech_innovator" className="w-[189px] h-[189px] absolute top-[470px] right-0 sm:block hidden" />
                <img src={creativeproblem_solver} alt="creativeproblem_solver" className="w-[189px] h-[189px] absolute bottom-0 right-64 sm:block hidden" />
                <img src={circulareconomy_designers} alt="circulareconomy_designers" className="w-[189px] h-[189px] absolute bottom-[150px] left-12 sm:block hidden" />
                <img src={greenbuildingarchitects} alt="greenbuildingarchitects" className="w-[189px] h-[189px] absolute left-5 top-56 sm:block hidden" /> */}
            </div>

            <div className="bg-yellow  sm:h-[579px] mt-[450px] xl:mt-0 lg:mt-[150px]" data-aos= "fade-up">
                <div className="max-w-screen-xl relative  mx-auto  xl:px-32 py-12 sm:py-20 mt-48 flex flex-col sm:flex-row">
                    <div className="sm:w-[379px] w-full order-2 sm:order-1 px-9">
                        <h5 className="font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] font-normal text-brown text-center">Here, every space tells a story, from the unique classrooms to the thoughtfull places stone pebbles, all crafted to inspire creativity and foster a deep appreciation for art.</h5>
                        <h5 className="font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] font-bold text-green text-center mt-7">Our environment encourages exploration, allowing students to engage with their surroundings and express their individuality</h5>
                    </div>

                    <img src={student_group} alt="student_group" className="w-[393px] h-[375px] sm:w-[654px] sm:h-[626px] sm:absolute relative mx-auto mt-[-350px] sm:mt-0 sm:top-[-100px] lg:right-2 xl:right-20 order-1 sm:order-2" />
                </div>
            </div>

            <Friends />

            <Curioustoknowmore />
        </>
    )
}

export default About;