import {React, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id !== "mobile" && event.target.id !== "bar") {
        setClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  const hideSidebar = () => {
    setClicked(false);
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
              <NavLink onClick={hideSidebar} to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink onClick={hideSidebar} to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink onClick={hideSidebar} to={"/Contact"}>Contact</NavLink>
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
