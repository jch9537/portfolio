import React from "react";

import JavascriptImg from "../asset/javascript.png";
import ReactImg from "../asset/react.png";
import NodeImg from "../asset/node.png";
import MysqlImg from "../asset/mysql.png";

const MyStack = () => {
  return (
    <div className="stack-img-box">
      <img className="stack-img" src={JavascriptImg} alt="" />
      <img className="stack-img" src={ReactImg} alt="" />
      <img className="stack-img" src={NodeImg} alt="" />
      <img className="stack-img" src={MysqlImg} alt="" />
    </div>
  );
};

export default MyStack;
