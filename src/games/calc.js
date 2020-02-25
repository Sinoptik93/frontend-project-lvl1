import gameEngine from '../index.js';
import getRandom from '../utils.js';

// CONFIGURATION //
// Random integer counts.
const min = 1;
const max = 10;

// Game "Calculate"
const gameDescription = 'What is the result of the expression?".';

const operators = ['+', '-', '*'];

const generateData = () => {
  const randomCount1 = getRandom(min, max);
  const randomCount2 = getRandom(min, max);
  const randomOperator = operators[getRandom(0, 2)];

  const question = `${randomCount1} ${randomOperator} ${randomCount2}`;
  let rightAnswer;

  switch (randomOperator) {
    case '+':
      rightAnswer = randomCount1 + randomCount2;
      break;
    case '-':
      rightAnswer = randomCount1 - randomCount2;
      break;
    case '*':
      rightAnswer = randomCount1 * randomCount2;
      break;
    default:
      break;
  }

  const result = [question, rightAnswer.toString()];
  return result;
};

const launchCalcGame = () => gameEngine(gameDescription, generateData);

export default launchCalcGame;
