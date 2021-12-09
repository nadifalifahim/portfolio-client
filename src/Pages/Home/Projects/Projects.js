import React, { useEffect, useState } from "react";
import ProjectCard from "../../Shared/ProjectCard/ProjectCard";
import ProjectLoader from "./ProjectLoader/ProjectLoader";
import "./Projects.css";

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState([]);
  const [runLoader, setRunLoader] = useState(false);

  useEffect(() => {
    setRunLoader(true);
    fetch("https://nadifalifahim.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjectDetails(data);
        console.log(projectDetails);
        setRunLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [projectDetails]);

  return (
    <div className="projects-container">
      <h1 className="projects-header">My Recent Works</h1>
      <div className="projects-content-container">
        {runLoader ? (
          <ProjectLoader />
        ) : (
          <div className="projects-content">
            {projectDetails.map((projects) => {
              return (
                <ProjectCard id={projects._id} projectDetails={projects} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
