import React, { useState } from "react";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src={logo}
            alt="IEEE Logo"
            style={{
              width: "40%",
            }}
          />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-item">
            <a href="/" className="navbar-links" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-links" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/services"
              className="navbar-links"
              onClick={closeMobileMenu}
            >
              Our Team
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="/contact"
              className="navbar-links"
              onClick={closeMobileMenu}
            >
              Community
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
