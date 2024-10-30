import React from "react";
import "./Hero.css";
import profileImage from "../../asserts/profilephoto.jpg"
import resume from '../../asserts/Resume.pdf';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from '../../asserts/profilephoto.jpg';
const Hero =()=>{
    return(
        <>
        <div className="hero" id="home">
            <img src={profileImage} alt="MYImage" width ="15%" />
            <h1><span>Hi, I am Rani Singh, </span>A front-end developer</h1>
            <p> A B.Tech student in Computer Science and Engineering at Ajay Kumar Garg Engineering College. I have a strong passion for full-stack web development, with proficiency in Java, React.js, and Data Structures and Algorithms (DSA).</p>
            <div className="hero-action"> 
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact"> Connect with me</AnchorLink></div>
                <div className="hero-resume"><a
            href={resume}
            
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security measure when using target="_blank"
            download="Rani_Singh_Resume.pdf" // Optional: Forces download
          >My Resume</a></div>

            </div>

        </div>
        </>
    )
}
export default Hero;
