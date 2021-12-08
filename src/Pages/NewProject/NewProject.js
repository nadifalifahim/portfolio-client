import React, { useRef } from "react";
import "./NewProject.css";

const NewProject = () => {
  const form = useRef();
  const handleFormSubmit = (e) => {
    const projectName = form.current[0].value;
    const projectDescription = form.current[1].value;
    const technologies = form.current[2].value;
    const thumbnail = form.current[3].value;
    const websiteLink = form.current[4].value;
    const githubLink = form.current[5].value;
    const projectLink = form.current[6].value;

    const newProjectDetails = {
      projectName,
      projectDescription,
      technologies,
      thumbnail,
      websiteLink,
      githubLink,
      projectLink,
    };

    fetch("http://localhost:5000/project", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProjectDetails),
    })
      .then(e.target.reset())
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  };
  return (
    <div>
      <div className="new-project-container">
        <div className="new-project-content">
          <p className="new-project-heading">New Project</p>
          <div className="new-project-items-container">
            <div className="new-project-form-container">
              <form ref={form} onSubmit={handleFormSubmit}>
                <div className="project-name-container">
                  <div className="new-project-form-content">
                    <label>Project Name</label>
                    <input type="text" name="name" />
                  </div>

                  <div className="new-project-form-content">
                    <label>Project Description</label>
                    <input type="text" name="text" />
                  </div>
                  <div className="new-project-form-content">
                    <label>Technologies</label>
                    <input type="text" name="text" />
                  </div>
                </div>
                <div className="new-project-form-content">
                  <label>Thumbnail Link</label>
                  <input type="text" name="name" />
                </div>
                <div className="new-project-form-content">
                  <label>Website Link</label>
                  <input type="text" name="name" />
                </div>
                <div className="new-project-form-content">
                  <label>Github Link</label>
                  <input type="text" name="name" />
                </div>
                <div className="new-project-form-content">
                  <label>Project Details</label>
                  <textarea name="message" className="form-text-area" />
                </div>
                <button type="submit" className="form-submit-button">
                  Add Project
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
