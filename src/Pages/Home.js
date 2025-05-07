import { React, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import stories_image from "../assets/images/home/stores_section_image.png";
import logo_offwhite from "../assets/images/ruhlogo_offwhite.png";
import cofounder_image from "../assets/images/home/co-founder_image.png";
import animation_placeholder from "../assets/images/home/animation-placeholder.png";
import advisory_kid from "../assets/images/home/advsior-section_image.png";
import campus_icon from "../assets/images/home/campus_icon.png";
import curricular_icon from "../assets/images/home/curricular_icon.png";
import faculty_icon from "../assets/images/home/faculty_icon.png";
import student_impact_icon from "../assets/images/home/student-impact_icon.png";
import ssvm_logo from "../assets/images/home/ssvm_logo.png";
import founder_image from "../assets/images/home/founder-image.png";
import curious_section_image from "../assets/images/home/curious_section_image.png";
import arrow_up_right from "../assets/images/home/arrow-up-right.png";
import post_image_1 from "../assets/images/home/post_image_1.png";
import post_image_2 from "../assets/images/home/post_image_2.png";
import intuitive from "../assets/images/home/animation-elements/intuitive.png";
import community from "../assets/images/home/animation-elements/community.png";
import mindful_yellow from "../assets/images/home/animation-elements/mindful_yellow.png";
import mindful_orange from "../assets/images/home/animation-elements/mindful_orange.png";
import global_learning from "../assets/images/home/animation-elements/global_learning.png";
import belonging from "../assets/images/home/animation-elements/belonging.png";
import open_ended from "../assets/images/home/animation-elements/open_ended.png";
import play_based from "../assets/images/home/animation-elements/play_based.png";
import navimage_1 from "../assets/images/home/navimage_1.png";
import navimage_2 from "../assets/images/home/navimage_2.png";
import navimage_3 from "../assets/images/home/navimage_3.png";
import navimage_1_mobile from "../assets/images/home/navimage_1_mobile.png";
import navimage_2_mobile from "../assets/images/home/navimage_2_mobile.png";
import navimage_3_mobile from "../assets/images/home/navimage_3_mobile.png";
import kidscasa_alangombu from "../assets/images/home/campus_logos/kidscasa_alangombu.png";
import kidscasa_mettupalayam from "../assets/images/home/campus_logos/kidscasa_mettupalayam.png";
import kidscasa_saibabcolony from "../assets/images/home/campus_logos/kidscasa_saibabcolony.png";
import kidscasa_tirupur from "../assets/images/home/campus_logos/kidscasa_tirupur.png";
import ruh_damunagar from "../assets/images/home/campus_logos/ruh_damunagar.png";
import ruh_racecourse from "../assets/images/home/campus_logos/ruh_racecourse.png";
import ruh_singanallur from "../assets/images/home/campus_logos/ruh_singanallur.png";
import ssvm_funmall from "../assets/images/home/campus_logos/ssvm_funmall.png";
import ssvm_mettupalayam from "../assets/images/home/campus_logos/ssvm_mettupalayam.png";
import ssvm_nambiyur from "../assets/images/home/campus_logos/ssvm_nambiyur.png";
import ssvm_singanallur from "../assets/images/home/campus_logos/ssvm_singanallur.png";

import logo from "../assets/images/Nav_logo.png";
import ruhlogo_offwhite from "../assets/images/ruhlogo_offwhite.png";
import close_icon from "../assets/images/close-icon.png";
import hamburger_menu from "../assets/images/hamburger_menu.png";
import banner_line from "../assets/images/home/banner_line.png";
import insta_icon_offwhite from "../assets/images/insta-icon-offwhite.png";
import linkedin_icon_offwhite from "../assets/images/linkedin-icon-offwhite.png";
import facebook_icon_offwhite from "../assets/images/facebook-icon-offwhite.png";
import afs_logo from "../assets/images/home/affiliate_logos/afs_logo.jpeg";
import igbc_logo from "../assets/images/home/affiliate_logos/igbc_logo.jpeg";
import mca_logo from "../assets/images/home/affiliate_logos/mca_logo.jpeg";
import ielts_logo from "../assets/images/home/affiliate_logos/ielts_logo.jpeg";
import foryoung_logo from "../assets/images/home/affiliate_logos/foryoung_logo.jpeg";
import internationcouncil_logo from "../assets/images/home/affiliate_logos/internationcouncil_logo.jpg";
import nabet_logo from "../assets/images/home/affiliate_logos/nabet_logo.jpg";
import dais_logo from "../assets/images/home/affiliate_logos/dais_logo.JPG";
import acceleratedprogram_logo from "../assets/images/home/affiliate_logos/acceleratedprogram_logo.jpeg";
import worldready_logo from "../assets/images/home/affiliate_logos/worldready_logo.jpeg";
import ew_logo from "../assets/images/home/affiliate_logos/ew_logo.jpeg";
import aiaa_logo from "../assets/images/home/affiliate_logos/aiaa_logo.jpeg";
import sat_logo from "../assets/images/home/affiliate_logos/sat_logo.jpeg";
import cambridgeassesment_logo from "../assets/images/home/affiliate_logos/cambridgeassesment_logo.jpg";
import ted_logo from "../assets/images/home/affiliate_logos/ted_logo.jpeg";
import diamond_logo from "../assets/images/home/affiliate_logos/diamond_logo.png";
import wacp_logo from "../assets/images/home/affiliate_logos/wacp_logo.jpeg";
import cambridge_logo from "../assets/images/home/affiliate_logos/cambridge_logo.jpeg";
import testimonial_stars from "../assets/images/home/5stars.png";
import old_ruh from "../assets/images/home/old_ruh.png";
import new_ruh from "../assets/images/home/new_ruh.png";
import rightarrow from "../assets/images/right_arrow.png";
import kid_image_without from "../assets/images/home/kid_image_without.png";
import visual from "../assets/images/home/visual.png";
import listening from "../assets/images/home/listening.png";
import kinaesthetic from "../assets/images/home/kinaesthetic.png";
import Navbar from "../Components/Navbar";
import Friends from "../Components/Friends";
import Curioustoknowmore from "../Components/Curioustoknowmore";
function Home() {
  const[instafeed,setInstafeed]=useState()
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);
  const containerRef = useRef(null);
  const containerRef_mobile = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    const sections = gsap.utils.toArray(".content");
    const animation = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: element,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${element.offsetWidth}`,
      },
    });

    return () => {
      // Cleanup
      animation.scrollTrigger?.kill();
      animation.kill();
    };

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: element,
    //     pin: true,
    //     scrub: 1,
    //     start: "top top",
    //     end: () => `+=${element.offsetWidth}`,
    //   },
    // });
  }, []);

  useEffect(() => {
    const element = containerRef_mobile.current;
    const sections = gsap.utils.toArray(".content-mobile");

    const animation = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: element,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${element.offsetWidth}`,
      },
    });

    return () => {
      // Cleanup
      animation.scrollTrigger?.kill();
      animation.kill();
    };

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: element,
    //     pin: true,
    //     scrub: 1,
    //     start: "top top",
    //     end: () => `+=${element.offsetWidth}`,
    //   },
    // });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

