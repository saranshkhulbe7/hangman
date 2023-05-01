import "./styles/main.scss";

import Game from "./components/game/Game";
import React from "react";
import ReactDOM from "react-dom";

// All set to go
const App = () => {
  return (
    <>
      <Game />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
