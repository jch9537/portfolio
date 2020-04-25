import React from "react";

import About from "./about";
import Project from "./project";
import Author from "./author";
// import Contact from "../nav/contact";

const Contents = () => {
  return (
    <div className="contents-container">
      <About />
      <Project />
      <Author />
      {/* <footer className="mobile-contact">
        <Contact />
      </footer> */}
    </div>
  );
};

export default Contents;
