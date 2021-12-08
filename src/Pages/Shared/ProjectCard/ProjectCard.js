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
        <div className="projects-details-buttons">
          <a
            href="https://ocular-optics.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <i className="fas fa-link"></i> Visit Site
            </button>
          </a>
          <a
            href="https://ocular-optics.web.app/"
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
  );
};

export default ProjectCard;
