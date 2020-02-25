import gameEngine from '../index.js';
import getRandom from '../utils.js';

// CONFIGURATION //
// Random integer counts.
const min = 2;
const max = 10;
const progressionLength = 10;
const firstIndexToReplace = 0;
const lastIndexToReplace = progressionLength - 1;

// Game "Progression"
const gameDescription = 'What number is missing in the progression?';

const generateData = () => {
  const startNumber = getRandom(min, max);
  const stepOfProgression = getRandom(min, max);
  const replacedCharIndex = getRandom(firstIndexToReplace, lastIndexToReplace);

  const progression = [];
  const rightAnswer = startNumber + stepOfProgression * replacedCharIndex;

  for (let count = 0; count < progressionLength; count += 1) {
    const currentChar = startNumber + stepOfProgression * count;

    if (replacedCharIndex === count) {
      progression.push('..');
    } else {
      progression.push(currentChar);
    }
  }
  const question = progression.join(' ');

  const result = [question, rightAnswer.toString()];
  return result;
};

const launchBrainProgression = () => gameEngine(gameDescription, generateData);

export default launchBrainProgression;
