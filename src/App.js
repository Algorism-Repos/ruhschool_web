import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"

import Footer from "./Components/Footer"
import ComingSoon from "./Pages/ComingSoon";
import ScrollTop from "./Components/ScrollTop";

function App() {


  
  return (
    <>
      <ScrollTop />
      <Routes>  
        <Route path = "*" element = {<Home />} />
        <Route path = "/" element = {<Home />} />
        <Route path="/contact" element= {<Contact />} />
        <Route path= "/underconstruction" element = {<ComingSoon />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
