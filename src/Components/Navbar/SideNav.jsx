import React from 'react'
import { NavLink} from "react-router-dom";
import "./Navbar.css";

const SideNav = () => {
  return (
    <div className="nav_bar">
      <ul className="nav__mobile">
        <li>
          <NavLink className="link" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to={"/Repos"}>
            Repos
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to={"/About"}>
            About
          </NavLink>
        </li>
    
      </ul>

    </div>
  )
}

export default SideNav