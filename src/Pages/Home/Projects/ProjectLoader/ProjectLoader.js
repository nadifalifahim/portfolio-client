import React from "react";
import "./ProjectLoader.css";
import BarLoader from "react-spinners/BarLoader";
// import PuffLoader from "react-spinners/PuffLoader";
// import ClipLoader from "react-spinners/ClipLoader";
// import PropagateLoader from "react-spinners/PropagateLoader";

const ProjectLoader = () => {
  return (
    <div className="project-loader">
      <p>n</p>
      <BarLoader color={"#fff"} loading={true} size={450} width={120} />
      {/* <PuffLoader color={"#fff"} loading={true} size={250} /> */}

      {/* <ClipLoader color={"#fff"} loading={true} size={50} /> */}
      {/* <PropagateLoader color={"#fff"} loading={true} /> */}
    </div>
  );
};

export default ProjectLoader;
