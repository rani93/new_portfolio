import React from 'react';
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';

function App() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Services/>
    <MyWork/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
