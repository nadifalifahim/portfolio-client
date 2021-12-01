import React from "react";
import BarLoader from "react-spinners/BarLoader";
// import PuffLoader from "react-spinners/PuffLoader";
// import ClipLoader from "react-spinners/ClipLoader";
// import BounceLoader from "react-spinners/BounceLoader";
// import PropagateLoader from "react-spinners/PropagateLoader";
import "./Loader.css";

const LoadingSpinner = () => {
  return (
    <div className="loader">
      <h1>n</h1>
      <BarLoader color={"#fff"} loading={true} size={450} />
      {/* <PuffLoader color={"#fff"} loading={true} size={450} /> */}
      {/* <ClipLoader color={"#fff"} loading={true} size={50} /> */}
      {/* <BounceLoader color={"#fff"} loading={true} size={50} /> */}
      {/* <PropagateLoader color={"#fff"} loading={true} /> */}
    </div>
  );
};

export default LoadingSpinner;
