import React from "react";

import About from "./about";
import Project from "./project";
import Footer from "./footer";
import Contact from "../nav/contact";

const Contents = () => {
  return (
    <div>
      <About />
      <Project />
      <Footer />
      <footer className="mobile-contact">
        <Contact />
      </footer>
    </div>
  );
};

export default Contents;
