import React from "react";
import "./style/style.css";

import Nav from "./nav/nav";
import Contents from "./contents/contents";
import Contact from "./nav/contact";

function App() {
  return (
    <div id="container">
      <header>
        <Nav />
      </header>
      <main>
        <Contents />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
