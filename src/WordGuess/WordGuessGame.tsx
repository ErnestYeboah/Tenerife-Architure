/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./styles.css";
import { characters, sampleWords } from "./wordGuessData";

const MAX_HINT = 3;
const WRONG_GUESS_ATTEMPT = 5;
export default function WordGuessGame() {
  const [wordData, setWordData] = useState(renderGuessWord());
  const [alphabets] = useState(characters);
  const [chosenLetters, setChosenLetters] = useState<string[]>([]);
  const [scores, setScores] = useState(0);
  const [wrongGuess, setWrongGuess] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWordFound, setIsWordFound] = useState(false);
  const [hintCount, setHintCount] = useState(MAX_HINT);

  const guessLetter = [...wordData.word];
  const hint = wordData.description;

  function renderGuessWord() {
    const random = Math.floor(Math.random() * sampleWords.length);
    const currentWord = sampleWords[random];
    return currentWord;
  }

  function handleLetterSelect(letter: string) {
    const cpyChosenLetters = [...chosenLetters];
    if (!chosenLetters.includes(letter)) {
      cpyChosenLetters.push(letter);
    }
    if (!guessLetter.includes(letter)) {
      setWrongGuess((w) => w + 1);
    }

    setChosenLetters(cpyChosenLetters);
  }

  useEffect(() => {
    if (wrongGuess >= WRONG_GUESS_ATTEMPT) {
      setIsGameOver(true);
    }
  }, [wrongGuess]);

  function restartGame() {
    setIsGameOver(false);
    setChosenLetters([]);
    setScores(0);
    setWrongGuess(0);
    setWordData(renderGuessWord());
  }

  function removeLetter() {
    setChosenLetters(chosenLetters.splice(1));
  }

  //To check the correct guess
  useEffect(() => {
    const isMatched = guessLetter.every((letter) =>
      chosenLetters.includes(letter)
    );

    if (isMatched) {
      setIsWordFound(true);
    }
  }, [chosenLetters, guessLetter]);

  //render next  Guess to find
  function nextWord() {
    setWordData(renderGuessWord());
    setScores((s) => s + 1);
    setChosenLetters([]);
    setIsWordFound(false);
  }

  function getHelp() {
    setHintCount((h) => (h === 0 ? 0 : h - 1));

    if (hintCount > 0) {
      const random = Math.floor(Math.random() * wordData.word.length);
      setChosenLetters((c) => [...c, guessLetter[random]]);
    }
  }

  return (
    <div className="word__guess__app">
      <h1>WORD GUESS GAME</h1>

      <div className={isGameOver ? "modal active" : "modal"}>
        <h1>Game Over!</h1>
        <button onClick={restartGame}>Try Again</button>
      </div>

      <div className="sample__words">
        {guessLetter.map((letter, index) => (
          <h1 key={index}>{chosenLetters.includes(letter) ? letter : ""}</h1>
        ))}
      </div>
      <p>
        <span style={{ color: "midnightblue" }}>HINT</span> : {hint}
      </p>
      <p className={isWordFound ? "true__statement active" : "true__statement"}>
        You guess right , The correct word is{" "}
        <span style={{ color: "limegreen" }}>{wordData.word}</span>
      </p>

      <div className="btns">
        <button
          onClick={isWordFound ? nextWord : restartGame}
          data-role="restart"
        >
          {isWordFound ? "Next" : "Restart"}
        </button>
        <button onClick={removeLetter} data-role="remove__letter">
          Remove Letter
        </button>
      </div>

      <div className="characters">
        {alphabets.map((letter, index) => (
          <button
            className={chosenLetters.includes(letter) ? "active" : ""}
            disabled={chosenLetters.includes(letter)}
            onClick={() => handleLetterSelect(letter)}
            key={index}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="follow__ups">
        <button onClick={getHelp}>Hint : {hintCount}</button>

        <div>
          <h2>
            Scores : <span style={{ color: "limegreen" }}>{scores}</span>
          </h2>
          <h2>
            Wrong Guess : <span style={{ color: "salmon" }}> {wrongGuess}</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}
