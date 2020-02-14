import { gameEngine, getRandom, sample } from '../index.js';

// CONFIGURATION //
// Random integer counts.
const min = 1;
const max = 10;

// Game "Calculate"
const gameDescription = () => console.log('What is the result of the expression?".');

const generator = () => {
  const getRandomCount1 = getRandom(min, max);
  const getRandomCount2 = getRandom(min, max);
  const operator = ['+', '-', '*'];
  const getRandomOperator = sample(operator);

  const question = `${getRandomCount1} ${getRandomOperator} ${getRandomCount2}`;
  const rightAnswer = eval(question);

  const result = [question, rightAnswer];
  return result;
};

const calcGame = () => gameEngine(gameDescription, generator);

export default calcGame;
