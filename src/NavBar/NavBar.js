import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light portNav sticky-top">
      <NavLink className="navbar-brand" href="#" exact to="/">
        <span id="initials">H</span><span>enry</span> <span id="initials">N</span><span>uñez</span>
      </NavLink>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="nav navUl">
          <li className="nav-item">
            <NavLink className="nav-link aboutMe" exact to="/">
              About Me
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link projects" exact to="/projects">
              Projects
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link skills" exact to="/skills">
              Skills
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link contactButton" exact to="/contact">
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
