import {React, useState} from "react";
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
  const[instafeed,setInstafeed]= useState()

  const  get_instfeeds = async()=>{
      let accesToken='IGAAQy22XzWVNBZAE5CMnd2VGpUcDZAJd3phdy0yMzNvREM0UUpERHMycER2bXE4ZAEdxT3ZAyUUl5SVdVVGFZAYnRvYnZAfYkFpR1NYV0p6ZAHptNEFxX3R6WGV6RC1IWnYxYmpqdXFiMk9Qb05JNTdmMExYMXF4T2ZA2dzZAobVJlVWtZAdwZDZD'
      // const url=`https://graph.facebook.com/USER-ID/photos?access_token=${accesToken}`;
      const url=`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${accesToken}`;
  
      const data=await fetch(url)
      const feed =await data.json()
      console.log("feed",feed.data)
      setInstafeed(feed.data)
    }
  useEffect(()=>{
    get_instfeeds()
  },[])


  return (
    <>
      
      <div className="bg-green h-fit md:h-[450px] relative pb-12 px-3 md:pb-0 md:px-0">
        <Navbar />

        <div className="md:w-[661px] max-w-[661px] mx-auto mt-16 md:absolute bottom-10 md:left-32 ">
          <h1 className="font-aelyn text-[32px] md:text-[64px] leading-[42px] md:leading-[33px] font-normal text-offwhite text-center md:text-left">The Ruh'lington Post</h1>
          <h4 className="font-causten text-[16px] md:text-[32px] font-normal md:font-bold leading-[20px] md:leading-[33px] text-offwhite mt-5 text-center md:text-left">Explore perspectives, reflections and learning adventures from Ruh'lers. The Ruh'lington Post is your gateway to engaging stories, academic insights and campus highlights.</h4>
        </div>

      </div>

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

       <div className = "max-w-screen-xl mx-auto px-12 my-12">
        <h1 className="font-causten text-[36px] md:text-[64px] md:leading-[32px] leading-[44px] font-bold text-green my-12 w-fit mx-auto text-center">Follow us on Instagram</h1>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-3 md:gap-x-0 md:max-w-[775px] max-w-fit mx-auto">
            {instafeed && instafeed.map((item, index) => ( item.media_type !=='VIDEO' && ( 
            <> 
              
            
              <div className="border-2 border-black w-fit h-fit">
                <a href= "https://www.instagram.com/ruh_primary?igsh=ZjZrNGFuZXNvbzY5" target = "_blank">
                  <img
                        key={item.id}
                          src={item.media_url}
                          // alt={item.caption}
                        className="w-[242px] h-[251px]"
                  />
                </a>
              </div>
              
            </>
            )
            ))}
          </div>
       </div>

        <Curioustoknowmore />

    </>
  );
}
export default BlogList;
