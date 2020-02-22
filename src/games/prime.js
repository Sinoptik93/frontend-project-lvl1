import gameEngine from '../index.js';
import getRandom from '../utils.js';

// CONFIGURATION //
// Random integer counts.
const min = 1;
const max = 25;

// Game "Prime"
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateData = () => {
  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i < number / 2; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const question = getRandom(min, max);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  const result = [question, rightAnswer];
  return result;
};

const launchBrainPrime = () => gameEngine(gameDescription, generateData);

export default launchBrainPrime;
