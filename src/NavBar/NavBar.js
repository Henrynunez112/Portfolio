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
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav justify-content-end">
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
          <li className="nav-item">
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
          <li className="nav-item">
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
          <li className="nav-item ">
            <NavLink
              id="contact"
              className="nav-link contactButton"
              exact
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
