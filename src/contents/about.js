import React from "react";

import MyImg from "../asset/profile.png";
import AboutDescription from "./aboutDescription";
import MyStack from "./mystack";

const About = () => {
  return (
    <div className="main-contents">
      <h2 className="main-title">About</h2>
      <div className="about-wrapper">
        <div className="contents-box">
          <h3 className="about-title">About Me</h3>
          <div className="about-box">
            <img className="myimage" src={MyImg} alt="" />
            <AboutDescription />
          </div>
        </div>
        <div className="contents-box">
          <h3 className="about-title">Technique</h3>
          <div className="stack-box">
            <MyStack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
