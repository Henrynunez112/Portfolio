import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light portNav sticky-top">
      <NavLink className="navbar-brand" href="#" exact to="/">
        <span id="initials">H</span>
        <span id="restInny">enry</span> <span id="initials">N</span>
        <span id="restInny">uñez</span>
      </NavLink>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="nav navUl">
          <li className="nav-item">
            <NavLink
              activeStyle={{
                color: "#E22A8E",
              }}
              className="nav-link aboutMe"
              exact
              to="/"
            >
              About Me
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeStyle={{
                color: "#E22A8E",
              }}
              className="nav-link projects"
              exact
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeStyle={{
                color: "#E22A8E",
              }}
              className="nav-link skills"
              exact
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink id="contact" className="nav-link contactButton" exact to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
