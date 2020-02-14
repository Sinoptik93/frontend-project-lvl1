import { gameEngine, getRandom } from '../index.js';

// CONFIGURATION //
// Random integer counts.
const min = 2;
const max = 10;

// Game "Progression"
const gameDescription = () => console.log('What number is missing in the progression?');

const generator = () => {
  const countOfProgression = getRandom(min, max);
  const replacedChar = getRandom(0, 9);

  let progression = [];
  let acc = 0;
  let rightAnswer = 0;

  for (let i = 0; i !== 9; i += 1) {
    if (i === replacedChar) {
      acc += countOfProgression;
      progression.push('..');
      rightAnswer = `${acc}`;
    } else progression.push(acc += countOfProgression);
  }
  const question = `${progression}`;

  const result = [question, rightAnswer];
  return result;
};

const brainProgression = () => gameEngine(gameDescription, generator);

export default brainProgression;
