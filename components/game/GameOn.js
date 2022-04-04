import React, { useState } from "react";
import HangmanDraw from "./gameOnComponents/HangmanDraw";
import Lives from "./gameOnComponents/Lives";
import KeyBoard from "./gameOnComponents/KeyBoard";
import { wordPool } from "../../wordpool";
import Title from "./Title";

const GameOn = ({ setOn }) => {
  const [lives, setLives] = useState(6);
  const [word, setWord] = useState(getWord());
  const [wordSet, setWordSet] = useState(getWordSet(word));
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [result, setResult] = useState(getResult("Won !!"));
  const [resultOn, setResultOn] = useState(false);

  function getWord() {
    return wordPool[Math.floor(Math.random() * wordPool.length)].toUpperCase();
  }
  function getResult(res) {
    return (
      <div className="result">
        <h1>
          You <b>{res}</b>
        </h1>
        <h2>
          The word was <b className="answer">{word}</b>
        </h2>
      </div>
    );
  }

  function getWordSet() {
    let X = new Set();
    let a = "A".codePointAt(0);
    let z = "Z".codePointAt(0);
    for (let i = 0; i < word.length; i++) {
      let C = word[i];
      let c = C.codePointAt(0);
      if (c >= a && c <= z) {
        X.add(C);
      }
    }
    return X;
  }

  function resetValues() {
    setWord("ANOTHER");
    setGuessedLetters(new Set());
    setTimeout(() => {
      setOn(false);
      setResultOn(false);
      setLives(6);
    }, 5000);
  }
  function gameover(lives) {
    if (lives > 1) {
      setResult(getResult("Won !!"));
    } else {
      setResult(getResult("Lost !!"));
    }
    setResultOn(true);
    resetValues();
  }

  return (
    <>
      <div className="game-on-container">
        <div className="drawing-area">
          <HangmanDraw lives={lives} />
        </div>
        {resultOn && result}
        {!resultOn && (
          <div className="play-area">
            <div className="title-in-game">
              <Title />
            </div>
            <Lives lives={lives} />
            <KeyBoard
              guessedLetters={guessedLetters}
              setGuessedLetters={setGuessedLetters}
              gameover={gameover}
              wordSet={wordSet}
              setLives={setLives}
              lives={lives}
              word={word}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default GameOn;
