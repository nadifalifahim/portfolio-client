import React, { useEffect } from "react";
import "./ProjectCard.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const ProjectCard = ({ projectDetails }) => {
  useEffect(() => {
    console.log(projectDetails);
  }, [projectDetails]);
  return (
    <Fade>
      <div className="projects-card-container">
        <Link to={`/projects/${projectDetails._id}`}>
          <Fade>
            <div className="projects-image-container">
              <img
                src={projectDetails.thumbnail}
                className="projects-image"
                alt={projectDetails.projectDescription}
              />
            </div>
          </Fade>
        </Link>

        <div className="projects-details-container">
          <Link to={`/projects/${projectDetails._id}`}>
            <h1>{projectDetails.projectName}</h1>
          </Link>
          <Link to={`/projects/${projectDetails._id}`}>
            <p>{projectDetails.projectDescription}</p>
          </Link>
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
            <Link to={`/projects/${projectDetails._id}`}>
              <button className="view-details-button">
                <i className="fas fa-angle-double-right"></i> View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectCard;
