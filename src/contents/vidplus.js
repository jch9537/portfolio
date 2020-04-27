import React from "react";

import VidPlusImg from "../asset/vidplus.png";

import VidPlusStack from "./vidplusStack";
import VidPlusLink from "./vidplusLink";

const VidPlus = () => {
  return (
    <div className="project-item">
      <div className="project-header">
        <h3 className="project-title">Vid+</h3>
      </div>
      <div className="project-body">
        <img className="project-img" src={VidPlusImg} alt="" />
        <div className="description">
          <div className="description-detail">
            동영상을 보며 노트를 작성 할 수 있는 웹 어플리케이션
            <br />
            TimeStamp를 지정해 노트작성
            <br />
            GoogleDocs와 연동
            <VidPlusLink />
          </div>
          <div className="description-detail">
            <p className="myrole">
              <b>My Role</b>
            </p>
            Back-end 담당 (Node.js, express, MySQL)
            <br />
            User의 data 가공, 처리를 위한 logic 구현
            <br />
            NodeMailer를 사용하여 임시비번 발송
            <br />
            session과 crypto를 이용한 사용자 보안
          </div>
        </div>
      </div>
      <VidPlusStack />
    </div>
  );
};

export default VidPlus;
