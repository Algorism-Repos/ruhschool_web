import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Curriculum from "./Pages/Curriculum";
import Schoollife from "./Pages/Schoollife";
import Parentscorner from "./Pages/Parentscorner";
import Sports from "./Pages/Sports";

import Footer from "./Components/Footer"
import ComingSoon from "./Pages/ComingSoon";
import ScrollTop from "./Components/ScrollTop";
import Blogs from "./Pages/Blog"

function App() {


  
  return (
    <>
      <ScrollTop />
      <Routes>  
        <Route path = "*" element = {<Home />} />
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/life@RUH" element= {<Schoollife />} />
        <Route path = "/curriculum" element = {<Curriculum />} />
        <Route path = "/sports" element = {<Sports /> } />
        <Route path = "/parents-corner" element = {<Parentscorner />} />
        <Route path="/contact" element= {<Contact />} />
        <Route path= "/underconstruction" element = {<ComingSoon />}/>
        <Route path = "/blog/:id" element = {<Blogs />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
