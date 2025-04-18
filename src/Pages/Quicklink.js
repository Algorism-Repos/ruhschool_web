import React from "react";

import Navbar from "../Components/Navbar";
import Curioustoknowmore from "../Components/Curioustoknowmore";

function Quicklink (){
    return(
        <>
           <Navbar />

           <div className="max-w-screen-xl mx-auto mt-20 sm:px-28 text-brown px-5 ">
                <h1 className="font-causten font-bold text-[64px] leading-[84px] ">Quick Links</h1>

                <p className="font-causten text-[16px] sm:text-[24px] leading-[33px] font-normal sm:w-[878px] mt-3">We understand the value of your time, and that's why we have curated this section to provide you with instant access to essential student resources. Whether you're a student looking for educational materials, a parent seeking important school information, our convenient links are here to make your navigation seamless.</p>

                <div className="mt-20 font-causten max-w-[878px] flex flex-col items-start">
                    <h3 className="font-bold text-[24px] leading-[33px] mb-5">IB mission statement</h3>

                    <p className="font-normal text-[18px] leading-[33px]">The Internation Baccalaureate aims to develop inquiring knowledgeable and caring young people who help to create a better and more peaceful world through intercultural understanding and respect. To this end the organisation works with schools, governments and international organisations to develop challenging programmes of international education and rigorous assessment. These programmes encourage students across the world to become active, compassionate and lifelong learners who understand that other people, with their differences, can also be right.</p>
                    <a href="https://www.ibo.org/school/062962" target="_blank" className="font-normal text-[18px] underline mb-12">"https://www.ibo.org/school/062962/"</a>

                    <h3 className="font-bold text-[24px] leading-[33px]">IB Learner Profiles</h3>
                    <ul className="list-disc ml-5 sm:ml-9 mt-7">
                        <a href="https://www.ibo.org/globalassets/new-structure/digital-toolkit/pdfs/learner-profile-2017-en.pdf" target="_blank"><li className="text-[18px] underline">IB Learner Profile</li></a>
                        <li className="text-[18px]">The IB learner profile represents 10 attributes valued by IB World Schools. We believe these attributes, and others like them, can help indivuduals and groups become responsible members of local, national and global communities.</li>

                        <a href="https://www.ibo.org/globalassets/new-structure/research/pdfs/effective-citing-and-referencing-en.pdf" target="_blank"><li className="text-[18px] underline">Effective Citing & Referencing</li></a>
                        <li>The effective citing and referencing of sources and influences used in academic writing is at the heart of good scholarship and fundamental to academic integrity. This guide is for the whole International Baccalaureate (IB) community and sets out the why, what, when and how of this important skill. It also contains useful examples and definitions, as well as frequently aasked questions and a documentation checklist. Please note that this publication is intended for guidance only. It is not a regulatory document.</li>

                        <a href="https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/1709-dp-brochure-en.pdf" target="_blank"><li className="text-[18px] underline">IB Diploma Programme Brochure</li></a>
                        <li className="text-[18px]">The IB Diploma Programme is an academcally challenging and balanced programme of education, with final examinations, that prepares students aged 16 to 19 for success at university and in life beyond. It has been designed to address the intellectual, social, emotional and physical well-being of students. The programme has gained recognition and respect from the world's leading universities.</li>
                        <a href="https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/cp-brochure-en.pdf" target="_blank"><li className="text-[18px] underline">IB Career-related Programme Brochure</li></a>
                        <li className="text-[18px]">The IB Career-related Programme (CP) is designed for students interested in pursuing a career-related education in the final two years of secondary school. It provides them with an excellent foundation to support their further studies, as well as ensure their prepaedness for success in workforce.</li>
                    </ul>

                    <h3 className="font-bold text-[24px] leading-[33px] mt-20">IB Parent Resources</h3>
                    <ul className="list-disc ml-5 sm:ml-9 mb-20">
                        <a href="https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/parent-pack-faqs-about-the-dp.pdf" target="_blank"><li className="text-[18px] underline">IBDP FAQ's</li></a>
                        <a href="https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/parent-pack-faqs-about-the-cp.pdf" target="_blank"><li className="text-[18px] underline">IBCP FAQ's</li></a>
                    </ul>

                </div>
           </div>

           <Curioustoknowmore />

    
        </>
    )
}


export default Quicklink;