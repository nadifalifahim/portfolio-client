import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="about-container">
      <Fade>
        <h1 className="about-header">About</h1>
        <div className="about-content">
          <Fade>
            <a
              href="https://www.linkedin.com/in/nadifalifahim"
              target="_blank"
              rel="noreferrer"
            >
              <div className="about-image-container">
                <img
                  src="/Images/About/NadifAliFahim.jpg"
                  alt="Nadif Ali Fahim"
                />
              </div>
            </a>
          </Fade>
          <div className="about-details">
            <p>Hello, I am Nadif Ali Fahim</p>
            <p>
              A frontend web developer and a tech enthusiast, aiming to build a
              career in the software industry.
            </p>
            <p>
              Although coming from a business background with a major in
              marketing, I currently work with web development tools and
              frameworks due to a passion for coding. I specialize in Front-end
              technologies such as HTML5, CSS3, JavaScript, React, Bootstrap,
              Material UI, Sass, and have experience working with Back-end
              technologies like Node.js, Express, and MongoDB. I also have
              experience working on 3 mobile game projects in C# and Unity. And
              last, but not least, I know how to google.
            </p>
            <p>
              Currently, I'm looking for an opportunity as a web developer that
              would enable me to use my skills and abilities to solve real-world
              problems.
            </p>
            <div className="about-social-icons">
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
      </Fade>
    </div>
  );
};

export default About;
