import { gameEngine, getRandom } from '../index.js';

// CONFIGURATION //
// Random integer counts.
const min = 2;
const max = 100;

// Game "GCD"
const gameDescription = () => console.log('Find the greatest common divisor of given numbers.');

const generator = () => {
  const getRandomCount1 = getRandom(min, max);
  const getRandomCount2 = getRandom(min, max);
  const gcd = (num1, num2) => ((num2 === 0) ? num1 : gcd(num2, num1 % num2));

  const question = `${getRandomCount1} ${getRandomCount2}`;
  const rightAnswer = gcd(getRandomCount1, getRandomCount2);

  const result = [question, rightAnswer];
  return result;
};

const brainGcd = () => gameEngine(gameDescription, generator);

export default brainGcd;
