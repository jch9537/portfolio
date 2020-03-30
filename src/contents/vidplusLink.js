import React from "react";

import { IoLogoGithub } from "react-icons/io";
import { FaFilePowerpoint } from "react-icons/fa";

const VidPlusLink = () => {
  return (
    <div className="refer-box">
      <a
        className="project-link"
        href="https://github.com/codestates/vidplus-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
        <span className="icon-name">Client</span>
      </a>
      <a
        className="project-link"
        href="https://github.com/codestates/vidplus-server"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
        <span className="icon-name">Server</span>
      </a>
      <a
        className="project-link"
        href="https://slides.com/jch9537/vid"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFilePowerpoint />
        <span className="icon-name">Presentation</span>
      </a>
    </div>
  );
};

export default VidPlusLink;
