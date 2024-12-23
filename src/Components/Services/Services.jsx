import React from "react";
import './Services.css';
import theme from '../../asserts/theme.png';
import Services_Data from "../../asserts/servicesData";
// import arrow_icon from 
import { FaArrowRight } from "react-icons/fa";


const Services =()=>{
    return(
        
        <div className="services" id="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme} alt="" width="60%"></img>
            </div>
            <div className="services-container">
                {
                    Services_Data.map((service, index)=>{
                       
                       return(
                    
                        <div className="service-formate" key={index}>
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="services-readmore">
                                <p>Read More <FaArrowRight className="arrow-icon"/></p>
                                {/* <i class="fa-solid fa-arrow-right"></i> */}
                                

                            </div>
                        </div>
                        
                       )

                    })
                }

            </div>


        </div>
        
    )
}
export default Services;