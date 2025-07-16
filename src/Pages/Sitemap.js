import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";

function Sitemap(){

    function scrollTop (){
        window.scrollTo (0,0);
    }


    return(
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto text-brown font-causten my-24 px-5 sm:px-9 lg:px-0">
                <h1 className="sm:text-7xl text-5xl font-bold">Site Map</h1>

                <p className="text-lg lg:text-xl mt-5 mb-7">Find detailed information on our Cambridge Primary Years Programme (PY), Cambridge Lower Secondary Programme (CLSP), IB Diploma Programme (IBDP), and IB Career-related Programme (IBCP). Learn more about our international curriculum, holistic learning approach, co-curricular activities, parent support resources, and admissions process.</p>

                <div className="flex flex-col gap-y-7 mt-20 ">

                    <div>
                        <h4 className="text-3xl font-bold">Home</h4>
                        <ul className="list-disc ml-3 md:ml-9">
                            <Link to="/home"><li className="text-lg font-light">Home</li></Link>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-3xl font-bold">About Us</h4>
                        <ul className="list-disc ml-3 md:ml-9">
                            <Link to="/about"><li className="text-lg font-light">About Us</li></Link>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-3xl font-bold">Contact Us</h4>
                        <ul className="list-disc ml-3 md:ml-9">
                            <Link to="/contact"><li className="text-lg font-light">Contact Us</li></Link>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-3xl font-bold">Life @ Ruh</h4>
                        <ul className="list-disc ml-3 md:ml-16">
                            <Link to="/life@RUH"><li className="text-lg font-light">School Life</li></Link>
                            <Link to="/sports"><li className="text-lg font-light">Sports & Co-curricular</li></Link>
                            <Link to="/parents-corner"><li className="text-lg font-light">Parents Corner</li></Link>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-3xl font-bold">Curriculum</h4>
                        <ul className="list-disc ml-3 md:ml-16">
                            <Link to="/quicklinks"><li className="text-lg font-light">Cambridge Primary Years (PY)</li></Link>
                            <Link to="/quicklinks"><li className="text-lg font-light">Cambridge Lower Secondary Programme (CLSP)</li></Link>
                            <Link to="/quicklinks"><li className="text-lg font-light">IB Diploma Programme (IBDP)</li></Link>
                            <Link to="/quicklinks"><li className="text-lg font-light">IB Career-related Programme (IBCP)</li></Link>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-3xl font-bold">Admissions</h4>
                        <ul className="list-disc ml-3 md:ml-16">
                            <Link to="/contact"><li className="text-lg font-light">Admission Process</li></Link>
                            <Link to="/contact"><li className="text-lg font-light">Admission Form</li></Link>
                            <Link to="/contact"><li className="text-lg font-light">Enquriy Form</li></Link>

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sitemap;