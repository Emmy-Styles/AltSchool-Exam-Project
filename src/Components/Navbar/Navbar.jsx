import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import SideNav  from "./SideNav"


const Navbarmenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }


  return (
    <>
    <div className="navbar">
      <nav className="nav__list">
        <Link to={"/"}>
          <i className="fab fa-github"></i>
        </Link>
        <ul className="nav__links">
          <li>
            <NavLink className="links" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to={"/Repos"}>
              Repos
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to={"/About"}>
              About
            </NavLink>
          </li>
        </ul>
        <button onClick={toggleMenu} className="toggle_menu">
        {isOpen ? <AiOutlineClose /> : <HiMenu />}
      </button>
      {isOpen ? <SideNav /> : null}
        
        {/* <button className="toggle_menu" id="toggleMenu">
          <i className="fas fa-bars" id="active_menu"></i>
        </button> */}
      </nav>
    </div>
    
    </>


  );
};

export default Navbarmenu;


