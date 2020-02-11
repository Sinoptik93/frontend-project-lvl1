import readlineSync from 'readline-sync';
import greetings from '../index.js';

greetings();

// Configuration
const min = 1;
const max = 100;
const roundToWins = 3;

// Function to generate random integer
const getRandom = (min, max) => Math.floor(Math.random() * max) + min;

// BRAIN-EVEN game logic
const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result = 0;

  for (let i = 0; i !== roundToWins; i += 1) {
    const question = getRandom(min, max);
    const rightAnswer = (question % 2 === 0)? 'yes' : 'no';
    
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      result += 1;
      console.log('Correct!\n');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, $userName!\n`);
      return;
    }

    if (result === roundToWins) {
      return console.log(`Congratulation, $userName!`);
    }
  }
};

export default brainEven;
