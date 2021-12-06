import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Contact from "../Contact/Contact";
import TopBanner from "../TopBanner/TopBanner";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../../PageNotFound/PageNotFound";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<TopBanner />} />
        <Route exact path="/home" element={<TopBanner />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Navbar></Navbar>
    </div>
  );
};

export default Home;
