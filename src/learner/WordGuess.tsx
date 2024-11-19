import "./styles.css";
import { useEffect, useState } from "react";
import { sampleWords } from "../WordGuess/wordGuessData";

const charactersData = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function WordGuess() {
  const [sampleWord, setSampleWord] = useState(sampleWords);
  const [wordData, setWordData] = useState(getCurrentWord());
  const [characters, setCharacters] = useState(charactersData);
  const [chosenLetters, setChosenLetters] = useState<string[]>([]);
  const [hasGuessRight, setHasGuessRight] = useState(false);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  //render random Word Guess
  function getCurrentWord() {
    const random = Math.floor(Math.random() * sampleWord.length);
    const currentGuess = sampleWord[random];
    return currentGuess;
  }

  //Hint
  const hintEl = wordData.description;

  useEffect(() => {
    if (isGameOver) {
      restartGame();
    }

    if (wrongGuesses >= 3) {
      setIsGameOver(true);
      window.alert("Too many errors ");
    }
  }, [isGameOver, wrongGuesses]);

  function handleCharacterSelected(character: string) {
    if (!hasGuessRight) {
      const cpyLetters = [...chosenLetters];
      if (!cpyLetters.includes(character)) {
        cpyLetters.push(character);
        setChosenLetters(cpyLetters);
      }
      if (!wordData.word.includes(character)) {
        setWrongGuesses((c) => c + 1);
      }
    }
  }

  function restartGame() {
    setWordData(getCurrentWord());
    setHasGuessRight(false);
    setChosenLetters([]);
    setIsGameOver(false);
    setWrongGuesses(0);
  }

  useEffect(() => {
    console.log(chosenLetters);
    const isMatched = wordData.word
      .split("")
      .every((letter) => chosenLetters.includes(letter));

    if (isMatched) {
      setHasGuessRight(true);
      restartGame();
    }
  }, [chosenLetters, wordData]);

  return (
    <div className="word__guess-game">
      <h2>WORD GUESS GAME</h2>

      <div className="sampleword">
        {Array.from(wordData.word).map((letter, index) => (
          <h1 key={index}>{chosenLetters.includes(letter) ? letter : ""}</h1>
        ))}
      </div>
      <h2>
        <span style={{ color: "midnightblue" }}>Hint</span> : {hintEl}
      </h2>
      {hasGuessRight && (
        <p>
          You guess right , The correct word is{" "}
          <span style={{ color: "limegreen" }}>{wordData.word}</span>
        </p>
      )}

      <div className="btns">
        <button data-role="restart" onClick={restartGame}>
          Restart
        </button>
        <button data-role="remove__letter">Remove A Letter</button>
      </div>

      <div className="characters">
        {characters.map((letter, index) => (
          <button
            onClick={() => handleCharacterSelected(letter)}
            disabled={chosenLetters.includes(letter)}
            key={index}
            className={chosenLetters.includes(letter) ? "active" : ""}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}
