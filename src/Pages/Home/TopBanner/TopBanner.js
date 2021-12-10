import React from "react";
import "./TopBanner.css";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";
import SocialIcons from "../../Shared/SocialIcons/SocialIcons";
// import { useEffect, useState } from "react/cjs/react.development";

const TopBanner = () => {
  // const [isPhoneView, setIsPhoneView] = useState(false);

  // useEffect(() => {
  //   setIsPhoneView(false);
  //   // if (document.innerWidth < 700) {
  //   //   setIsPhoneView(true);
  //   // } else {
  //   //   setIsPhoneView(false);
  //   // }
  // }, []);

  return (
    <div className="topbanner-container">
      <Fade>
        <div className="topbanner-title-container">
          <h1 className="topbanner-heading">Hi, I'm Nadif </h1>
          <div className="topbanner-subheading-container">
            {/* {isPhoneView && (
              <h1 className="topbanner-subheading-phone">
                &#60;{" "}
                <Typical
                  steps={["", 2500, `a Front-end Developer`, 5000]}
                  loop={1}
                  wrapper="span"
                />{" "}
                &#62;
              </h1>
            )} */}

            <h1 className="topbanner-subheading">
              &#60;{" "}
              <Typical
                steps={["", 2500, "a Front-end Web Developer", 5000]}
                loop={1}
                wrapper="span"
              />{" "}
              &#62;
            </h1>
          </div>
          <SocialIcons />
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
            {/* <div className="topbanner-next-section">
              <i className="fas fa-chevron-down"></i>
            </div> */}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default TopBanner;
