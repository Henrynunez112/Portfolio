import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light roadieNav sticky-top">
      <NavLink className="navbar-brand" href="#" exact to="/">
        <span>Henry Nuñez</span>
      </NavLink>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link">About Me</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link">Projects</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link">Skills</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link">Contact Me</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
