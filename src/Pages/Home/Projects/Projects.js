import React from "react";
import ProjectCard from "../../Shared/ProjectCard/ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-header">My Recent Works</h1>
      <div className="projects-content">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
