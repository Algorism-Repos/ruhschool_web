import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ScrollTop from "../Components/ScrollTop";

import banner_1 from "../assets/images/blog_banner_1.png";
import banner_2 from "../assets/images/blog_banner_2.png";
import Curioustoknowmore from "../Components/Curioustoknowmore";
import useFetch from "../hooks/useFtech";
function Blog() {
  const [pathId, setPathId] = useState(null);
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    const id = location.pathname.slice(6); // Extract ID from pathname
    setPathId(id);
  }, [location.pathname]);

  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );
  const blogData = data?.data?.find(
    (blog) => blog.blogId?.toString() === pathId
  );
  console.log("----",blogData);
  return (
    <>
      <Navbar />
      {blogData ? (
        <>
          {/* <h1 className={pathname === "blog/1" || pathname === "blog/2" ? "font-causten font-bold text-[32px] sm:text-[60px] leading-[44px]  text-green text-center mt-5 " :"hidden"}>{blogData.heading}</h1> */}
          {/* <h1
            className={
              pathname === "blog/1" ||
              pathname === "blog/2" ||
              pathname === "blog/3"
                ? "font-causten font-bold text-[32px] sm:text-[60px] leading-[44px]  text-green text-center mt-5 "
                : "hidden"
            }
          > */}
             <h1
            className= "font-causten font-bold text-[32px] sm:text-[60px] leading-[44px]  text-green text-center mt-5"
          >
            {blogData.heading}
          </h1>

          {/* <div className={pathname === "blog/1" ? "block" : "hidden"}> */}

          {/* Heading Section */}
          <div className="max-w-screen-xl w-full sm:w-[800px] mx-auto my-20">
            <h1 className="font-causten text-brown text-[32px] sm:text-[64px] text-center font-semibold">
              {blogData.subHeading}
            </h1>
            <h4 className="font-causten text-center text-[16px] sm:text-[24px] ">
              {blogData.paragraph}
            </h4>
          </div>

           {blogData.image?.length > 0 && blogData.image[0]?.url && ( 

          <img
            src={`http://localhost:1337${blogData.image[0].url}`}
            alt="banner-image"
            className="w-full object-cover h-[30vh] sm:h-[80vh]"
          />
           )}

          <div className="flex flex-col gap-y-7 px-5 lg:px-32 mt-20 ">
            {/* <p className="blog-para">{blogData.imageContent}</p> */}

            {blogData.content.map((block, index) => {
              const text =
                block.children?.map((child) => child.text).join("") || "";

              if (block.type === "heading") {
                return (
                  <h4 key={index} className="blog-heading">
                    {text}
                  </h4>
                );
              }

              if (block.type === "paragraph") {
                return (
                  <p key={index} className="blog-para">
                    {text}
                  </p>
                );
              }

              return null; // fallback if block type is something else
            })}

            {/* <p className="blog-para">{blogData.contentHeading}</p> */}

            {/* <h4 className="blog-heading">{blogData.contentHeading}</h4> */}

            {/* <p className="blog-para"> {blogData.content[0].children[0].text}</p> */}

            {/* <p className="blog-para"> {blogData.content[1].children[0].text}</p> */}

            {/* <h4 className="blog-heading">{blogData.content[1].children[0].text}</h4> */}

            {/* <p className="blog-para">{ blogData.content[2].children[0].text} </p> */}
            {/* <p className="blog-para">blogData.content[1].children[0].text</p> */}

            {/* <h4 className="blog-heading">{blogData.content[3].children[0].text}</h4> */}

            {/* <p className="blog-para">{blogData.content[4].children[0].text}</p> */}

            {/* <p className="blog-para">By creating learning spaces that reflect the values of international education and encouraging children to engage with the world around them, Ruh Continuum Primary Campus has become a place where young minds grow, right here in Coimbatore.</p> */}
          </div>
          {/* </div> */}
        </>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
             
            
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
  );
}

export default Blog;
