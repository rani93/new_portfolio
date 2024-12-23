import { useState, useRef } from 'react';
import './nav.css';
import iconImage from '../../asserts/icon.png';
import underline from '../../asserts/underline.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close
    const menuRef = useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
    };

    const closeMenu = () => {
        setIsMenuOpen(false); // Ensure the menu closes
    };

    return (
        <div className='navbar'>
            <img src={iconImage} alt="loading" width="70vw" />

            {/* Show hamburger menu only when menu is closed */}
            {!isMenuOpen && (
                <GiHamburgerMenu className='nav-mob-open' onClick={toggleMenu} />
            )}

            <ul
                ref={menuRef}
                className={`nav-menu ${isMenuOpen ? "active" : ""}`}
            >
                {/* Show close icon only when menu is open */}
                {isMenuOpen && (
                    <IoMdClose className='nav-mob-close' onClick={closeMenu} />
                )}

                <li>
                    <AnchorLink className="anchor-link" href="#home">
                        <p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p>
                    </AnchorLink>
                    {menu === "home" ? <img src={underline} alt='' width="50px" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#about">
                        <p onClick={() => { setMenu("about"); closeMenu(); }}>About me</p>
                    </AnchorLink>
                    {menu === "about" ? <img src={underline} alt='' width="50px" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#services">
                        <p onClick={() => { setMenu("services"); closeMenu(); }}>Services</p>
                    </AnchorLink>
                    {menu === "services" ? <img src={underline} alt='' width="50px" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#work">
                        <p onClick={() => { setMenu("work"); closeMenu(); }}>Work</p>
                    </AnchorLink>
                    {menu === "work" ? <img src={underline} alt='' width="50px" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#contact">
                        <p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p>
                    </AnchorLink>
                    {menu === "contact" ? <img src={underline} alt='' width="50px" /> : <></>}
                </li>
            </ul>

            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact">
                    Connect with me
                </AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;
