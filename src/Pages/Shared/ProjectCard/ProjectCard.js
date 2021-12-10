import React, { useEffect } from "react";
import "./ProjectCard.css";
import Fade from "react-reveal/Fade";

const ProjectCard = ({ projectDetails }) => {
  useEffect(() => {
    console.log(projectDetails);
  }, [projectDetails]);
  return (
    <Fade>
      <div className="projects-card-container">
        <a href={projectDetails.githubLink} target="_blank" rel="noreferrer">
          <Fade>
            <div className="projects-image-container">
              <img
                src={projectDetails.thumbnail}
                className="projects-image"
                alt={projectDetails.projectDescription}
              />
            </div>
          </Fade>
        </a>

        <div className="projects-details-container">
          <a href={projectDetails.githubLink} target="_blank" rel="noreferrer">
            <h1>{projectDetails.projectName}</h1>
          </a>
          <a href={projectDetails.githubLink} target="_blank" rel="noreferrer">
            <p>{projectDetails.projectDescription}</p>
          </a>
          <div className="projects-details-buttons">
            <a
              href={projectDetails.websiteLink}
              target="_blank"
              rel="noreferrer"
            >
              <button>
                <i className="fas fa-link"></i> Visit Site
              </button>
            </a>
            <a
              href={projectDetails.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <button className="view-details-button">
                <i className="fas fa-code-branch"></i> View Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectCard;
