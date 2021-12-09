import React, { useEffect } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ projectDetails }) => {
  useEffect(() => {
    console.log(projectDetails);
  }, [projectDetails]);
  return (
    <div className="projects-card-container">
      <div className="projects-image-container">
        <img src={projectDetails.thumbnail} alt="Ocular Optics" />
      </div>
      <div className="projects-details-container">
        <h1>{projectDetails.projectName}</h1>
        <p>{projectDetails.projectDescription}</p>
        <div className="projects-details-buttons">
          <a href={projectDetails.websiteLink} target="_blank" rel="noreferrer">
            <button>
              <i className="fas fa-link"></i> Visit Site
            </button>
          </a>
          <a href={projectDetails.githubLink} target="_blank" rel="noreferrer">
            <button>
              <i className="fas fa-code-branch"></i> View Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
