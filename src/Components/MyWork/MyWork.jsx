import React from "react";
import './MyWork.css';
import theme from '../../asserts/theme.png';
import MyWork_Data from "../../asserts/MyWorkData";

const MyWork =()=>{
    return(
        <div className="mywork" id="work">

         <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme} alt="" width="60%"/>
         </div>
         <div className="mywork-container">
            {
                MyWork_Data.map((work, index)=>{
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