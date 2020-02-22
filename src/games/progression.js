import gameEngine from '../index.js';
import getRandom from '../utils.js';

// CONFIGURATION //
// Random integer counts.
const min = 2;
const max = 10;
const progressionLength = 10;
const firstIndexToReplace = 0;
const lastIndexToReplace = 9;

// Game "Progression"
const gameDescription = 'What number is missing in the progression?';

const generateData = () => {
  const startNumber = getRandom(min, max);
  const stepOfProgression = getRandom(min, max);
  const replacedChar = getRandom(firstIndexToReplace, lastIndexToReplace);

  const progression = [];
  let rightAnswer = '';

  for (let count = 0; count < progressionLength; count += 1) {
    const currentChar = startNumber + stepOfProgression * count;

    if (replacedChar === count) {
      progression.push('..');
      rightAnswer = `${currentChar}`;
    } else {
      progression.push(currentChar);
    }
  }
  const question = progression.join(' ');

  const result = [question, rightAnswer];
  return result;
};

const launchBrainProgression = () => gameEngine(gameDescription, generateData);

export default launchBrainProgression;
