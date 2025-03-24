import {React, useEffect} from "react";
import {motion} from "framer-motion"
import experimental_1 from "../assets/images/curriculum/experimental_1.png"
import experimental_2 from "../assets/images/curriculum/experimental_2.png"
import experimental_3 from "../assets/images/curriculum/experimental_3.png"
import experimental_4 from "../assets/images/curriculum/experimental_4.png"
import AOS from "aos";
import "aos/dist/aos.css";


function ExperimentalLearning(){

      useEffect(() =>{
            AOS.init({duration:1500});
        }, [])
    return(
        <>
            <div className=" mx-auto items-center flex flex-col my-20 gap-y-7 w-full h-full overflow-x-hidden " data-aos = "fade-up">
                <h1 className="font-causten text-[32px] leading-[32px] sm:text-[64px] sm:leading-[80px] text-green font-bold text-center">Experiential Learning</h1>
                <h5 className="font-causten text-[16px] leading-[24px] sm:text-[24px] sm:leading-[33px] sm:w-[844px] w-[317px] text-center mx-auto "><span className="text-brown font-bold">Field trips bridge classroom learning with real-world experiences</span>, enhancing critical thinking, teamwork, and global awareness while fostering curiosity and creativity.</h5>

                <div className="flex flex-row items-center gap-x-3 shrink-0 w-full mt-5">
                    <motion.div 
                        className="flex flex-row items-center justify-center gap-x-5 sm:gap-x-12  "
                        initial = {{x : 0}}
                        animate = {{x : "-100%"}}
                        transition = {{duration:50, repeat:Infinity, ease:"linear"}}
                    >
                        <img src={experimental_1} alt="experimental_image_1" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />
                        <img src={experimental_2} alt="experimental_image_2" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />
                        <img src={experimental_3} alt="experimental_image_3" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />
                        <img src={experimental_4} alt="experimental_image_4" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />

                        <img src={experimental_1} alt="experimental_image_1" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />
                        <img src={experimental_2} alt="experimental_image_2" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />
                        <img src={experimental_3} alt="experimental_image_3" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />
                        <img src={experimental_4} alt="experimental_image_4" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />

                        <img src={experimental_1} alt="experimental_image_1" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />
                        <img src={experimental_2} alt="experimental_image_2" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />
                        <img src={experimental_3} alt="experimental_image_3" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />
                        <img src={experimental_4} alt="experimental_image_4" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />

                        <img src={experimental_1} alt="experimental_image_1" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />
                        <img src={experimental_2} alt="experimental_image_2" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />
                        <img src={experimental_3} alt="experimental_image_3" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />
                        <img src={experimental_4} alt="experimental_image_4" className="w-[200px] h-[210px] sm:w-[331px] sm:h-[349px]" />

                        


                    </motion.div>

                    

                </div>

                
            </div>
        </>
    )
}


export default ExperimentalLearning;

