import { Link } from "react-router-dom";
import arrow_up_right from "../assets/images/home/arrow-up-right.png";
import post_image_1 from "../assets/images/home/post_image_1.png";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import useFetch from "../hooks/useFtech";
import { blockquote } from "motion/react-m";
import Curioustoknowmore from "../Components/Curioustoknowmore";

function BlogList() {
  const { data } = useFetch("https://impressive-miracle-7aab4f1009.strapiapp.com/api/blogs?populate=*");
  console.log(data);
  return (
    <div>
      
      <div className="bg-green h-[35vh]">
        <Navbar />

        <div className="max-w-[661px] sm:ml-20 mt-16 text-center px-3 sm:px-0">
          <h1 className="font-aelyn text-[32px] sm:text-[64px] font-bold text-offwhite ">The Ruh'lington Post</h1>
          <h4 className="font-causten font-bold text-[20px] sm:text-[32px] leading-[33px] text-offwhite mt-5 sm:mt-0">Explore perspectives, reflections, and learning adventures from Ruh'lers. The Ruh’lington Post is your gateway to engaging stories, academic insights, and campus highlights.</h4>
        </div>

      </div>

      <div className="mt-20 max-w-screen-xl mx-auto sm:px-28 px-5 mb-20">
            
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 ">
        { data?.data?.map((blog)=>(

          <div className="flex flex-col justify-start items-start gap-y-3 sm:max-w-[300px] w-full">
            {blog.image?.length> 0 && blog.image[0]?.url && ( 

            <img
            src={`${blog.image[0].url}`}
              alt="post_image_1"
              className="w-full h-[240px] object-cover sm:w-[279px] sm:h-[260px] rounded-[16px] "
            />
          )}
            <h5 className="font-causten font-semibold text-[14px] text-brown ">
              Care tips
            </h5>

            <div className="flex flex-row justify-between">
              <h1 className="font-causten text-[24px] font-bold leading-[32px] text-black w-[357px] sm:w-[239px]">
                {blog.heading}
              </h1>
              <Link to={`/blog/${blog.blogId}`}>
              <img
                src={arrow_up_right}
                alt="arrow-up-right"
                className="w-[24px] h-[24px] cursor-pointer"
              />
              </Link>
            </div>
            <p className="font-causten text-[16px] font-normal leading-[24px] mt-3">
             {(blog.paragraph).slice(0,250)}...
            </p>
          </div>
        ))}
        </div>

      </div>

      <Curioustoknowmore />
    </div>
  );
}
export default BlogList;
