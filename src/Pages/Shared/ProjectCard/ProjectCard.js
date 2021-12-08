import React from "react";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="projects-card-container">
      <div className="projects-image-container">
        <img src="/Images/Projects/1.jpg" alt="Ocular Optics" />
      </div>
      <div className="projects-details-container">
        <h1>Ocular Optics</h1>
        <p>OPTICAL ACCESSORIES SELLING WEBSITE</p>
      </div>
    </div>
  );
};

export default ProjectCard;
