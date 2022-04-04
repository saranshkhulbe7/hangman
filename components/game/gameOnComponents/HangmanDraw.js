import React from "react";

const HangmanDraw = ({ lives }) => {
  return (
    <div className="hangman-container">
      <div className="pole"></div>
      {lives !== 0 && (
        <div className={`hangman hangman-${6 - lives}`}>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
        </div>
      )}
      {lives === 0 && (
        <div className={`deadhangman hangman-${6 - lives}`}>
          <div className="deadhangman__element"></div>
          <div className="deadhangman__element"></div>
          <div className="deadhangman__element"></div>
          <div className="deadhangman__element"></div>
          <div className="deadhangman__element"></div>
          <div className="deadhangman__element"></div>
        </div>
      )}
    </div>
  );
};
export default HangmanDraw;
