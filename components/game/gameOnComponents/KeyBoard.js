import React, { useState } from "react";

const KeyBoard = ({
  guessedLetters,
  setGuessedLetters,
  gameover,
  wordSet,
  setLives,
  word,
}) => {
  const ALPHA_ROW_1 = "QWERTYUIOP";
  const ALPHA_ROW_2 = "ASDFGHJKL";
  const ALPHA_ROW_3 = "ZXCVBNM";

  function intersectionSize(set1, set2) {
    return new Set([...set1].filter((x) => set2.has(x))).size;
  }
  function isSet1SubsetOfSet2(set1, set2) {
    for (let x of set1) {
      if (!set2.has(x)) {
        return false;
      }
    }
    return true;
  }

  const [hint, setHint] = useState(generateHint());

  function generateHint() {
    return (
      <div className="hint-area">
        {word.split("").map((letter, index) => {
          if (letter === " ") {
            return <span>&nbsp;&nbsp;&nbsp;</span>;
          } else if (guessedLetters.has(letter)) {
            return <span>&nbsp;{letter}&nbsp;</span>;
          } else {
            return <span>&nbsp;_&nbsp;</span>;
          }
        })}
      </div>
    );
  }

  function createrow(ALPHA) {
    return (
      <div className="keyboard-keys">
        <div className="upper-row">
          {ALPHA.split("").map((letter, index) => {
            if (guessedLetters.has(letter)) {
              return (
                <button className="keyboard-keys-button-disabled">
                  {letter}
                </button>
              );
            } else {
              return (
                <button
                  className="keyboard-keys-button"
                  onClick={() => {
                    updateGuessedLetters(letter);
                    setHint(generateHint());
                  }}
                >
                  {letter}
                </button>
              );
            }
          })}
        </div>
      </div>
    );
  }
  function keyboardCreation() {
    return (
      <div className="keyboard-keys">
        {createrow(ALPHA_ROW_1)}
        {createrow(ALPHA_ROW_2)}
        {createrow(ALPHA_ROW_3)}
      </div>
    );
  }

  function updateGuessedLetters(letter) {
    setGuessedLetters(guessedLetters.add(letter));
    setCurrentKeyboard(keyboardCreation());
    let newLives =
      6 - (guessedLetters.size - intersectionSize(wordSet, guessedLetters));
    setLives(newLives);
    console.log(wordSet);
    console.log(guessedLetters);
    if (newLives < 1) {
      gameover(newLives);
    } else if (isSet1SubsetOfSet2(wordSet, guessedLetters)) {
      gameover(newLives);
    }
    // console.log(guessedLetters);
  }
  const [currentKeyboard, setCurrentKeyboard] = useState(keyboardCreation());

  return (
    <div className="keyboard-wrapper">
      {hint}
      {currentKeyboard}
    </div>
  );
};

export default KeyBoard;
