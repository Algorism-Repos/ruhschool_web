import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ScrollTop from "../Components/ScrollTop"

import banner_1 from "../assets/images/blog_banner_1.png"
import banner_2 from "../assets/images/blog_banner_2.png"
import Curioustoknowmore from "../Components/Curioustoknowmore";

function Blog (){

    function scrollTop (){
        window.scrollTo (0,0);
    }

    const location = useLocation();
    const pathname = location.pathname.slice(1);
    
    return(
        <>
            <Navbar />

            <h1 className={pathname === "blog/1" || pathname === "blog/2" ? "font-causten font-bold text-[32px] sm:text-[60px] leading-[44px]  text-green text-center mt-5 " :"hidden"}>The Ruh'lington Post</h1>

            <div className={pathname === "blog/1" ? "block" : "hidden"}>

                {/* Heading Section */}
                <div className="max-w-screen-xl w-full sm:w-[800px] mx-auto my-20">
                    <h1 className = "font-causten text-brown text-[32px] sm:text-[64px] text-center font-semibold">Exploring the Deep Blue</h1>
                    <h4 className="font-causten text-center text-[16px] sm:text-[24px] ">Discover how learners at Ruh Continuum Primary Campus in Coimbatore explored ocean life through creativity, nature walks, and collaborative art, all part of a global learning approach.</h4>
                </div>

                <img src={banner_1} alt="banner-image" className="w-full object-cover h-[30vh] sm:h-[80vh]" />

                <div className="flex flex-col gap-y-7 px-5 lg:px-32 mt-20 ">
                    <p className="blog-para">Dive in the deep blue sea, come and take a dive with me.”</p>
                    <p className="blog-para">What started as a simple song soon unfolded into an inspiring learning experience for our young explorers at Ruh Continuum Primary Campus. As they sang along, their imaginations drifted into the depths of the ocean, naming sea creatures and plants, and before long, the idea to bring this underwater world to life on canvas was born.</p>

                    <h4 className="blog-heading">Learning Beyond the Classroom</h4>

                    <p className="blog-para">At Ruh, we believe meaningful education happens when curiosity leads the way. As part of our commitment to offering a well-rounded learning experience, our learners set out on a nature walk around campus, gathering leaves, twigs, dried flowers, stones, and pebbles—materials that would soon shape their very own ocean ecosystem.</p>

                    <p className="blog-para">Back in the classroom, an afternoon was dedicated to transforming the blank canvas into shimmering waters. With brushstrokes in varying shades of blue and the use of different painting tools, this session became more than just an art activity. It was an opportunity to develop fine motor skills, experiment with textures, and collaborate as a team—all of which are key elements of our learning environment here at Ruh, where global ideas meet hands-on exploration in the heart of Coimbatore.                    </p>

                    <h4 className="blog-heading">Creating stories from Nature</h4>

                    <p className="blog-para">The next stage of our project brought even more creativity to the surface. Using their gathered materials, the learners designed sea creatures and ocean plants—from water snakes and seaweed to electric eels and octopuses. Pencil shavings added delicate details, while plastic scraps served as a reminder of the impact of pollution on marine life.</p>

                    <p className="blog-para">As the canvas filled with tortoises’ homes, glass bottles, and an ominous “plastic monster,” thoughtful conversations emerged about the importance of protecting our planet. Projects like these give our learners a chance to see the world differently, combining creativity with awareness—an approach we’re proud to nurture as part of our globally minded curriculum.</p>

                    <h4 className="blog-heading">More than Just a Canvas</h4>

                    <p className="blog-para">For our learners, this wasn’t just about art. It was about discovery. It was about thinking deeper, working together, and understanding how their ideas can shape meaningful stories. These are the kinds of moments that define our approach at Ruh—where a primary education is built not only on academics but on developing the confidence and curiosity to explore.</p>

                    <p className="blog-para">By creating learning spaces that reflect the values of international education and encouraging children to engage with the world around them, Ruh Continuum Primary Campus has become a place where young minds grow, right here in Coimbatore.</p>
                </div>

            </div>

            <div className={pathname === "blog/2" ? "block" : "hidden"}>

                <div className="max-w-screen-xl w-full sm:w-[800px] mx-auto my-20">
                    <h1 className = "font-causten text-brown text-[20px] sm:text-[40px] leading-[30px] sm:leading-[48px] text-center font-semibold mb-3">Ocean Pollution Through a Child’s Eyes: A Creative Take from Ruh Continuum School</h1>
                    <h4 className="font-causten text-center text-[16px] sm:text-[24px] ">From recycled materials to real-world discussions, see how Ruh’s young learners in Coimbatore are bringing attention to the challenges faced by marine life.</h4>
                </div>

                <img src={banner_2} alt="banner-image" className="w-full object-cover h-[30vh] sm:h-[80vh]" />

                <div className="flex flex-col gap-y-7 px-5 lg:px-32 mt-20">
                    <p className="blog-para">At Ruh Continuum Primary Campus, learning is not just about understanding the world—it’s about caring for it. As part of their ongoing inquiry, our young learners explored the impact of ocean pollution on marine life, with a special focus on sea turtles.</p>
                    <p className="blog-para">Through stories, videos, and discussions, the children discovered how discarded fishing nets and plastic waste can entangle turtles, while excessive barnacle growth can slow them down and even cause infections. These thoughtful conversations are a reflection of the kind of meaningful learning we strive to foster at Ruh—a space where creativity meets awareness within an international approach to education here in Coimbatore.</p>

                    <h4 className="blog-heading">Learn Through Action</h4>

                    <p className="blog-para">To share what they learned, the learners built a model of a sea turtle affected by pollution. Using recycled materials, sea shells to represent barnacles, and even a fishing net, they brought their knowledge to life through art.</p>
                    <p className="blog-para">Projects like these not only encourage creativity but also help learners reflect on real-world challenges. It’s through hands-on, purposeful work that we see them developing empathy, problem-solving skills, and a sense of responsibility—all key elements of the globally focused learning experience we offer at Ruh Continuum Primary Campus.</p>

                    <h4 className="blog-heading">The Ideas that Matter</h4>

                    <p className="blog-para">Of course, the most powerful moments often come from the learners themselves:</p>

                    <p className="blog-para">“There is no trash bin in the sea—that’s why they dump in the sea. Let’s put a trash bin.”</p>
                    <p className="blog-para">“The barnacles are little parasites.”</p>
                    <p className="blog-para">“No one should throw waste in the ocean. The sea animals will smile.”</p>

                    <p className="blog-para">These are the kinds of insights we see when children are given the tools and encouragement to think deeply and care greatly.</p>
                    <p className="blog-para">As a community passionate about inquiry-led education, we’re proud to see these conversations happen so naturally, reminding us why families looking for a nurturing primary school experience in Coimbatore choose Ruh.</p>


                </div>

            </div>

            <div className="bg-green w-full flex flex-row items-center justify-between h-[70px] px-5 mt-16">
                <Link to = {pathname === "blog/1" ? "/blog/2" : "/blog/1"}><button className="font-causten text-offwhite text-[20px]" onClick={scrollTop}>Previous</button></Link>
                <Link to = {pathname === "blog/1" ? "/blog/2" : "/blog/1"}><button className="font-causten text-offwhite text-[20px]" onClick={scrollTop}>Next</button></Link>
            </div>


            <Curioustoknowmore />
        </>
    )
}

export default Blog;