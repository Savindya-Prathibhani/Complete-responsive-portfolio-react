import React, { useState, useRef, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-250px";
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowMenuIcon(false);
    } else {
      setShowMenuIcon(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <img src="P2.png" alt="logo" className="nav-logo" />
      {showMenuIcon && (
        <img
          src={menu_open}
          onClick={openMenu}
          alt="menu open"
          className="nav-mob-open"
        />
      )}
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="menu close"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
        
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#techstack">
            <p onClick={() => setMenu("techstack")}>Tech Stack</p>
          </AnchorLink>
         
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>
          
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#education">
            <p onClick={() => setMenu("education")}>Education</p>
          </AnchorLink>
        
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
         
        </li>
        
      </ul>
      <div className="nav-connect">
        <a className="anchor-link"  href="/cv.pdf" download="Savindya_cv.pdf">
          Download Resume
        </a>
        
      </div>
    </div>
  );
};

export default Navbar;
