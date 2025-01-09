import React from "react";
import './MyWork.css';
import theme from '../../asserts/theme.png';
import { FullStackWork, BackendWork, FrontendWork} from "../../asserts/MyWorkData";
import { Link } from 'react-router-dom';

const MyWork =()=>{
    return(
        <div className="mywork" id="work">

         <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme} alt="" width="60%"/>
         </div>
         <p className="work-section">FullStack</p>
         <div className="mywork-container">
            {
                FullStackWork.map((work, index)=>{
                    return (
                        <div key={index} className="work">
                            <div className="work-title">
                            <h2>{work.w_no}</h2>
                            <h2>{work.w_name}</h2>
                            </div>
                            
                            <img src={work.w_img} alt="" srcset="" width="100%"/>
                            <hr />
                            <p>{work.w_tech}</p>
                            <hr />
                            <p>About :- <br/> {work.w_about}</p>
                            <hr />
                            <Link className="work-link" to={work.w_link} target="_blank" style={{  }}>View Project</Link>
                        </div>                      
                    )
                })
            }
         </div>
            <p className="work-section">Backend</p>
            <div className="mywork-container">
            {
                BackendWork.map((work, index)=>{
                    return (
                        <div key={index} className="work">
                            <div className="work-title">
                            <h2>{work.w_no}</h2>
                            <h2>{work.w_name}</h2>
                            </div>
                            
                            <img src={work.w_img} alt="" srcset="" width="100%"/>
                            <hr />
                            <p>{work.w_tech}</p>
                            <hr />
                            <p>About :- <br/> {work.w_about}</p>
                            <hr />
                            <Link className="work-link" to={work.w_link} target="_blank">View Project</Link>

                        </div>                      
                    )
                })
            }
         </div>
            <p className="work-section">Frontend</p>
            <div className="mywork-container">
            {
                FrontendWork.map((work, index)=>{
                    return (
                        <div key={index} className="work">
                            <div className="work-title">
                            <h2>{work.w_no}</h2>
                            <h2>{work.w_name}</h2>
                            </div>
                            
                            <img src={work.w_img} alt="" srcset="" width="100%"/>
                            <hr />
                            <p>{work.w_tech}</p>
                            <hr />
                            <p>About :- <br/> {work.w_about}</p>
                            <hr />
                            <Link className="work-link" to={work.w_link} target="_blank">View Project</Link>



                        </div>                      
                    )
                })
            }
         </div>
          
         
         <div className="mywork-showmore">
            <p>Show More</p>
            <i class="fa-solid fa-arrow-right"></i>
         </div>
        </div>

    )
}
export default MyWork;