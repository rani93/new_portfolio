// import React from 'react';
import {useState } from 'react';
import './Navbar.css';
import iconImage from '../asserts/icon.png';
import underline from '../asserts/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import React, { useRef } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = ()=>{
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();
    const openMenu =()=>{
        menuRef.current.style.right ="0";
        
    }
    const closeMenu =()=>{
        menuRef.current.style.right ="-350px";
       
    }
    return(
        <>
        <div className='navbar'>
            <img src={iconImage} alt="loading" width="70vw"/>
            {/* <i class="fa-solid fa-bars nav-mob-open" onClick={openMenu}></i> */}
            <GiHamburgerMenu className='nav-mob-open' onClick={openMenu}/>

            <ul ref={menuRef} className='nav-menu'>
            {/* <i className='nav-mob-close' class="fa-solid fa-xmark" onClick={closeMenu}></i> */}
            
            <IoMdClose className='nav-mob-close' onClick={closeMenu}/>
            

                <li><AnchorLink className="anchor-link" href="#home" ><p onClick={()=>setMenu("home")}>Home</p></AnchorLink> {menu ==="home"? <img src={underline} alt=''width="50px" />: <></>} </li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>  {menu ==="about"?  <img src={underline} alt=''width="50px" />: <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink> {menu ==="services"?  <img src={underline} alt=''width="50px" />: <></>} </li>
                <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setMenu("work")}>work</p></AnchorLink>  {menu ==="work"?  <img src={underline} alt=''width="50px" />: <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink> {menu ==="contact"?  <img src={underline} alt=''width="50px" />: <></>} </li>
            </ul>
            <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">connect with me </AnchorLink></div>
            
        </div>

        </>
    )
}

export default Navbar;
