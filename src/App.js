import React from "react";
import './App.css';
import Navbar from "./Components/inc/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import {Route, Routes } from "react-router-dom";
import Footer from './Components/inc/Footer';
// import Practice from './Practice';

// import Navbar from './Navbar';

const App = () => {
  return (
    <>
    {/* <Navbar /> */}

    {/* <Practice /> */}
       <Navbar />
    <Routes>
    <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes> 
    <Footer />   
      
    </>
    
  );
}
export default App;
