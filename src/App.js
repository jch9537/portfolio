import React from "react";
import "./style/style.css";

import Nav from "./nav/nav";
import Contents from "./contents/contents";

function App() {
  return (
    <div id="container">
      <Nav />
      <Contents />
    </div>
  );
}

export default App;
