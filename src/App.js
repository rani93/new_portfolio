import React from 'react';
// import NavBar from "./Components/Navbar";
import Navbar from './Components/nav/nav';
import Hero from "./Components/Hero/Hero";
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <NavBar/> */}
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <BrowserRouter>
    <MyWork/>
    </BrowserRouter>
    
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
