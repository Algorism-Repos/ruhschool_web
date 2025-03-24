import {React, useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"
import banner_line from "../assets/images/home/banner_line.png"
import AOS from "aos"
import "aos/dist/aos.css"

import insta_icon_offwhite from "../assets/images/insta-icon-offwhite.png"
import linkedin_icon_offwhite from "../assets/images/linkedin-icon-offwhite.png"
import facebook_icon_offwhite from "../assets/images/facebook-icon-offwhite.png"
import ruhlogo_offwhite from "../assets/images/ruhlogo_offwhite.png"
import close_icon from "../assets/images/close-icon.png"
import {motion, useScroll, useTransform, AnimatePresence} from "framer-motion";

import boyimage from "../assets/images/form_boy.png"

function Contact (){

  const [navMenu, setNavMenu] = useState(false);

  useEffect(() => {
    AOS.init({duration:1500})
  }, [])

  const navigate = useNavigate();
  const initialValues = {
    parent_name: "",
    learner_name: "",
    email : "",
    phone: "",
    grade: "",
    message: "",
  }

  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});

  const handleChange = (e) =>{
    const {name, value} = e.target; 

    setformValues ({...formValues, [name]:value})
    console.log(formValues);
  }

  const validate = (values) => {
    const errors = {};
    const regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;     

    if(!values.parent_name){
      errors.parent_name = "Please enter the parent's name"
    }

    if(!values.learner_name){
      errors.learner_name = "Please enter the student's name"
    }

    if(!values.email){
      errors.email = "Please enter your email-ID"
    }
    if(!values.phone){
      errors.phone = "Please enter your phone number"
    } if(values.phone.length != 10){
      errors.phone = "Please enter a valid phone number"
    }
    if(!values.grade){
      errors.grade = "Please select your grade"
    }

    return errors;
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setformErrors(validate(formValues));
    
    if(Object.keys(validate(formValues)).length === 0){
      handleGoogleSheet(formValues)
      alert("Your form has been successfully submitted!")
      navigate ("/home");
      setformValues(initialValues);
    }
    

  }

  const handleGoogleSheet = (formValues) => {
     console.log("formValues from google sheets",formValues)
        fetch(
        "https://script.google.com/macros/s/AKfycbyM7qvdDxVa8KPFXTohc4tnGpv4f0oi5gzs6eaEfxMenBi26qaf1bmwur2v6XS0aLNWYQ/exec",
        {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: new URLSearchParams(formValues),
        }
         )
        .then((res) => res.text(console.log("response", res)))
        .then((data) => {
        console.log("data", data);
        })
        .catch((error) => {
        console.log("error", error);
        });
    };

  return(
    <>
      <Navbar />

        <div className = "max-w-screen-xl mx-auto w-full my-9 sm:my-20 sm:px-24 px-5" >
          <div className = "flex flex-col gap-y-14 items-center sm:gap-y-0 sm:flex-row sm:items-start justify-between">
            <div className = "relative mt-9"> 
              <h1 className="font-causten font-bold text-[24px] sm:text-[42px] leading-[26px] sm:leading-[45px] text-brown  w-[190px] sm:w-[350px] text-center ">Let's make learning personal</h1>
              <h1 className = "font-aelyn text-[24px] leading-[19px] sm:text-[40px] sm:leading-[51px] text-green text-center font-semibold z-5 mt-2">for your Ruh'ler</h1>
              <img src = {banner_line} alt="banner-line" className = "w-[207px] h-[9px] sm:w-[348px] sm:h-[17px] absolute  z-2" />
            </div>

            <form className = "w-full sm:w-fit" onSubmit = {handleSubmit}>
                <h1 className = "font-causten font-bold text-[24px] sm:text-[36px] text-green text-center uppercase mb-12 leading-[24px]">Contact Form</h1>

              <div className = "flex flex-col gap-y-5 ">
                <div className = "grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5 sm:gap-y-0 items-center justify-between ">

                    <div>
                      <h5 className= "form-label">Parents Name</h5>
                      <input 
                        type = "text"
                        className = {!formErrors.parent_name ? "form-field" : "form-field-error"}
                        placeholder = "Parent's Name"
                        name = "parent_name"
                        value = {formValues.parent_name}
                        onChange = {handleChange}
                      />
                      <p className = "form-error">{formErrors.parent_name}</p>
                    </div>

                    <div>
                      <h5 className= "form-label">Learner's Name</h5>
                      <input 
                        type = "text"
                        className = {!formErrors.learner_name ? "form-field" : "form-field-error"}
                        placeholder = "Learner's Name"
                        name = "learner_name"
                        value = {formValues.learner_name}
                        onChange= {handleChange}
                      />
                      <p className = "form-error">{formErrors.learner_name}</p>
                    </div>

                  </div>

                    <div>
                      <h5 className="form-label">Email</h5>
                      <input 
                        type = "email"
                        placeholder = "you@example.com"
                        className = {!formErrors.email ? "form-field" : "form-field-error"}
                        name = "email"
                        value = {formValues.email}
                        onChange = {handleChange}
                      />
                      <p className = "form-error">{formErrors.email}</p>
                    </div>
                    
                    <div>
                      <h5 className="form-label">Phone Number</h5>
                      <input 
                      type = "tel"
                      placeholder = "0987654321"
                      className = {!formErrors.phone ? "form-field" : "form-field-error"}
                      name = "phone"
                      value = {formValues.phone}
                      onChange = {handleChange}
                      />
                      <p className = "form-error">{formErrors.phone}</p>
                    </div>

                    <div>
                      <h5 className = "form-label">Grade</h5>
                      <select 
                        className = {!formErrors.grade ? "form-field select" : "form-field-error"}
                        name = "grade"
                        onChange = {handleChange}
                      >
                        <option disabled selected>-Please select your grade</option>
                        <option value="G1">G1</option>
                        <option value="G2">G2</option>
                        <option value="G3">G3</option>
                        <option value="G4">G4</option>
                        <option value="G5">G5</option>
                      </select>
                      <p className = "form-error">{formErrors.grade}</p>
                    </div>
                    

                    <div>
                      <h5 className = "form-label">Message</h5>
                      <textarea
                        rows= "4"
                        className = {!formErrors.message ? "form-field-textarea" : "form-field-error"} 
                        placeholder = "Leave us a message..."  
                        name = "message"
                        value = {formValues.message}
                        onChange = {handleChange}         
                      ></textarea>

                      <p className = "form-error">{formErrors.message}</p>
                    </div>

              </div>
              <button type = "submit" className = "bg-brown sm:w-[480px] w-full sm:h-[72px] h-[60px] text-center font-causten text-white text-[24px] font-bold leading-[24px] rounded-[16px] mt-7">Submit</button>
            </form>
          </div>
        </div>

        {/* Admission Open - Big Screeen */}
        <motion.div
           initial = {{opacity: 0, y: 150}} whileInView={{opacity: 1, y:0, threshold: 0.99}} transition={{duration: 1, ease: "easeOut"}}
           className = "bg-brown h-[243px] mt-48 w-full hidden sm:block"
        >
          <div className=" flex  max-w-screen-xl mx-auto relative ">
            <img src = {boyimage} alt="boy-image" className = "w-[595px] h-[716px] sm:absolute sm:left-0 sm:top-[-472px]" />

            <div className = "sm:absolute sm:right-20 sm:top-20">
              <h1 className = "font-causten font-bold text-[36px] leading-[24px] uppercase text-offwhite text-center ">Admissions open for 2025- 26</h1>
              <h4 className = "font-causten font-normal text-[48px] leading-[36px] text-offwhite mt-7 text-center">+91 73958 05531</h4>
            </div>
          </div>
        </motion.div>

        {/* Admission Open - Small Screens */}
        <div className = "bg-brown w-full p-12 sm:hidden block ">
          <h1 className = "font-causten font-bold text-[32px] text-offwhite leading-[44px] text-center uppercase ">Admissions Open for 2025-26</h1>
          <h4 className = "font-causten font-normal text-[36px] text-offwhite leading-[36px] text-center mt-5 ">+91 73958 05531</h4>
        </div>
        <img src = {boyimage} alt="boy-image" className = "mb-5 sm:hidden block bg-brown" />
        


         {/* Menu Pop-up */}
         <div className={navMenu === false ? "hidden" : "w-screen h-screen bg-green fixed left-0 top-0 z-10 overflow-hidden"}>
                <div className="max-w-screen-xl mx-auto sm:p-20 px-9 py-7">
                    <div className="flex flex-row items-start justify-between">
                        <img src={ruhlogo_offwhite} alt="ruhlogo-offwhite" className="sm:w-[208px] sm:h-[135px] w-[152px] h-[98px]" />
                        <img src={close_icon} alt="close-icon" className="sm:w-[72px] w-[32px] h-[32px] sm:h-[72px]  cursor-pointer" onClick = {() => {setNavMenu(false)}}/>
                    </div>
                    
                    <div className="flex flex-col gap-y-12 sm:flex-row sm:gap-x-36 text-offwhite mt-20">
                        <div className="flex flex-col gap-y-3">
                            <Link to = "/underconstruction"><h5 className="font-causten font-bold text-[36px] sm:text-[48px] leading-[20px] uppercase">Home</h5></Link>

                            <a href= "https://www.ruhprimary.in/aboutus" ><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer mt-3">about us</p></a>
                            <a href= "https://www.ruhprimary.in/curriculum" ><p className="font-causten font-extralight text-[24px] leading-[24px]cursor-pointer">curriculum</p></a>
                            <Link to ="/contact"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">contact us</p></Link>
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <Link to = "/underconstruction"><h5 className="font-causten font-bold text-[36px] sm:text-[48px] leading-[20px] uppercase">Life @ RUH</h5></Link>

                            <a href = "https://www.ruhprimary.in/schoollife"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer mt-3">school life</p></a>
                            <a href = "https://www.ruhprimary.in/sports-cocurricular"><p className="font-causten font-extralight text-[24px] leading-[24px]cursor-pointer">sports & co-curricular</p></a>
                            <a href = "https://www.ruhprimary.in/parentscorner"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">parent's corner</p></a>
                            <Link to = "/underconstruction"><p className="font-causten font-extralight text-[24px] leading-[24px] cursor-pointer">publications</p></Link>
                        </div>
                    </div>

                    <hr className="border-t-2 border-offwhite w-full sm:mt-20 mt-12" />

                    <h6 className="font-causten sm:text-[24px] text-[16px] leading-[24px] sm:leading-[38px] w-[276px] sm:w-full font-light text-offwhite mt-5">50, Dhamu Nagar, Puliakulam Coimbatore, Tamil Nadu 641018</h6>
                    <h6 className="font-causten text-[24px] leading-[38px] font-semibold text-offwhite mt-3">+91 73958 05531</h6>

                    <div className="flex flex-row items-center gap-x-7 mt-3 sm:mt-9">
                        <a href="https://www.google.com" target="_blank"><img src={insta_icon_offwhite} alt="Instagram-icon" className="sm:w-[44px] sm:h-[42px] w-[35px] h-[35px]" /></a>
                        <a href="https://www.google.com" target="_blank"><img src={facebook_icon_offwhite} alt="Facebook-icon" className="sm:w-[44px] sm:h-[42px] w-[35px] h-[35px]" /></a>
                        <a href="https://www.google.com" target="_blank"><img src={linkedin_icon_offwhite} alt="Linkedin-icon" className="sm:w-[44px] sm:h-[42px] w-[35px] h-[35px]" /></a>
                    </div>
                </div>
            </div>

    </>
  )
}


export default Contact;