import React from "react";

import Menu from "./menu";
import Contact from "./contact";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="menu">
        <div className="menu-title">
          <a className="title-link" href="/">
            Portfolio
          </a>
          <Menu />
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Nav;
