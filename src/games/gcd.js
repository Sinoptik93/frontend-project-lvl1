import gameEngine from '../index.js';
import getRandom from '../utils.js';

// CONFIGURATION //
// Random integer counts.
const min = 2;
const max = 100;

// Game "GCD"
const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => ((num2 === 0) ? num1 : gcd(num2, num1 % num2));

const generateData = () => {
  const getRandomCount1 = getRandom(min, max);
  const getRandomCount2 = getRandom(min, max);

  const question = `${getRandomCount1} ${getRandomCount2}`;
  const rightAnswer = gcd(getRandomCount1, getRandomCount2);

  const result = [question, rightAnswer];
  return result;
};

const launchBrainGcd = () => gameEngine(gameDescription, generateData);

export default launchBrainGcd;
