import React from "react";

import Menu from "./menu";
import Contact from "./contact";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="menu">
        <div className="menu-title">
          <a className="title-link" href="https://jch9537.github.io/portfolio">
            Portfolio
          </a>
          <Menu />
        </div>
        <div className="pc-contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Nav;
