import React from "react";
import { Link } from "react-router-dom";
import "./PageNorFound.css";
import Fade from "react-reveal/Fade";

const Blog = () => {
  return (
    <div className="pagenotfound-container">
      <Fade>
        <div className="pagenotfound-image-container">
          <Fade>
            <img
              src="/Images/PageNotFound/PageNotFound.png"
              alt="Page Not Found"
            />
          </Fade>
        </div>
        <h2> Blog </h2>
        <h3> Coming Soon </h3>
        <Link to="/">
          <button>Return to home page</button>
        </Link>
      </Fade>
    </div>
  );
};

export default Blog;
