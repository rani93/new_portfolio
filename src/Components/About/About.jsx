import React from "react";
import './About.css';
import theme from '../../asserts/theme.png';
import photo from '../../asserts/profilephoto.jpg';
  const About =()=>{
    return (
        <div className="about" id="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme} alt ="loading" width="60%"/>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={photo} alt=""/>

                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                        I'm Rani Singh, a passionate front-end developer with a strong interest in building responsive and user-friendly web applications. 
                        </p>
                        <p>
                        I’m currently pursuing B.Tech in Computer Science and have hands-on experience with React.js, Java, and DSA. I love solving coding challenges and creating seamless user experiences.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS </p>
                            <hr style={{width:"95%"}}/>95%
                        </div>
                        <div className="about-skill">
                            <p>JavaScript </p>
                            <hr style={{width:"75%"}}/>75%
                        </div>
                        <div className="about-skill">
                            <p>React.js </p>
                            <hr style={{width:"70%"}}/>70%
                        </div>
                        <div className="about-skill">
                            <p>Java </p>
                            <hr style={{width:"70%"}}/>80%
                        </div>
                        <div className="about-skill">
                            <p>SpringBoot </p>
                            <hr style={{width:"60%"}}/>60%
                        </div>
                        <div className="about-skill">
                            <p>C/C++ </p>
                            <hr style={{width:"50%"}}/>60%
                        </div>
                    </div>
                    

                </div>
                
            </div>
            <div className="about-achievements">
                    <div className="about-achievement">
                        <h1> 2+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr/>
                    <div className="about-achievement">
                        <h1> 4+</h1>
                        <p>Projects Completed</p>
                    </div>
                   
                    
                    </div>


        </div>
    )
  }
  export default About;