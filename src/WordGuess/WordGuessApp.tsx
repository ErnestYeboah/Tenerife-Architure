import { useEffect, useState } from "react";
import { characters, sampleWords } from "./wordGuessData";
import "./styles.css";

export default function WordGuessApp() {
  const [alphabets, setAlphabets] = useState(characters);
  const [sampleWordsData, setSampleWordsData] = useState(sampleWords);
  const [wordData, setWordData] = useState(renderGuessWord());
  const [chosenLetters, setChosenLetters] = useState<string[]>([]);
  const [wrongGuess, setWrongGuess] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWordFound, setIsWordFound] = useState(false);

  function renderGuessWord() {
    const random = Math.floor(Math.random() * sampleWordsData.length);
    const currentWord = sampleWordsData[random];
    return currentWord;
  }
  //currentWord
  const guessLetter = [...wordData.word];
  const hint = wordData.description;

  function handleLetterSelect(character: string) {
    const cpyChosenLetters = [...chosenLetters];
    if (!cpyChosenLetters.includes(character)) {
      cpyChosenLetters.push(character);
    }
    if (!guessLetter.includes(character)) {
      setWrongGuess((c) => c + 1);
    }
    setChosenLetters(cpyChosenLetters);
  }

  useEffect(() => {
    if (wrongGuess >= 3) {
      setIsGameOver(true);
    }
  }, [wrongGuess]);

  //For Correct Guess
  useEffect(() => {
    const isMatch = guessLetter.every((letter) =>
      chosenLetters.includes(letter)
    );

    if (isMatch) {
      setIsWordFound(true);
    }
  }, [guessLetter, chosenLetters]);

  function removeLetter() {
    setChosenLetters(chosenLetters.splice(1));
  }

  function restartGame() {
    setIsGameOver(false);
    setWordData(renderGuessWord());
    setChosenLetters([]);
    setWrongGuess(0);
    setIsWordFound(false);
  }

  function getHelp() {
    // const [a, , d] = guessLetter;
    // setChosenLetters((p) => [...p, a, d]);
    const hiddenLetterIndex = Math.floor(Math.random() * wordData.word.length);
    console.log(hiddenLetterIndex);

    setChosenLetters((p) => [...p, guessLetter[hiddenLetterIndex]]);
  }

  return (
    <div
      className={isGameOver ? "word__guess__app inactive" : "word__guess__app"}
    >
      <div className={isGameOver ? "modal active" : "modal"}>
        <h1>Game Over !</h1>
        <button onClick={restartGame}>Try Again</button>
      </div>

      <h1>WORD GUESS APP</h1>

      <div className="sample__words">
        {guessLetter.map((char, index) => {
          return (
            <h1 className="letter" key={index}>
              {chosenLetters.includes(char) ? char : ""}
            </h1>
          );
        })}
      </div>
      <h2>Hint : {hint}</h2>
      {isWordFound && (
        <p>
          You guess right , The correct word is{" "}
          <span style={{ color: "limegreen" }}>{wordData.word}</span>
        </p>
      )}

      <div className="btns">
        <button onClick={restartGame} data-role="restart">
          Restart
        </button>
        <button onClick={removeLetter} data-role="remove__letter">
          Remove Letter
        </button>
      </div>

      <div className="characters">
        {alphabets.map((char, index) => (
          <button
            className={chosenLetters.includes(char) ? " active" : ""}
            disabled={chosenLetters.includes(char)}
            onClick={() => handleLetterSelect(char)}
            key={index}
          >
            {char}
          </button>
        ))}
      </div>

      <button onClick={getHelp}>Hint</button>

      <p className="wrong__guess">
        Wrong Guess : <span style={{ color: "salmon" }}>{wrongGuess}</span>
      </p>
    </div>
  );
}
