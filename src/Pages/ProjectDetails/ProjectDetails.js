import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { projectID } = useParams();
  const [projectDetails, setProjectDetails] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch(`https://nadifalifahim.herokuapp.com/projects/${projectID}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectDetails(data);
      })
      .catch((err) => console.log(err));
  }, [projectID]);

  useEffect(() => {
    if (projectDetails.technologies) {
      setTechnologies(projectDetails.technologies.split(", "));
    }
  }, [projectDetails]);

  return (
    <div className="project-details-container">
      <div className="project-details-content">
        <div className="project-details-image-container">
          <img
            src={projectDetails.thumbnail}
            alt={projectDetails.projectDetails}
          />
        </div>
        <div>
          <h1 className="project-details-header">
            {projectDetails.projectName}
          </h1>
          <p>{projectDetails.projectDetails}</p>
          <h2>Technologies</h2>
          <div className="technologies-container">
            {technologies.map((items) => {
              return <p key={items}>{items}</p>;
            })}
          </div>
          <h2>Project Description</h2>
          <p>{projectDetails.projectLink}</p>
          <div className="projects-details-buttons-container">
            <a
              href={projectDetails.websiteLink}
              target="_blank"
              rel="noreferrer"
            >
              <button>Visit Site</button>
            </a>
            <a
              href={projectDetails.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <button>View Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
