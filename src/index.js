import readlineSync from 'readline-sync';

// Function to generate game random integer.
const getRandom = (minVal, maxVal) => Math.floor(Math.random() * maxVal) + minVal;

// Function of greeting user.

// How many answer required for the user win.
const answersToWin = 3;

// GAME ENGINE
const gameEngine = (gameDescription, question, rightAnswer) => {
  console.log('\nWelcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  gameDescription();

  for (let round = 0; round !== answersToWin; i += 1) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!\n`);
      return;
    }

    if (round === answersToWin) {
      console.log(`\nCongratulation, ${userName}!\n`);
    }
  }

};

export default gameEngine;
export { getRandom };
