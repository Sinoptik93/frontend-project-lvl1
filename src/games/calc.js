import gameEngine from '../index.js';
import getRandom from '../utils.js';

// CONFIGURATION //
// Random integer counts.
const min = 1;
const max = 10;

// Game "Calculate"
const gameDescription = 'What is the result of the expression?".';

// Function to get sample from array.
const sample = (array) => {
  const startNum = 0.1;
  const lastNum = 0.9;
  const len = array == null ? 0 : array.length;
  return len ? array[Math.floor(getRandom(startNum, lastNum) * len)] : undefined;
};

const operators = ['+', '-', '*'];

const generateData = () => {
  const randomCount1 = getRandom(min, max);
  const randomCount2 = getRandom(min, max);
  const randomOperator = sample(operators);

  const question = `${randomCount1} ${randomOperator} ${randomCount2}`;
  let rightAnswer;

  switch (randomOperator) {
    case '+':
      rightAnswer = (randomCount1 + randomCount2).toString();
      break;
    case '-':
      rightAnswer = (randomCount1 - randomCount2).toString();
      break;
    case '*':
      rightAnswer = (randomCount1 * randomCount2).toString();
      break;
    default:
      break;
  }

  const result = [question, rightAnswer];
  return result;
};

const launchCalcGame = () => gameEngine(gameDescription, generateData);

export default launchCalcGame;
