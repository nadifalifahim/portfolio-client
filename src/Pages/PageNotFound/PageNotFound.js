import React from "react";
import { Link } from "react-router-dom";
import "./PageNorFound.css";
import Fade from "react-reveal/Fade";

const PageNotFound = () => {
  return (
    <div className="pagenotfound-container">
      <Fade>
        <img src="/Images/PageNotFound/PageNotFound.png" alt="Page Not Found" />
        <h2> Error 404 </h2>
        <h3> Page Not Found </h3>
        <Link to="/home">
          <button>Return to Home</button>
        </Link>
      </Fade>
    </div>
  );
};

export default PageNotFound;
