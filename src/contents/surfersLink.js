import React from "react";

import { IoLogoGithub, IoLogoYoutube } from "react-icons/io";

const SurfersLink = () => {
  return (
    <div className="refer-box">
      <a
        className="project-link"
        href="https://github.com/codestates/chiMe-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
        <span className="icon-name">Client</span>
      </a>
      <a
        className="project-link"
        href="https://github.com/codestates/chiMe-server"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
        <span className="icon-name">Server</span>
      </a>
      <a
        className="project-link"
        href="https://www.youtube.com/watch?v=EimhUt2tAcI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoYoutube />
        <span className="icon-name">Demo</span>
      </a>
    </div>
  );
};

export default SurfersLink;
