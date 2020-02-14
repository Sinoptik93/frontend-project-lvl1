import { gameEngine, getRandom } from '../index.js';

// CONFIGURATION //
// Random integer counts.
const min = 1;
const max = 100;

// BRAIN EVEN game logic
const gameDescription = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const generator = () => {
  const question = getRandom(min, max);
  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';
  const result = [question, rightAnswer];
  return result;
};

const brainEven = () => gameEngine(gameDescription, generator);

export default brainEven;
