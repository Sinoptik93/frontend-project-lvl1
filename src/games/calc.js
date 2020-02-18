import gameEngine from '../index.js';
import { getRandom, sample } from '../utils.js';

// CONFIGURATION //
// Random integer counts.
const min = 1;
const max = 10;

// Game "Calculate"
const gameDescription = 'What is the result of the expression?".';

const operators = ['+', '-', '*'];

const generateData = () => {
  const getRandomCount1 = getRandom(min, max);
  const getRandomCount2 = getRandom(min, max);
  const getRandomOperator = sample(operators);

  const question = `${getRandomCount1} ${getRandomOperator} ${getRandomCount2}`;
  let rightAnswer;

  if (getRandomOperator === '+') {
    rightAnswer = getRandomCount1 + getRandomCount2;
  } else if (getRandomOperator === '-') {
    rightAnswer = getRandomCount1 - getRandomCount2;
  } else {
    rightAnswer = getRandomCount1 * getRandomCount2;
  }

  const result = [question, rightAnswer];
  return result;
};

const calcGame = () => gameEngine(gameDescription, generateData);

export default calcGame;
