import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-text">
          <p>Copyright © Nadif Ali Fahim 2021</p>
        </div>
        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com/nadifalifahim"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.github.com/nadifalifahim"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nadifalifahim"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
