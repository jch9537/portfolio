import React from "react";

import { IoLogoGithub, IoLogoYoutube } from "react-icons/io";

const SurfersLink = () => {
  return (
    <div className="refer-box">
      <a
        className="project-link"
        href="https://github.com/jch9537/public-surfers-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
        <span className="refer-name">Client</span>
      </a>
      <a
        className="project-link"
        href="https://github.com/jch9537/public-surfers-server"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
        <span className="refer-name">Server</span>
      </a>
      <a
        className="project-link"
        href="https://youtu.be/EimhUt2tAcI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoYoutube />
        <span className="refer-name">Demo</span>
      </a>
    </div>
  );
};

export default SurfersLink;
