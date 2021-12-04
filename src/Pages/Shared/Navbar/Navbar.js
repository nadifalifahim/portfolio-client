import React from "react";
import "./Navbar.css";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Fade>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
                to="/home"
              >
                <i className="fas fa-home"></i>
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
                to="/projects"
              >
                <i className="fas fa-tasks"></i>
                <p>Projects</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
                to="/about"
              >
                <i className="fas fa-coffee"></i>
                <p>About</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
                to="/contact"
              >
                <i className="fas fa-envelope"></i>
                <p>Contact</p>
              </NavLink>
            </li>
          </ul>
        </Fade>
      </nav>
    </div>
  );
};

export default Navbar;
