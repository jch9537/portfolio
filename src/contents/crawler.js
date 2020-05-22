import React from "react";

import CrawlerImg from "../asset/crawler.png";

import CrawlerLink from "./crawlerLink";
import CrawlerStack from "./crawlerStack";

const Crawler = () => {
  return (
    <div className="project-item">
      <div className="project-header">
        <h3 className="project-title">Crawler</h3>
      </div>
      <div className="project-body">
        <img className="project-img" src={CrawlerImg} alt="" />
        <div className="description">
          <div className="description-detail">
            웹스크래핑 어플리케이션
            <br />
            주민번호 유효성 확인
            <br />
            네이버 실시간 검색어 웹 스크래핑
            <CrawlerLink />
          </div>
          <div className="description-detail">
            <p className="myrole">
              <b>My Role</b>
            </p>
            과제용 개인 프로젝트 : 전체 작업 (Javascript, Node.js)
            <br />
            주민번호 유효성 확인 함수 작성
            <br />
            axios, cheerio를 사용한 웹 크롤링
            <br />
            grid를 사용하여 반응형 웹 구현
          </div>
        </div>
      </div>
      <CrawlerStack />
    </div>
  );
};

export default Crawler;
