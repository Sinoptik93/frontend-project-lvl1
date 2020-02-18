import gameEngine from '../index.js';
import { getRandom } from '../utils.js';

// CONFIGURATION //
// Random integer counts.
const min = 2;
const max = 10;
const progressionLength = 10;

// Game "Progression"
const gameDescription = 'What number is missing in the progression?';

const generateData = () => {
  const startNumber = getRandom(min, max);
  const countOfProgression = getRandom(min, max);
  const replacedChar = getRandom(0, 9);

  let progression = '';
  let rightAnswer = 0;

  for (let step = 0; step !== progressionLength; step += 1) { //Fixed

    const currentChar = startNumber + countOfProgression * step;

    if (replacedChar === step) {
      progression += ' ..';
      rightAnswer += currentChar;
    } else {
      progression += (` ${currentChar}`);
    }
  }
  const question = progression.toString();

  const result = [question, rightAnswer];
  return result;
};

const brainProgression = () => gameEngine(gameDescription, generateData);

export default brainProgression;
