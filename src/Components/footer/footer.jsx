// import React, { useState } from 'react';
import './footer.css';
import footer_logo from '../../asserts/icon.png'
const Footer =()=>{
   
    return(
        <div className='footer'>
            <div className="footer-top">
                <div className="top-left">
                    <img src={footer_logo} alt="" width="70px" />
                    <p>I'm a font-end developer from, USA with 2+ year of experience</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                    <i class="fa-regular fa-user"></i>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'> copyright 2024 Rani Singh. All right reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of services</p>
                    <p>Privacy Policy</p>
                    <p>connect with me</p>

                </div>
            </div>
        </div>
    )


}
export default Footer;