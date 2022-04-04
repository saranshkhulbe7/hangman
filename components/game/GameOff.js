import React from "react";
import Title from "./Title";

const GameOff = ({ setOn }) => {
  return (
    <div className="game-off">
      <Title />
      <button
        className="start-button"
        onClick={() => {
          setOn(true);
        }}
      >
        Start
      </button>
    </div>
  );
};

export default GameOff;
