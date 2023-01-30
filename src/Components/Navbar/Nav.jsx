import {React, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav>
        <Link to={"/"} className="logo-link">
          <div className="logo">
            <div>
              <i className="fab fa-github"></i>
            </div>
            <div className="logo__text">
              <h3>Xplore</h3>
            </div> 
          </div>        
        </Link>

        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/repos"}>Repos</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
        </div>

        <div id="mobile" onClick={handleClick}>
          <i
            id="bar"
            className={clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    </>
  );
};

export default Nav;
