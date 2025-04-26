import { Link } from "react-router-dom";
import arrow_up_right from "../assets/images/home/arrow-up-right.png";
import post_image_1 from "../assets/images/home/post_image_1.png";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import useFetch from "../hooks/useFtech";
import { blockquote } from "motion/react-m";

function BlogList() {
  const { data } = useFetch("https://impressive-miracle-7aab4f1009.strapiapp.com/api/blogs?populate=*");
  console.log(data);
  return (
    <div>
      <Navbar />

      <div className="mt-20 max-w-screen-xl mx-auto px-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 ">
        { data?.data?.map((blog)=>(
          <div className="flex flex-col justify-start items-start gap-y-3 max-w-[300px]">
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
    </div>
  );
}
export default BlogList;
