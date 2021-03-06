import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Contact from "../Contact/Contact";
import TopBanner from "../TopBanner/TopBanner";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../../PageNotFound/PageNotFound";
import Projects from "../Projects/Projects";
import NewProject from "../../NewProject/NewProject";
import About from "../../About/About";
import ProjectDetails from "../../ProjectDetails/ProjectDetails";
import Blog from "../../Blog/Blog";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<TopBanner />} />
        <Route exact path="/home" element={<TopBanner />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/projects/:projectID" element={<ProjectDetails />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/new-project" element={<NewProject />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Navbar></Navbar>
    </div>
  );
};

export default Home;
