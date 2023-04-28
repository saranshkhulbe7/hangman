import "./styles/main.scss";

import Game from "./components/game/Game";
import React from "react";
import ReactDOM from "react-dom";

// Test

// Test 2
const App = () => {
  return (
    <>
      <Game />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
