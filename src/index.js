import readlineSync from 'readline-sync';

// How many answer required for the user win.
const answersToWin = 3;

// GAME ENGINE
const gameEngine = (gameDescription, generateData) => {
  // Starting and greeting of the game.
  console.log('\nWelcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  // Incomming game description from /src/games/*gameDataFile.js.
  console.log(gameDescription);

  for (let round = 0; round !== answersToWin; round += 1) {
    // Game conditions generation (question/answer) from /src/games/*gameDataFile.js.
    const condition = generateData();
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

export default gameEngine;