//   gsap.to(".box", {
//     duration: 4,
//     motionPath: {
//       path: "M 0,250 C 100,50 400,50 500,250", // Custom SVG path
//       align: "self",
//       autoRotate: true,
//     },
//   });

  // useEffect(() => {
  //     const waveAnimation = gsap.timeline({
  //         xPercent: -500,
  //         repeat: true,
  //     });

  //     waveAnimation.to(textRef.current, {
  //       x: "500px",

  //       y: (i) => Math.sin(i) * 20 + "px",
  //       ease: "power1.inOut",
  //     });
  //   }, []);

  const images = [new_ruh, old_ruh];

  function clickHandler() {
    setNavMenu(true);
    console.log("Muhil");
  }

  const [isHorizontalScrolling, setIsHorizontalScrolling] = useState(true);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: bannerRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-67.9%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // const scrollPosition = useRef(0); // Track cumulative scroll distance
  // const isScrolling = useRef(false); // Prevent rapid scroll handling
  // const touchStart = useRef(0);

  // useEffect(() => {
  //     const handleWheelScroll = (e) => {
  //       if (!isHorizontalScrolling) return; // Skip if vertical scrolling is enabled

  //       e.preventDefault(); // Prevent default vertical scroll

  //       // Accumulate scroll delta
  //       scrollPosition.current += e.deltaY;

  //       // Throttle rapid scroll handling
  //       if (!isScrolling.current) {
  //         isScrolling.current = true;

  //         requestAnimationFrame(() => {
  //           const swiperInstance = swiperRef.current?.swiper;

  //           if (!swiperInstance) return;

  //           // Trigger horizontal scroll based on accumulated delta
  //           if (scrollPosition.current > 700) {
  //             swiperInstance.slideNext(); // Move to the next slide
  //             scrollPosition.current = 0; // Reset scroll position
  //           } else if (scrollPosition.current < -100) {
  //             swiperInstance.slidePrev(); // Move to the previous slide
  //             scrollPosition.current = 0; // Reset scroll position
  //           }

  //           isScrolling.current = false; // Reset scroll lock
  //         });
  //       }
  //     };

  //     const handleTouchStart = (e) => {
  //       if (!isHorizontalScrolling) return;
  //       touchStart.current = e.touches[0].clientY; // Save initial Y position
  //     };

  //     const handleTouchMove = (e) => {
  //       if (!isHorizontalScrolling) return;

  //       const touchDeltaY = touchStart.current - e.touches[0].clientY;

  //       // Trigger horizontal scroll logic
  //       const swiperInstance = swiperRef.current?.swiper;
  //       if (!swiperInstance) return;

  //       if (touchDeltaY > 30) {
  //         swiperInstance.slideNext(); // Scroll to next slide
  //       } else if (touchDeltaY < -30) {
  //         swiperInstance.slidePrev(); // Scroll to previous slide
  //       }

  //       e.preventDefault(); // Prevent vertical scroll
  //     };

  //     const enableHorizontalScroll = () => {
  //       document.addEventListener("wheel", handleWheelScroll, { passive: false });
  //       document.addEventListener("touchstart", handleTouchStart, { passive: false });
  //       document.addEventListener("touchmove", handleTouchMove, { passive: false });
  //     };

  //     const disableHorizontalScroll = () => {
  //       document.removeEventListener("wheel", handleWheelScroll);
  //       document.removeEventListener("touchstart", handleTouchStart);
  //       document.removeEventListener("touchmove", handleTouchMove);
  //     };

  //     if (isHorizontalScrolling) {
  //       enableHorizontalScroll();
  //     } else {
  //       disableHorizontalScroll();
  //     }

  //     return () => disableHorizontalScroll(); // Cleanup on unmount
  //   }, [isHorizontalScrolling]);

  const [navMenu, setNavMenu] = useState(false);

  const Testimonial = [
    {
      name: "Divya Kannan",
      parentof: "Dhev's Mom",
      content:
        "The kindness of the entire team and the caring and gentle approach they took with the children truly stood out to us. This school itself is amazing, and we are so happy with everything. Thank you for all the great work you are doing!",
    },
    {
      name: "Jaanaki",
      parentof: "Jaanaki's Parent",
      content:
        "We, Jaanaki’s parents, are extremely pleased and grateful for all the support, teachings, and progress she has made under your guidance. We extend our love, gratitude, and appreciation to each one of you.",
    },
    {
      name: "Hamsa Varshini",
      parentof: "Vishrutha's Parent",
      content:
        "A big thank you to Team Ruh for shaping Vishrutha into who she is today. She joined as an infant and is now a toddler, Team Ruh has played an essential role in her journey. Great work by all the educators and assistant educators",
    },
  ];


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
      {/* Small screen - Banner */}
      <div className="sm:hidden block relative" ref={containerRef_mobile}>
        <div className="flex flex-row justify-between items-center w-full absolute left-0 top-5 px-3 z-10 sm:hidden">
          <Link to="/">
            <img src={logo} alt="ruh_logo" className="w-[100px]" />
          </Link>
          <img
            src={hamburger_menu}
            alt="hamburger_menu"
            className="w-[30px] h-[30px] cursor-pointer"
            onClick={() => {
              setNavMenu(true);
            }}
          />
        </div>
        <div className="flex flex-row overflow-x-hidden">
          {/* Banner-1 */}
          <div className="relative shrink-0 content-mobile w-screen h-screen z-5">
            <img
              src={navimage_1_mobile}
              alt="nav-image"
              className="w-full h-[641px]"
            />

            <div className="mx-auto mt-12 flex flex-col items-center">
              <h1 className="font-aelyn text-[24px] leading-[25px] text-brown font-normal w-[280px] text-center ">
                Redefining education{" "}
                <span className="font-causten font-bold text-green">
                  through innovation
                </span>
              </h1>
              <img
                src={banner_line}
                alt="banner_line"
                className="w-[203px] h-[7px]"
              />

              <Link to="/contact">
                <button className="bg-brown w-[173px] h-[48px] rounded-[8px] text-white font-causten font-bold text-[20px] leading-[20px] mt-7">
                  Contact now
                </button>
              </Link>
            </div>
          </div>

          {/* Banner-2 */}
          <div className="relative shrink-0 content-mobile w-screen h-screen z-5">
            <div className="mx-auto mt-36 flex flex-col items-center">
              <h1 className="font-aelyn text-[24px] leading-[25px] text-brown font-normal w-[280px] text-center ">
                An ideal environment{" "}
                <span className="font-causten font-bold text-green">
                  that nutures creativity
                </span>
              </h1>
              <img
                src={banner_line}
                alt="banner_line"
                className="w-[203px] h-[7px]"
              />

              <Link to="/contact">
                <button className="bg-brown w-[173px] h-[48px] rounded-[8px] text-white font-causten font-bold text-[20px] leading-[20px] mt-7">
                  Contact now
                </button>
              </Link>
            </div>

            <img
              src={navimage_2_mobile}
              alt="nav-image"
              className="w-full h-[451px] mt-12"
            />
          </div>

          {/* Banner-3 */}
          <div className="shrink-0 content-mobile w-screen h-screen z-5">
            <img
              src={navimage_3_mobile}
              alt="nav-image"
              className="w-full h-[415px]"
            />

            <div className="mx-auto mt-20 flex flex-col items-center">
              <h1 className="font-aelyn text-[24px] leading-[25px] text-brown font-normal w-[280px] text-center ">
                Preparing learners <br />
                <span className="font-causten font-bold text-green">
                  for a global future
                </span>
              </h1>
              <img
                src={banner_line}
                alt="banner_line"
                className="w-[203px] h-[7px]"
              />

              <Link to="/contact">
                <button className="bg-brown w-[173px] h-[48px] rounded-[8px] text-white font-causten font-bold text-[20px] leading-[20px] mt-7">
                  Contact now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Banner section - mobile screen 
            <div className="sm:hidden block relative ">
                <div className="flex flex-row items-center justify-between w-full absolute left-0 top-9 px-3 z-10">
                    <img src={logo} alt="ruh_logo" className="w-[100px]" />
                    <img src={hamburger_menu} alt="hamburger_menu" className="w-[30px] h-[30px] cursor-pointer" onClick={() => {setNavMenu(true)}} />
                </div>

                <Swiper
                        ref = {""}
                        modules={[Autoplay, Mousewheel]}
                        slidesPerView={1}
                        mousewheel={{ forceToAxis: true, invert: false, sensitivity: 0.02}} // Enable horizontal scrolling
                        onSlideChange={({isEnd}) => {
                            if(isEnd){
                                setIsHorizontalScrolling(false);
                            }
                        }}
                >
                    <SwiperSlide>
                       <div className = "relative">
                            <img src={navimage_1_mobile} alt="nav-image" className="w-full h-[641px]" />
                            
                            <div className="mx-auto mt-12 flex flex-col items-center">
                                <h1 className="font-aelyn text-[24px] leading-[25px] text-brown font-normal w-[280px] text-center ">Redefining education <span className="font-causten font-bold text-green">through innovation</span></h1>
                                <img src={banner_line} alt="banner_line" className="w-[203px] h-[7px]" />

                                <Link to = "/contact"><button className="bg-brown w-[173px] h-[48px] rounded-[8px] text-white font-causten font-bold text-[20px] leading-[20px] mt-7">Contact now</button></Link>
                            </div>
                            <img src = {rightarrow} alt="arrow-icon" className = "absolute right-1 bottom-[310px] w-[30px] h-[30px] z-[100] animate-ping" />
                       </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative">
                            <div className="mx-auto mt-36 flex flex-col items-center">
                                <h1 className="font-aelyn text-[24px] leading-[25px] text-brown font-normal w-[280px] text-center ">An ideal environment <span className="font-causten font-bold text-green">that nutures creativity</span></h1>
                                <img src={banner_line} alt="banner_line" className="w-[203px] h-[7px]" />

                                <Link to = "/contact"><button className="bg-brown w-[173px] h-[48px] rounded-[8px] text-white font-causten font-bold text-[20px] leading-[20px] mt-7">Contact now</button></Link>
                            </div>
                        
                            <img src={navimage_2_mobile} alt="nav-image" className="w-full h-[451px] mt-12" />
                            <img src = {rightarrow} alt="arrow-icon" className = "absolute right-1 bottom-[310px] w-[30px] h-[30px] z-[100] animate-ping" />
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>

                        <img src={navimage_3_mobile} alt="nav-image" className="w-full h-[415px]" />
                        
                        <div className="mx-auto mt-20 flex flex-col items-center">
                            <h1 className="font-aelyn text-[24px] leading-[25px] text-brown font-normal w-[280px] text-center ">Preparing learners <br /><span className="font-causten font-bold text-green">for a global future</span></h1>
                            <img src={banner_line} alt="banner_line" className="w-[203px] h-[7px]" />

                            <Link to = "/contact"><button className="bg-brown w-[173px] h-[48px] rounded-[8px] text-white font-causten font-bold text-[20px] leading-[20px] mt-7">Contact now</button></Link>
                        </div>
                        
                        
                    </SwiperSlide>
                
                </Swiper>
            
            </div>*/}

      {/* Banner Section - Large Screens (GSAP) */}
      <div className="sm:block relative hidden">
        <div
          ref={containerRef}
          id="horizontal-container "
          className="flex flex-row h-screen"
        >
          <div className=" absolute w-full top-0 sm:top-7 left-0 px-24  z-10 ">
            <div className="flex flex-row justify-between items-center  ">
              <Link to="/">
                <img src={logo} alt="RUH-Logo" className="w-[153px] h-[99px]" />
              </Link>
              <img
                src={hamburger_menu}
                alt="hamburger-icon"
                className="w-[47px] h-[47px] cursor-pointer "
                onClick={() => {
                  setNavMenu(true);
                }}
              />
            </div>
          </div>
          {/* Banner-1 */}
          <div className="flex flex-row items-center w-screen h-screen shrink-0 relative content z-5">
            <img src={navimage_1} className="w-3/4 h-full object-cover " />

            <div className="w-1/4 flex flex-col items-center ">
              <h1 className="font-aelyn text-center text-[42px] font-regular leading-[45px] w-[280px] text-brown ">
                An Ideal environment{" "}
                <span className="text-green !font-causten  font-bold">
                  that nurtures creativity.
                </span>
              </h1>
              <img
                src={banner_line}
                alt="banner-line"
                className="w-[216px] h-[13px]"
              />
              <Link to="/contact">
                <button className="w-[265px] h-[72px] bg-brown text-white font-causten text-[24px] leading-[24px] font-bold rounded-[16px] mt-12 cursor-pointer">
                  Book Campus Tour
                </button>
              </Link>
            </div>
          </div>

          {/* Banner-2 */}
          <div className="flex flex-row items-center w-screen pl-5 lg:pl-0  shrink-0 content ">
            <img src={navimage_2} className="w-3/4 order-2 object-cover " />

            {/* <div className="w-1/4 flex flex-col items-center ">
                            <h1 className="font-aelyn text-center text-[42px] font-regular leading-[45px] w-[280px] text-brown ">An Ideal environment <span className="text-green !font-causten  font-bold">that nurtures creativity.</span></h1>
                            <img src={banner_line} alt="banner-line" className="w-[216px] h-[13px]"/>
                            <Link to = "/contact"><button className="w-[265px] h-[72px] bg-brown text-white font-causten text-[24px] leading-[24px] font-bold rounded-[16px] mt-12 cursor-pointer">Book Campus Tour</button></Link>
                            
                        </div> */}
          </div>

          {/* Banner-3 */}
          <div className="flex flex-row justify-between items-center w-screen relative shrink-0 content">
            <div className="w-1/4 flex flex-col items-center mt-28 h-fit ">
              <h1 className="font-aelyn text-center text-[42px] font-regular leading-[45px] w-[215px] text-brown ">
                Preparing learners{" "}
                <span className="text-green !font-causten  font-bold">
                  for a global future
                </span>
              </h1>
              <img
                src={banner_line}
                alt="banner-line"
                className="w-[216px] h-[13px]"
              />
              <Link to="/contact">
                <button className="w-[265px] h-[72px] bg-brown text-white font-causten text-[24px] leading-[24px] font-bold rounded-[16px] mt-12 cursor-pointer">
                  Book campus tour
                </button>
              </Link>
            </div>

            <div className="w-3/4 h-full">
              <img
                src={navimage_3}
                className="w-full h-full mr-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section - large screens (Framer-motion) -Hidden */}
      <div className=" relative hidden">
        <div className="carousel relative" ref={bannerRef}>
          <div className="contentContainer">
            <div className=" absolute w-full top-0 sm:top-7 left-0 px-24  z-10 ">
              <div className="flex flex-row justify-between items-center  ">
                <img src={logo} alt="RUH-Logo" className="w-[153px] h-[99px]" />
                <img
                  src={hamburger_menu}
                  alt="hamburger-icon"
                  className="w-[47px] h-[47px] cursor-pointer "
                  onClick={() => {
                    setNavMenu(true);
                  }}
                />
              </div>
            </div>
            <motion.div className="images relative" style={{ x }}>
              {/* Banner 1 */}
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="flex flex-row items-center w-[100vw] shrink-0 relative">
                  <img src={navimage_1} className="w-3/4 object-cover" />

                  <div className="w-1/4 flex flex-col items-center ">
                    <h1 className="font-aelyn text-center text-[42px] font-regular leading-[45px] w-[280px] text-brown ">
                      An Ideal environment{" "}
                      <span className="text-green !font-causten  font-bold">
                        that nurtures creativity.
                      </span>
                    </h1>
                    <img
                      src={banner_line}
                      alt="banner-line"
                      className="w-[216px] h-[13px]"
                    />
                    <Link to="/contact">
                      <button className="w-[265px] h-[72px] bg-brown text-white font-causten text-[24px] leading-[24px] font-bold rounded-[16px] mt-12 cursor-pointer">
                        Book Campus Tour
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Banner 2 */}
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="flex flex-row items-center w-screen pl-5 lg:pl-0  shrink-0 ">
                  <img
                    src={navimage_2}
                    className="w-3/4 order-2 object-cover "
                  />

                  {/* <div className="w-1/4 flex flex-col items-center ">
                                                <h1 className="font-aelyn text-center text-[42px] font-regular leading-[45px] w-[280px] text-brown ">An Ideal environment <span className="text-green !font-causten  font-bold">that nurtures creativity.</span></h1>
                                                <img src={banner_line} alt="banner-line" className="w-[216px] h-[13px]"/>
                                                <Link to = "/contact"><button className="w-[265px] h-[72px] bg-brown text-white font-causten text-[24px] leading-[24px] font-bold rounded-[16px] mt-12 cursor-pointer">Book Campus Tour</button></Link>
                                                
                                            </div> */}
                </div>
              </motion.div>

              {/* Banner 3 */}
              <motion.div
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="flex flex-row justify-between items-center w-screen relative shrink-0">
                  <div className="w-1/4 flex flex-col items-center mt-28 h-fit ">
                    <h1 className="font-aelyn text-center text-[42px] font-regular leading-[45px] w-[215px] text-brown ">
                      Preparing learners{" "}
                      <span className="text-green !font-causten  font-bold">
                        for a global future
                      </span>
                    </h1>
                    <img
                      src={banner_line}
                      alt="banner-line"
                      className="w-[216px] h-[13px]"
                    />
                    <Link to="/contact">
                      <button className="w-[265px] h-[72px] bg-brown text-white font-causten text-[24px] leading-[24px] font-bold rounded-[16px] mt-12 cursor-pointer">
                        Book campus tour
                      </button>
                    </Link>
                  </div>

                  <img src={navimage_3} className="w-2/4 mr-12 " />
                </div>
              </motion.div>

              {/* <Swiper
                                    ref = {swiperRef}
                                    modules={[Autoplay, Mousewheel]}
                                    slidesPerView={1}
                                    mousewheel={{ forceToAxis: true, invert: false}} // Enable horizontal scrolling
                                    onSlideChange={({isEnd}) => {
                                        if(isEnd){
                                            setIsHorizontalScrolling(false);
                                        }
                                        AOS.refresh();
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="flex flex-row items-center w-full ">
                                            <img src={navimage_1} className="w-3/4 "/>

                                            <div className="w-1/4 flex flex-col items-center pr-32">
                                                <h1 className="font-aelyn text-center text-[42px] font-regular leading-[45px] w-[280px] text-brown ">Redefining education <span className="text-green !font-causten  font-bold">through innovation</span></h1>
                                                <img src={banner_line} alt="banner-line" className="w-[216px] h-[13px]"/>
                                                <Link to = "/contact"><button className="w-[265px] h-[72px] bg-brown text-white font-causten text-[24px] leading-[24px] font-bold rounded-[16px] mt-12 cursor-pointer">Contact Now</button></Link>
                                                
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="flex flex-row items-center w-full pl-5 lg:pl-0 ">
                                            <img src={navimage_2} className="w-3/4 order-2 object-cover "/>

                                            <div className="w-1/4 flex flex-col items-center ">
                                                <h1 className="font-aelyn text-center text-[42px] font-regular leading-[45px] w-[280px] text-brown ">An Ideal environment <span className="text-green !font-causten  font-bold">that nurtures creativity.</span></h1>
                                                <img src={banner_line} alt="banner-line" className="w-[216px] h-[13px]"/>
                                                <Link to = "/contact"><button className="w-[265px] h-[72px] bg-brown text-white font-causten text-[24px] leading-[24px] font-bold rounded-[16px] mt-12 cursor-pointer">Book Campus Tour</button></Link>
                                                
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="flex flex-row justify-between items-center w-full relative ">

                                            <div className="w-1/4 flex flex-col items-center mt-28 h-fit ">
                                                <h1 className="font-aelyn text-center text-[42px] font-regular leading-[45px] w-[215px] text-brown ">Preparing learners <span className="text-green !font-causten  font-bold">for a global future</span></h1>
                                                <img src={banner_line} alt="banner-line" className="w-[216px] h-[13px]"/>
                                                <Link to ="/contact"><button className="w-[265px] h-[72px] bg-brown text-white font-causten text-[24px] leading-[24px] font-bold rounded-[16px] mt-12 cursor-pointer">Book campus tour</button></Link>
                                                
                                            </div>

                                            <img src={navimage_3} className="w-2/4 mr-12 "/>
                                        </div> 

                                    </SwiperSlide>

                                </Swiper> */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div
        className="max-w-screen-xl mx-auto mt-9 swiper-stories"
        data-aos="fade-up"
      >
        <div className="flex flex-row justify-center items-center gap-x-5 gap-y-5 flex-wrap  md:flex-nowrap ">
          {/* <img src={stories_image} alt="stories-section-image" className="w-[361px] h-[261px] sm:w-[391.3px] sm:h-[283px] " /> */}
          <div className="w-[400px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={visibleIndex}
                src={images[visibleIndex]}
                alt={`Slide ${visibleIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="w-[400px] mx-auto block sm:hidden">
            <div className="flex flex-col gap-y-3 items-start px-7">
              <h5 className=" font-causten font-bold sm:font-medium text-orange sm:text-[28px] text-[40px] sm:leading-[71px] leading-[43px] w-[250px] sm:w-[592px]">
                Stories of{" "}
                <span className="font-aelyn !font-light text-brown text-[36px]">
                  community & continuity
                </span>
              </h5>
              <p className="font-causten font-normal sm:text-[24px] text-[16px] text-black sm:w-[597px] w-[250px] ">
                This space, rich with history, has embraced generations—your
                grandparents once studied here, and today, Ruh’lers carry
                forward the legacy of love and discovery.
              </p>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="flex flex-col gap-y-3 items-end">
              <h5 className=" font-causten font-bold sm:font-medium text-orange sm:text-[28px] text-[40px] sm:leading-[71px] leading-[43px] w-[250px] sm:w-[592px]">
                Stories of{" "}
                <span className="font-hugme sm:font-aelyn !font-bold text-brown text-[36px]">
                  community & continuity
                </span>
              </h5>
              <p className="font-causten font-normal sm:text-[24px] text-[16px] text-black sm:w-[597px] w-[250px] ">
                This space, rich with history, has embraced generations—your
                grandparents once studied here, and today, Ruh’lers carry
                forward the legacy of love and discovery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Co-Founder's Note */}
      <div
        className="max-w-[992px] mx-auto mt-16 sm:my-52 overflow-x-hidden"
        data-aos="fade-up"
      >
        <div className="flex flex-row items-center relative flex-wrap">
          <img
            src={cofounder_image}
            alt="'Co-Founder'-Image"
            className=" w-[320px] h-[516px] mx-auto sm:mx-0  mt-[-40px] sm:mt-0 sm:w-[576px] sm:h-fit z-10 order-2 sm:order-1"
          />

          <div className="bg-brown flex flex-col sm:px-16 sm:py-20 py-3 px-5 w-[361px] overflow-hidden h-[424px] mx-auto sm:w-[502px] sm:h-[602px] order-1 sm:order-2 sm:absolute right-[-50px] z-0">
            <h2 className="font-hugme sm:font-aelyn sm:text-[40px] text-[28px] font-extrabold text-offwhite sm:font-normal leading-[71px]">
              Co-Founder's Note
            </h2>

            <p className="font-causten text-[16px] leading-[23px] w-[297px] sm:text-[24px] font-normal sm:leading-[33px] sm:w-[362px] text-offwhite mt-5">
              “At Ruh Continuum School, we understand that education is not a
              one-size-fits-all process. We strive to unlock each child's
              potential by fostering an environment that encourages curiosity,
              values individuality, and prepares them for the ever-evolving
              world.”
            </p>

            <h5 className="font-caveat text-[28px] leading-[33px] text-yellow sm:mt-12 mt-9">
              Srisha Mohandoss
            </h5>
            <p className="font-causten text-[14px] font-extralight text-offwhite w-[221px] sm:w-full">
              Co-Founder, Ruh Continuum School & Ruh Early Years
            </p>
          </div>
        </div>
      </div>

      {/* Campus Tour Section - mobile screen */}
      <div
        className="max-w-screen-xl mx-auto mt-16 block sm:hidden"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center">
          <h1 className="font-causten font-bold text-[24px] leading-[24px] sm:text-[64px] sm:leading-[84px] text-green">
            Every space tells a story
          </h1>
          <p className="font-causten font-normal text-[16px] leading-[23px] w-[331px] sm:text-[24px] sm:leading-[33px] text-black sm:w-[675px] text-center mt-5">
            Our intentionally designed campus nurtures creativity, curiosity,
            and growth that empowers young minds to explore their fullest
            potential. Join us for a tour and see how we’ve redefined learning
            environments!
          </p>

          <Link to="/contact">
            <button className="w-[188px] h-[48px] sm:w-[265px] sm:h-[72px] bg-brown text-white font-causten text-[20px] leading-[20px] sm:text-[24px] sm:leading-[24px] font-bold rounded-[16px] mt-7 sm:mt-12">
              Book campus tour
            </button>
          </Link>
        </div>
      </div>

      {/* Animation Section */}
      <div className="bg-home-animation-mobile sm:bg-home-animation bg-cover relative h-[362px] sm:h-[1178px] py-16  w-full overflow-hidden mt-16 sm:mt-0 flex flex-shrink-0 gap-x-44 ">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full shrink-0"
        >
          <motion.img
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 20, repeat: Infinity }}
            src={intuitive}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute left-[30%] top-[15%]"
          />
          <img
            src={belonging}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute left-[70%] top-[30%]"
          />
          <img
            src={open_ended}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute left-0 top-[40%]"
          />
          <img
            src={play_based}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute right-0 top-[50%] "
          />
          <img
            src={mindful_orange}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute left-[30%] top-[60%] "
          />
          <img
            src={community}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute left-[70%] top-[70%] "
          />
          <img
            src={global_learning}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute left-[10%] top-[80%] "
          />
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-full shrink-0"
        >
          <img
            src={intuitive}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute left-[30%] top-[15%]"
          />
          <img
            src={belonging}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute left-[70%] top-[30%]"
          />
          <img
            src={open_ended}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute left-0 top-[40%]"
          />
          <img
            src={play_based}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute right-0 top-[50%] "
          />
          <img
            src={mindful_orange}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute left-[30%] top-[60%] "
          />
          <img
            src={community}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute left-[70%] top-[70%] "
          />
          <img
            src={global_learning}
            alt="animation_elements"
            className="w-[98.42px] h-[31.68px] sm:w-[320px] sm:h-[103px] absolute left-[10%] top-[80%] "
          />
        </motion.div>
      </div>

      {/* Campus Tour Section - large screens */}
      <div
        className="max-w-screen-xl mx-auto mt-16 sm:block hidden"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center">
          <h1 className="font-causten font-bold text-[64px] leading-[84px] text-green">
            Every space tells a story
          </h1>
          <p className="font-causten font-normal text-[24px] leading-[33px] text-black w-[650px] text-center mt-5">
            Our intentionally designed campus nurtures creativity, curiosity,
            and growth that empowers young minds to explore their fullest
            potential. Join us for a tour and see how we’ve redefined learning
            environments!
          </p>

          <Link to="/contact">
            <button className="w-[265px] h-[72px] bg-brown text-white font-causten text-[24px] leading-[24px] font-bold rounded-[16px] mt-12">
              Book campus tour
            </button>
          </Link>
        </div>
      </div>

      {/* Youtube Video Section */}
      <div className=" relative  max-w-screen-xl mx-auto my-16 sm:my-40 h-[300px] sm:h-[700px] youtube-border !px-3">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/t6W-IGl30G4?si=MC_Od6xSR29GuyDr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* Contact Learning Advisory Section */}
      <div className="max-w-screen-xl mx-auto mt-20" data-aos="fade-up">
        <div className="flex flex-col sm:flex-row items-center gap-x-24 justify-center">
          {/* <img src={advisory_kid} alt="Kid-Image" className="w-[325px] h-[481px] sm:w-[481px] sm:h-[712px] mt-12 sm:mt-0 order-2 sm:order-1"/> */}

          <div className="relative w-[325px] h-[481px] sm:w-[481px] sm:h-[712px] order-2 sm:order-1 sm:mt-0 mt-9 ">
            <img
              src={kid_image_without}
              alt="kid-image"
              className="w-[215px] h-[341px] sm:w-[319px] sm:h-[505px] absolute bottom-0 left-[30%] z-10 "
            />

            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              src={visual}
              alt="visual"
              className="absolute top-12 sm:bottom-[400px] sm:left-0 w-[139px] h-[152px] sm:w-[207px] sm:h-[225px]"
            />

            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              src={listening}
              alt="listening"
              className="absolute sm:top-[-20px] left-32 sm:left-40 w-[97px] h-[215px] sm:w-[145px] sm:h-[318px]"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
              src={kinaesthetic}
              alt="kinaesthetic"
              className="absolute top-16 right-[-10px] sm:top-20 sm:right-0 w-[178px] h-[135px] sm:w-[263px] sm:h-[200px]"
            />
          </div>

          <div className="flex flex-col items-center gap-y-3 order-1 sm:order-2">
            <p className="font-causten font-normal text-[16px] leading-[23px] sm:text-[24px] w-[307px] sm:leading-[33px] text-black text-center sm:w-[410px]">
              We celebrate the uniqueness of every learner through diverse
              methodologies. From experiential activities to structured
              problem-solving, our approach adapts to diverse learning styles,
              ensuring every learner thrives in their own way.
            </p>
            <h3 className="font-causten font-bold text-[24px] leading-[24px] sm:text-[32px] sm:leading-[84px] my-7 sm:my-0 text-orange">
              Contact learning advisory today!
            </h3>

            <Link to="/contact">
              <button className="w-[188px] h-[48px] sm:w-[265px] sm:h-[72px] bg-brown text-white font-causten text-[20px] leading-[20px] sm:text-[24px] sm:leading-[24px] font-bold rounded-[16px]">
                Contact now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* SSVM Institution Section */}
      <div className="bg-orange" data-aos="fade-up">
        <div className="max-w-screen-xl mx-auto px-5 pt-12 sm:px-7 xl:px-20 sm:pt-44 pb-32  ">
          <div className="flex flex-row flex-wrap justify-center items-start sm:justify-between ">
            <div>
              <img
                src={ssvm_logo}
                alt="SSVM-Logo"
                className="sm:w-[508px] sm:h-[196px] w-[266px] h-[102px] mx-auto sm:mx-0"
              />

              <p className="font-causten font-semibold text-center sm:text-left text-[16px] leading-[23px] sm:text-[24px] sm:leading-[27px] w-[344px] sm:w-[508px] text-offwhite sm:mt-16 mt-9">
                Ruh Continuum School is an initiative by SSVM Institutions, a
                group of K-12 schools founded in 1998, with 2 international
                school brands and 10 campuses under its wings.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-9 sm:gap-y-16 sm:gap-x-20 items-center mt-12 sm:mt-0">
              <div className="flex flex-col items-center gap-y-2 sm:gap-y-0 ">
                <img
                  src={campus_icon}
                  alt="Campus-icon"
                  className="sm:w-[153px] sm:h-[165px] w-[106px] h-[115px]"
                />
                <h5 className="font-causten font-bold text-[16px] leading-[23px] sm:text-[24px] sm:leading-[32px] text-offwhite mt-2">
                  10+ Campuses
                </h5>
              </div>

              <div className="flex flex-col items-center gap-y-2 sm:gap-y-0 mt-7">
                <img
                  src={curricular_icon}
                  alt="Curricular-Icon"
                  className="sm:w-[106px] sm:h-[133px] w-[73px] h-[92px]"
                />
                <h5 className="font-causten font-bold text-[16px] leading-[23px] sm:text-[24px] sm:leading-[32px] text-offwhite mt-2">
                  6+ Curriculam
                </h5>
              </div>

              <div className="flex flex-col items-center gap-y-2 sm:gap-y-0 ">
                <img
                  src={faculty_icon}
                  alt="Faculty-icon"
                  className="sm:w-[153px] sm:h-[139px] w-[106px] h-[96px]"
                />
                <h5 className="font-causten font-bold text-[16px] leading-[23px] sm:text-[24px] sm:leading-[32px] text-offwhite mt-2 w-[142px] text-center">
                  500+ Trained Faculty
                </h5>
              </div>

              <div className="flex flex-col items-center gap-y-2 sm:gap-y-0 ">
                <img
                  src={student_impact_icon}
                  alt="Students-Impact-Icon"
                  className="sm:w-[129px] sm:h-[141px] w-[89px] h-[98px]"
                />
                <h5 className="font-causten font-bold text-[16px] leading-[23px] sm:text-[24px] sm:leading-[32px] text-offwhite mt-2 w-[186px] text-center">
                  10,000+ Students Lives Impacted
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-12 sm:my-0" data-aos="fade-up">
        <h1 className="font-aelyn text-[42px] leading-[54px] text-brown text-center font-extrabold mt-12">
          Our Campuses
        </h1>

        <Swiper
          modules={[Autoplay]}
          className="mt-7"
          slidesPerView={5}
          spaceBetween={5}
          autoplay={{ delay: 1000 }}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            780: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <img
              src={kidscasa_alangombu}
              alt="campus-logo"
              className="w-[173px] h-[46px] sm:w-[223px] sm:h-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={kidscasa_mettupalayam}
              alt="campus-logo"
              className="w-[173px] h-[46px] sm:w-[223px] sm:h-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={kidscasa_saibabcolony}
              alt="campus-logo"
              className="w-[173px] h-[46px] sm:w-[223px] sm:h-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={kidscasa_tirupur}
              alt="campus-logo"
              className="w-[173px] h-[46px] sm:w-[223px] sm:h-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ruh_damunagar}
              alt="campus-logo"
              className="w-[173px] h-[46px] sm:w-[223px] sm:h-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ruh_racecourse}
              alt="campus-logo"
              className="w-[173px] h-[46px] sm:w-[223px] sm:h-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ruh_singanallur}
              alt="campus-logo"
              className="w-[173px] h-[46px] sm:w-[223px] sm:h-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ssvm_funmall}
              alt="campus-logo"
              className="w-[173px] h-[46px] sm:w-[223px] sm:h-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ssvm_mettupalayam}
              alt="campus-logo"
              className="w-[173px] h-[46px] sm:w-[223px] sm:h-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ssvm_nambiyur}
              alt="campus-logo"
              className="w-[173px] h-[46px] sm:w-[223px] sm:h-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ssvm_singanallur}
              alt="campus-logo"
              className="w-[173px] h-[46px] sm:w-[223px] sm:h-[60px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Co-Founder Note */}
      <div className="max-w-[992px] mx-auto sm:my-52 my-7 " data-aos="fade-up">
        <div className="flex flex-row items-center relative md:flex-nowrap flex-wrap">
          <div className="bg-brown flex flex-col sm:px-16 sm:py-20 py-3 px-5 w-[361px] overflow-hidden h-[424px] sm:w-[520px] sm:h-[602px] mx-auto sm:mx-0  z-0">
            <h2 className="font-hugme sm:font-aelyn text-[30px] sm:text-[40px] text-offwhite font-normal leading-[71px]">
              Co-Founder's Note
            </h2>

            <p className="font-causten text-[16px] leading-[23px] sm:text-[24px] font-normal sm:leading-[33px] sm:w-[362px] w-[297px] text-offwhite mt-5">
              “Education is an ever-evolving field, and as an academician, I
              believe in constantly adapting to this rapidly changing world. The
              world of education has undergone many changes in the last decade.”
            </p>

            <h5 className="font-caveat text-[24px] sm:text-[28px] leading-[33px] text-yellow sm:text-yellow mt-12 italic">
              Dr.Manimekalai Mohan
            </h5>
            <p className="font-causten text-[14px] font-extralight text-offwhite mt-2">
              Founder & Managing Trustee, SSVM Group of Instituitions
            </p>
          </div>

          <img
            src={founder_image}
            alt="Co-Founder-Image"
            className="w-[340px] h-[537px] mx-auto mt-[-60px] sm:w-[536px] sm:h-[772px] z-10 order-2 sm:absolute sm:right-7 top-[-20px] "
          />
        </div>
      </div>

      <Friends />

      <div className="py-20  swiper-membership" data-aos="fade-up">
        <h3 className="font-causten text-[24px] font-bold leading-[54px] text-orange text-center uppercase">
          Our Seal of Trust
        </h3>
        <h1 className="font-aelyn text-[47px] leading-[54px] font-medium text-center text-brown mt-2">
          Memberships & Accrediations
        </h1>

        {/* Membership 1st Row */}
        <div className="flex gap-x-3 sm:gap-x-12 overflow-x-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex flex-row gap-x-3 sm:gap-x-12 mt-12 shrink-0"
          >
            <img
              src={afs_logo}
              alt="afs_logo"
              className="w-[84px] h-[75px] sm:w-[168px] sm:h-[150px]"
            />
            <img
              src={igbc_logo}
              alt="afs_logo"
              className="w-[74.85px] h-[75px] sm:w-[149px] sm:h-[150px]"
            />
            <img
              src={mca_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]"
            />
            <img
              src={dais_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[156px] sm:h-[150px]"
            />
            <img
              src={ielts_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[168px] sm:h-[150px]"
            />
            <img
              src={foryoung_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[148px] sm:h-[150px]"
            />
            <img
              src={internationcouncil_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[171px] sm:h-[150px]"
            />
            <img
              src={nabet_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[168px] sm:h-[150px]"
            />
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex flex-row gap-x-3 sm:gap-x-12 mt-12 shrink-0"
          >
            <img
              src={afs_logo}
              alt="afs_logo"
              className="w-[84px] h-[75px] sm:w-[168px] sm:h-[150px]"
            />
            <img
              src={igbc_logo}
              alt="afs_logo"
              className="w-[74.85px] h-[75px] sm:w-[149px] sm:h-[150px]"
            />
            <img
              src={mca_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]"
            />
            <img
              src={dais_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[156px] sm:h-[150px]"
            />
            <img
              src={ielts_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[168px] sm:h-[150px]"
            />
            <img
              src={foryoung_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[148px] sm:h-[150px]"
            />
            <img
              src={internationcouncil_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[171px] sm:h-[150px]"
            />
            <img
              src={nabet_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[168px] sm:h-[150px]"
            />
          </motion.div>
        </div>

        {/* Memebership 2nd Row */}
        <div className="flex flex-row gap-x-3 sm:gap-x-12 overflow-x-hidden">
          <motion.div
            className="flex flex-row gap-x-3 sm:gap-x-12 mt-12 shrink-0"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <img
              src={acceleratedprogram_logo}
              alt="afs_logo"
              className="w-[115px] h-[75px] sm:w-[230px] sm:h-[150px]"
            />
            <img
              src={worldready_logo}
              alt="afs_logo"
              className="w-[149px] h-[75px] sm:w-[299px] sm:h-[150px]"
            />
            <img
              src={ew_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]"
            />
            <img
              src={aiaa_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]"
            />
            <img
              src={sat_logo}
              alt="afs_logo"
              className="w-[120px] h-[75px] sm:w-[231px] sm:h-[150px]"
            />
            <img
              src={wacp_logo}
              alt="afs_logo"
              className="w-[149px] h-[75px] sm:w-[346px] sm:h-[150px]"
            />
          </motion.div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex flex-row gap-x-3 sm:gap-x-12 mt-12 shrink-0"
          >
            <img
              src={acceleratedprogram_logo}
              alt="afs_logo"
              className="w-[115px] h-[75px] sm:w-[230px] sm:h-[150px]"
            />
            <img
              src={worldready_logo}
              alt="afs_logo"
              className="w-[149px] h-[75px] sm:w-[299px] sm:h-[150px]"
            />
            <img
              src={ew_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]"
            />
            <img
              src={aiaa_logo}
              alt="afs_logo"
              className="w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]"
            />
            <img
              src={sat_logo}
              alt="afs_logo"
              className="w-[120px] h-[75px] sm:w-[231px] sm:h-[150px]"
            />
            <img
              src={wacp_logo}
              alt="afs_logo"
              className="w-[149px] h-[75px] sm:w-[346px] sm:h-[150px]"
            />
          </motion.div>
        </div>

        {/* Membership 3rd Row */}
        <div className="flex flex-row gap-x-3 sm:gap-x-12 overflow-x-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex flex-row gap-x-3 sm:gap-x-12 shrink-0 mt-12"
          >
            <img
              src={cambridge_logo}
              alt="afs_logo"
              className="w-[232px] h-[75px] sm:w-[464px] sm:h-[150px]"
            />
            <img
              src={ted_logo}
              alt="afs_logo"
              className="w-[273px] h-[75px] sm:w-[547px] sm:h-[150px]"
            />
            <img
              src={diamond_logo}
              alt="afs_logo"
              className="w-[106px] h-[75px] sm:w-[213px] sm:h-[150px]"
            />
            <img
              src={cambridgeassesment_logo}
              alt="afs_logo"
              className="w-[124px] h-[75px] sm:w-[249px] sm:h-[150px]"
            />
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex flex-row gap-x-3 sm:gap-x-12 shrink-0 mt-12"
          >
            <img
              src={cambridge_logo}
              alt="afs_logo"
              className="w-[232px] h-[75px] sm:w-[464px] sm:h-[150px]"
            />
            <img
              src={ted_logo}
              alt="afs_logo"
              className="w-[273px] h-[75px] sm:w-[547px] sm:h-[150px]"
            />
            <img
              src={diamond_logo}
              alt="afs_logo"
              className="w-[106px] h-[75px] sm:w-[213px] sm:h-[150px]"
            />
            <img
              src={cambridgeassesment_logo}
              alt="afs_logo"
              className="w-[124px] h-[75px] sm:w-[249px] sm:h-[150px]"
            />
          </motion.div>
        </div>

        {/* <div className="mt-12 max-w-7xl mx-auto w-full ">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={40}
                        slidesPerView={7}
                        autoplay= {{delay: 1000,}}
                        className="mt-12"
                        loop = {true}
                        breakpoints={{
                            300: {
                                spaceBetween: 20,
                                slidesPerView: 5,

                            },
                            700: {
                                spaceBetween: 40,
                                slidesPerView: 7,
                            }
                        }}
                    >
                        <SwiperSlide><img src={afs_logo} alt="afs_logo" className="w-[84px] h-[75px] sm:w-[168px] sm:h-[150px]"/> </SwiperSlide>
                        <SwiperSlide><img src={igbc_logo} alt="afs_logo" className="w-[74.85px] h-[75px] sm:w-[149px] sm:h-[150px]"/> </SwiperSlide>
                        <SwiperSlide><img src={mca_logo} alt="afs_logo" className="w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]"/> </SwiperSlide>
                        <SwiperSlide><img src={dais_logo} alt="afs_logo" className="w-[75px] h-[75px] sm:w-[156px] sm:h-[150px]"/> </SwiperSlide>
                        <SwiperSlide><img src={ielts_logo} alt="afs_logo" className="w-[75px] h-[75px] sm:w-[168px] sm:h-[150px]"/> </SwiperSlide>
                        <SwiperSlide><img src={foryoung_logo} alt="afs_logo" className="w-[75px] h-[75px] sm:w-[148px] sm:h-[150px]"/> </SwiperSlide>
                        <SwiperSlide><img src={internationcouncil_logo} alt="afs_logo" className="w-[75px] h-[75px] sm:w-[171px] sm:h-[150px]"/> </SwiperSlide>
                        <SwiperSlide><img src={nabet_logo} alt="afs_logo" className="w-[75px] h-[75px] sm:w-[168px] sm:h-[150px]"/> </SwiperSlide>

                    </Swiper>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={5}
                        autoplay= {{delay: 1000, reverseDirection: true}}
                        className="mt-12"
                        loop = {true}
                    >
                        <SwiperSlide><img src={acceleratedprogram_logo} alt="afs_logo" className="w-[115px] h-[75px] sm:w-[230px] sm:h-[150px]"/></SwiperSlide>
                        <SwiperSlide><img src={worldready_logo} alt="afs_logo" className="w-[149px] h-[75px] sm:w-[299px] sm:h-[150px]"/></SwiperSlide>
                        <SwiperSlide><img src={ew_logo} alt="afs_logo" className="w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]"/></SwiperSlide>
                        <SwiperSlide><img src={aiaa_logo} alt="afs_logo" className="w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]"/></SwiperSlide>
                        <SwiperSlide><img src={sat_logo} alt="afs_logo" className="w-[120px] h-[75px] sm:w-[231px] sm:h-[150px]"/></SwiperSlide>
                        <SwiperSlide><img src={wacp_logo} alt="afs_logo" className="w-[149px] h-[75px] sm:w-[346px] sm:h-[150px]"/></SwiperSlide>


                    </Swiper>

                    <Swiper
                        modules={[Autoplay]}
                        autoplay= {{delay: 1000,}}
                        className="mt-12"
                        loop = {true}
                        breakpoints={{
                            300:{
                                spaceBetween: 10,
                                slidesPerView: 2,
                            },
                            700: {
                                spaceBetween: 70,
                                slidesPerView: 3,
                            }
                        }}
                    >
                        <SwiperSlide><img src={cambridge_logo} alt="afs_logo" className="w-[232px] h-[75px] sm:w-[464px] sm:h-[150px]"/></SwiperSlide>
                        <SwiperSlide><img src={ted_logo} alt="afs_logo" className="w-[273px] h-[75px] sm:w-[547px] sm:h-[150px]"/></SwiperSlide>
                        <SwiperSlide><img src={diamond_logo} alt="afs_logo" className="w-[106px] h-[75px] sm:w-[213px] sm:h-[150px]"/></SwiperSlide>
                        <SwiperSlide><img src={cambridgeassesment_logo} alt="afs_logo" className="w-[124px] h-[75px] sm:w-[249px] sm:h-[150px]"/></SwiperSlide>
                    </Swiper>


                </div>*/}
      </div>

      {/* Testimonial Section */}
      <div
        className="bg-yellow pt-20 overflow-x-hidden  h-[1000px] "
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="">
            <h2 className="font-causten text-[40px] font-bold leading-[55px] text-orange">
              What our lovely
            </h2>
            <h1 className="font-aelyn text-[40px] font-bold leading-[51px] text-brown w-[277px]">
              parents say about us
            </h1>
          </div>

          <div className="flex gap-x-12 mt-7">
            <motion.div
              className="flex flex-row items-end gap-x-12 shrink-0"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {Testimonial.map((items) => {
                return (
                  <>
                    <div
                      className={`bg-white py-12 px-9 rounded-[24px] shrink-0 max-w-[500px] w-full`}
                    >
                      <img src={testimonial_stars} alt="rating-image" />
                      <h5
                        className={`font-causten font-normal sm:text-[32px] text-[25px] max-w-full leading-[44px] tracking-[-2%] mt-7`}
                      >
                        {items.content}
                      </h5>
                      <h6 className="font-causten font-medium text-[18px] leading-[28px] mt-12">
                        - {items.name}
                      </h6>
                      <h6 className="font-causten font-medium text-[16px] leading-[24px] text-[#667085]">
                        {items.parentof}
                      </h6>
                    </div>
                  </>
                );
              })}
            </motion.div>

            <motion.div
              className="flex flex-row items-end gap-x-12 shrink-0"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {Testimonial.map((items) => {
                return (
                  <>
                    <div
                      className={`bg-white py-12 px-9 rounded-[24px] shrink-0 max-w-[500px] w-full`}
                    >
                      <img src={testimonial_stars} alt="rating-image" />
                      <h5
                        className={`font-causten font-normal sm:text-[32px] text-[25px] max-w-full  leading-[44px] tracking-[-2%] mt-7`}
                      >
                        {items.content}
                      </h5>
                      <h6 className="font-causten font-medium text-[18px] leading-[28px] mt-12">
                        - {items.name}
                      </h6>
                      <h6 className="font-causten font-medium text-[16px] leading-[24px] text-[#667085]">
                        {items.parentof}
                      </h6>
                    </div>
                  </>
                );
              })}
            </motion.div>
          </div>

          {/* <Swiper
                        modules={{Autoplay}}
                        autoplay= {{delay: 500}}
                        slidesPerView={2}
                        spaceBetween={50}
                        loop = {true}
                        className="mt-12"
                    >
                        {Testimonial.map((items) => {
                            return(
                                <>
                                   <SwiperSlide>
                                        <div className ={`bg-white w-fit h-fit p-14 rounded-[24px]`}>
                                            <img src={testimonial_stars} alt="rating-image" />
                                            <h5 className={`font-causten font-normal text-[32px] leading-[44px] tracking-[-2%] mt-7 ${items.width}`}>{items.content}</h5>
                                            <h6 className = "font-causten font-medium text-[18px] leading-[28px] mt-12">- {items.name}</h6>
                                            <h6 className = "font-causten font-medium text-[16px] leading-[24px] text-[#667085]">{items.parentof}</h6>
                                        </div>
                                    </SwiperSlide>
                                   
                                </>
                            )
                        })}
                    </Swiper> */}
        </div>
      </div>

      {/* Ruh'lington Post */}
      <div
        className="max-w-screen-xl mx-auto py-12 sm:px-5 sm:py-24  xl:p-24 "
        data-aos="fade-up"
      >
        <div className="flex flex-col sm:flex-row sm:gap-x-5 xl:gap-x-12 gap-y-16 sm:gap-y-0 ">
          <div className="flex flex-col sm:items-start items-center sm:flex-none">
            <h1 className="font-causten font-bold text-[32px] sm:text-[40px] leading-[44px] tracking-[-2%] text-green ">
              The Ruh'lington Post
            </h1>

            <p className="font-causten text-[16px] sm:text-[20px] font-normal leading-[23px] sm:leading-[30px] text-black w-[357px] sm:w-[394px] mt-3 text-center sm:text-left">
              Explore perspectives, reflections, and learning adventures from
              Ruh'lers. The Ruh’lington Post is your gateway to engaging
              stories, academic insights, and campus highlights.
            </p>
            <Link to="/bloglist"> 
            <button className="w-[175px] h-[48px] sm:w-[265px] sm:h-[72px] bg-brown text-white font-causten text-[20px] leading-[20px] sm:text-[24px] sm:leading-[24px] font-bold rounded-[8px] sm:rounded-[16px] mt-9 ">
              View all posts
            </button>
            </Link>
          </div>

          <div className="flex flex-col gap-y-16">
            <div className="flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row gap-x-5 px-3 max-w-[650px]">
              <img
                src={post_image_1}
                alt="post_image_1"
                className="w-full h-[240px] object-cover sm:w-[279px] sm:h-[240px] rounded-[16px]"
              />

              <div>
                {/* <h5 className="font-causten font-semibold text-[14px] text-brown ">Care tips</h5> */}

                <div className="flex flex-row justify-between items-start mt-3">
                  <h1 className="font-causten text-[24px] font-bold leading-[32px] text-black w-[357px] sm:w-[239px]">
                    Exploring the Deep Blue
                  </h1>

                  <Link to="/blog/1">
                    <img
                      src={arrow_up_right}
                      alt="arrow-up-right"
                      className="w-[24px] h-[24px] cursor-pointer"
                    />
                  </Link>
                </div>

                <p className="font-causten text-[16px] font-normal leading-[24px] mt-3">
                  Inspired by a song, learners explored marine life through art.
                  They painted a blue ocean, crafted sea creatures with natural
                  materials, and highlighted pollution using plastic waste. The
                  canvas became a creative reflection of their inquiry, blending
                  art, learning, and environmental awareness.
                </p>
                {/* <p className="font-causten text-[14px] font-semibold leading-[20px] text-black mt-4">Vineeth</p>
                                <p className="font-causten text-[14px] font-light leading-[20px] text-black ">20 Jan 2024</p> */}
              </div>
            </div>

            <div className="flex flex-col gap-y-5 sm:gap-y-0 px-3 sm:flex-row gap-x-5 max-w-[650px]">
              <img
                src={post_image_2}
                alt="post_image_2"
                className="w-full object-cover sm:w-[279px] h-[240px] rounded-[16px]"
              />

              <div>
                {/* <h5 className="font-causten font-semibold text-[14px] text-brown ">Care tips</h5> */}

                <div className="flex flex-row justify-between items-start mt-3">
                  <h1 className="font-causten text-[24px] font-bold leading-[32px] text-black w-[357px] sm:w-[239px]">
                    Protecting Our Oceans: Little Ruhlers Take Action for Sea
                    Turtles
                  </h1>
                  <Link to="/blog/2">
                    <img
                      src={arrow_up_right}
                      alt="arrow-up-right"
                      className="w-[24px] h-[24px] cursor-pointer"
                    />
                  </Link>
                </div>

                <p className="font-causten text-[16px] font-normal leading-[24px] mt-3">
                  Little Ruhlers explored ocean pollution's impact on sea
                  turtles through a hands-on project, creating a model with
                  recycled materials to raise awareness about marine
                  conservation.
                </p>
                {/* <p className="font-causten text-[14px] font-semibold leading-[20px] text-black mt-4">Sahana</p> */}
                {/* <p className="font-causten text-[14px] font-light leading-[20px] text-black ">20 Jan 2024</p> */}
              </div>
            </div>
          </div>
        </div>
       
        <div className="flex   gap-x-3 sm:gap-x-12  mt-20">
          {instafeed && instafeed.map((item, index) => ( item.media_type !=='VIDEO' && ( 
          <> 
          {/* <h1>{item.id}</h1> */}
          <motion.div
            className="flex flex-row gap-x-3 sm:gap-x-12 mt-12 shrink-0"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
                  <img
                  key={item.id}
                    src={item.media_url}
                    // alt={item.caption}
                  className="w-[84px] h-[75px] sm:w-[220px] sm:h-[240px]"
                  />
             </motion.div>
          </>
          )
        ))}
      </div>
             
           
      </div>

      <Curioustoknowmore />

      {/* Pop-up Menu */}
      <div
        className={
          navMenu === false
            ? "hidden"
            : "w-screen h-screen bg-green fixed left-0 top-0 z-10 overflow-hidden"
        }
      >
        <div className="max-w-screen-xl mx-auto sm:p-20 px-9 py-7">
          <div className="flex flex-row items-start justify-between">
            <img
              src={logo_offwhite}
              alt="ruhlogo-offwhite"
              className="sm:w-[208px] sm:h-[135px] w-[152px] h-[98px]"
            />
            <img
              src={close_icon}
              alt="close-icon"
              className="sm:w-[72px] w-[32px] h-[32px] sm:h-[72px]  cursor-pointer"
              onClick={() => setNavMenu(false)}
            />
          </div>

          <div className="flex flex-col gap-y-12 sm:flex-row sm:gap-x-36 text-offwhite mt-20">
            <div className="flex flex-col gap-y-3">
              <Link to="/">
                <h5 className="font-causten font-bold text-[36px] sm:text-[48px] leading-[20px] uppercase">
                  Home
                </h5>
              </Link>

              <Link to="/about">
                <p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer mt-3">
                  about us
                </p>
              </Link>
              <Link to="/curriculum">
                <p className="font-causten font-extralight text-[24px] leading-[24px]cursor-pointer">
                  curriculum
                </p>
              </Link>
              <Link to="/contact">
                <p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">
                  contact us
                </p>
              </Link>
            </div>

            <div className="flex flex-col gap-y-3">
              <Link to="/">
                <h5 className="font-causten font-bold text-[36px] sm:text-[48px] leading-[20px] uppercase">
                  Life @ RUH
                </h5>
              </Link>

              <a href="/life@RUH">
                <p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer mt-3">
                  school life
                </p>
              </a>
              <a href="/sports">
                <p className="font-causten font-extralight text-[24px] leading-[24px]cursor-pointer">
                  sports & co-curricular
                </p>
              </a>
              <a href="/parents-corner">
                <p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">
                  parent's corner
                </p>
              </a>
              {/* <Link to = "/underconstruction"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">publications</p></Link> */}
            </div>
          </div>

          <hr className="border-t-2 border-offwhite w-full sm:mt-20 mt-12" />

          <h6 className="font-causten sm:text-[24px] text-[16px] leading-[24px] sm:leading-[38px] w-[276px] sm:w-full font-light text-offwhite mt-5">
            50, Dhamu Nagar, Puliakulam Coimbatore, Tamil Nadu 641018
          </h6>
          <h6 className="font-causten text-[24px] leading-[38px] font-semibold text-offwhite mt-3">
            +91 73958 05531
          </h6>

          <div className="flex flex-row items-center gap-x-7 mt-3 sm:mt-9">
            <a href="https://www.google.com" target="_blank">
              <img
                src={insta_icon_offwhite}
                alt="Instagram-icon"
                className="sm:w-[44px] sm:h-[42px] w-[35px] h-[35px]"
              />
            </a>
            <a href="https://www.google.com" target="_blank">
              <img
                src={facebook_icon_offwhite}
                alt="Facebook-icon"
                className="sm:w-[44px] sm:h-[42px] w-[35px] h-[35px]"
              />
            </a>
            <a href="https://www.google.com" target="_blank">
              <img
                src={linkedin_icon_offwhite}
                alt="Linkedin-icon"
                className="sm:w-[44px] sm:h-[42px] w-[35px] h-[35px]"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
