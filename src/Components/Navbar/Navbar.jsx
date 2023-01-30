import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";


const Navbarmenu = () => {
    const [isMobile, setIsMobile] = useState(false);


  return (
      <nav className="nav__bar">
        {/* <Link to={"/"} className="logo-link">
          <div className="logo">
            <div>
              <i className="fab fa-github"></i>
              </div>
            <div className="logo__text">
              <h3>Xplore</h3>
              </div> 
          </div>        
        </Link> */}

        <ul 
          className={ isMobile ? "nav__links__mobile" : "nav__links" }
          onClick={() => setIsMobile(false)}
          >
          <li>
            <NavLink className="home" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="repos" to={"/Repos"}>
              Repos
            </NavLink>
          </li>
          <li>
            <NavLink className="about" to={"/About"}>
              About
            </NavLink>
          </li>
        </ul>       
        <button className="mobile__menu__icon"
        onClick={() => setIsMobile(!isMobile)}
        >
          { isMobile ? ( 
            <i className="fas fa-times"></i>
            ) : ( 
              <i className="fas fa-bars"></i>
            )}
        </button>
      </nav>


  );
};
export default Navbarmenu;


