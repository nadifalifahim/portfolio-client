import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { projectID } = useParams();
  const [projectDetails, setProjectDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${projectID}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectDetails(data);
      })
      .catch((err) => console.log(err));
  }, [projectID]);
  return (
    <div className="project-details-container">
      <h1 className="project-details-header">{projectDetails.projectName}</h1>
      <div className="project-details-image-container">
        <img
          src={projectDetails.thumbnail}
          alt={projectDetails.projectDetails}
        />
      </div>
      <p>{projectDetails.projectDetails}</p>
      <h2>Technologies</h2>
      <p>{projectDetails.technologies}</p>
      <h2>Project Description</h2>
      <p>{projectDetails.projectLink}</p>
      <a href={projectDetails.websiteLink} target="_blank" rel="noreferrer">
        <button>Visit Site</button>
      </a>
      <a href={projectDetails.githubLink} target="_blank" rel="noreferrer">
        <button>View Code</button>
      </a>
    </div>
  );
};

export default ProjectDetails;
