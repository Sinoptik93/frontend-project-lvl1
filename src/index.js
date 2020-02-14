import readlineSync from 'readline-sync';

// Function to generate game random integer.
const getRandom = (minVal, maxVal) => Math.floor(Math.random() * maxVal) + minVal;
const sample = (array) => {
  const len = array == null ? 0 : array.length;
  return len ? array[Math.floor(Math.random() * len)] : undefined;
};

// How many answer required for the user win.
const answersToWin = 3;

// GAME ENGINE
const gameEngine = (gameDescription, generator) => {
  console.log('\nWelcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  gameDescription();

  for (let round = 0; round !== answersToWin; round += 1) {
    const condition = generator();
    const [question, rightAnswer] = condition;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer == rightAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`\n"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!\n`);
      return;
    }
  }
  console.log(`\nCongratulation, ${userName}!\n`);
};

export { gameEngine, getRandom, sample };
