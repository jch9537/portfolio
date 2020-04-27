import React from "react";

import SurfersImg from "../asset/surfers.png";

import SurfersLink from "./surfersLink";
import SurfersStack from "./surfersStack";

const Surfers = () => {
  return (
    <div className="project-item">
      <div className="project-header">
        <h3 className="project-title">Surfers</h3>
      </div>
      <div className="project-body">
        <img className="project-img" src={SurfersImg} alt="" />
        <div className="description">
          <div className="description-detail">
            Surfer들을 위한 커뮤니티 앱 어플리케이션
            <br />
            날씨를 확인하여 커뮤니티 Room 개설
            <br />
            참여자 간의 채팅 기능
            <SurfersLink />
          </div>
          <div className="description-detail">
            <p className="myrole">
              <b>My Role</b>
            </p>
            Front-end 담당 (TypeScript, React-Native)
            <br />
            기획/디자인 참여
            <br />
            주최자가 참여자를 모으는 방 만들기 페이지 구현
            <br />
            날씨 API를 사용하여 모임 날짜의 날씨 확인 기능
            <br />
            사용자 정보변경 페이지 구현
          </div>
        </div>
      </div>
      <SurfersStack />
    </div>
  );
};

export default Surfers;
