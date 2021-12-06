import React from "react";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
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
  );
};

export default SocialIcons;
