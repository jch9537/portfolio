import React from "react";

import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { FaBlogger, FaAddressCard } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact">
      <div className="menu-link" href="#contact">
        Contact
      </div>
      <a
        className="project-link"
        href="https://app.enhancv.com/share/b8aa740d"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaAddressCard />
        <span className="icon-name">Resume</span>
      </a>
      <a
        className="project-link"
        href="https://github.com/jch9537"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
        <span className="icon-name">Github</span>
      </a>
      <a
        className="project-link"
        href="https://velog.io/@jch9537"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBlogger />
        <span className="icon-name">Blog</span>
      </a>
      <a
        className="project-link"
        href="mailto:jch9537@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoMdMail />
        <span className="icon-name">Send Mail</span>
      </a>
      <div className="project-link">
        <MdPhoneAndroid />
        <span className=" icon-name">010.9017.9537</span>
      </div>
    </div>
  );
};

export default Contact;
