import gameEngine from '../index.js';
import getRandom from '../utils.js';

// CONFIGURATION //
// Random integer counts.
const min = 1;
const max = 100;

// Game "Even"
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateData = () => {
  const question = getRandom(min, max);
  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';
  const result = [question, rightAnswer];
  return result;
};

const launchBrainEven = () => gameEngine(gameDescription, generateData);

export default launchBrainEven;
