import React, { useState } from "react";
import GameOff from "./GameOff";
import GameOn from "./GameOn";

const Game = () => {
  const [on, setOn] = useState(true); //determining if the game is on or off

  return (
    <div className="hangman-wrapper">
      {on && <GameOn setOn={setOn} />}
      {!on && <GameOff setOn={setOn} />}
    </div>
  );
};

export default Game;
