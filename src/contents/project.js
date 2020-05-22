import React from "react";

import VidPlus from "./vidplus";
import Surfers from "./surfers";
import Crawler from "./crawler";

const Project = () => {
  return (
    <div id="project" className="main-contents">
      <h2 className="main-title">Project</h2>
      <div className="project-wrapper">
        <VidPlus />
        <Surfers />
        <Crawler />
      </div>
    </div>
  );
};

export default Project;
