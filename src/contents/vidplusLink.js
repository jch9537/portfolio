import React from "react";

import { IoLogoGithub } from "react-icons/io";
import { FaFilePowerpoint } from "react-icons/fa";

const VidPlusLink = () => {
  return (
    <div className="refer-box">
      <a
        className="project-link"
        href="https://github.com/jch9537/public-vidplus-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
        <span className="refer-name">Client</span>
      </a>
      <a
        className="project-link"
        href="https://github.com/jch9537/public-vidplus-server"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
        <span className="refer-name">Server</span>
      </a>
      <a
        className="project-link"
        href="https://slides.com/jch9537/vid"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFilePowerpoint />
        <span className="refer-name">Presentation</span>
      </a>
    </div>
  );
};

export default VidPlusLink;
