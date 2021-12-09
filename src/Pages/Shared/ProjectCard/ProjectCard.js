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
        <a href={projectDetails.websiteLink} target="_blank" rel="noreferrer">
          <div className="projects-image-container">
            <Fade>
              <img src={projectDetails.thumbnail} alt="Ocular Optics" />
            </Fade>
          </div>
        </a>
        <div className="projects-details-container">
          <h1>{projectDetails.projectName}</h1>
          <p>{projectDetails.projectDescription}</p>
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
              <button>
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
