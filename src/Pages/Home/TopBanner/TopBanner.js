import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import "./TopBanner.css";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";

const TopBanner = () => {
  return (
    <div className="topbanner-container">
      <Navbar></Navbar>
      <Fade>
        <div className="topbanner-title-container">
          <h1 className="topbanner-heading">Hi, I'm Nadif </h1>
          <h1 className="topbanner-subheading">
            <Typical
              steps={["", 2500, "a Front-end Web Developer", 5000]}
              loop={1}
              wrapper="span"
            />
          </h1>
          <div className="topbanner-social-icons">
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
          <div className="topbanner-buttons">
            <a
              href="https://drive.google.com/file/d/1tWwOXsiA0JOEeGumT54gMdqT04je-Td6/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Fade>
                <button>View Resume</button>
              </Fade>
            </a>
            <div className="topbanner-next-section">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default TopBanner;
