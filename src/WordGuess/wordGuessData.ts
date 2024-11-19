class SampleWords {
  constructor(public word: string, public description: string) {}
}

const firstGuess = new SampleWords("HELLO", "A common greeting to say hi");
const secondGuess = new SampleWords(
  "EARTH",
  "The Planet we live on which is full of land and water."
);
const thirdGuess = new SampleWords(
  "JAVASCRIPT",
  "A popular programming language for building interactive wbsites and provides behavior to applications."
);
const fourthGuess = new SampleWords(
  "REACT",
  "A javascript library in which we have written this project code."
);

const fifthGuess = new SampleWords("CLOCK", "An object which shows the time ");
const sixthGuess = new SampleWords(
  "WATER",
  "Without it no human can survive on this Earth"
);

export const sampleWords: SampleWords[] = [
  firstGuess,
  secondGuess,
  thirdGuess,
  fourthGuess,
  fifthGuess,
  sixthGuess,
];

export const characters = [
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
