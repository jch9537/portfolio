import React from "react";

import VidPlus from "./vidplus";
import Surfers from "./surfers";

const Project = () => {
  return (
    <div id="project" className="main-contents">
      <h2 className="main-title">Project</h2>
      <div className="project-wrapper">
        <VidPlus />
        <Surfers />
      </div>
    </div>
  );
};

export default Project;
