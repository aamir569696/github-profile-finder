import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">⬡</div>
        GitFinder
      </div>
      <div className="nav-pill">

        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile"> Profile </NavLink>
        <NavLink to="/trending">Trending</NavLink>
        <NavLink to="/topics">Topics</NavLink>

      </div>
      <div>v2.4.1</div>
    </nav>
  );
};

export default Navbar;
