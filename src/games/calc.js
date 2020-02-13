import { sample } from '../node_modules/you-dont-need-lodash-underscore';
import { gameEngine, getRandom } from "../index.js";

// CONFIGURATION //
// Random integer counts.
const min = 1;
const max = 10;

const getRandomCount1 = getRandom(min, max);
const getRandomCount2 = getRandom(min, max);
const operator = ['+', '-', '*'];
const getRandomOperator = sample(operator);

// Game "Calculate"
const gameDescription = () => console.log('What is the result of the expression?".');

const question = `${getRandomCount1} ${getRandomOperator} ${getRandomCount2}` ;
const rightAnswer = 0;
const calcGame = () => gameEngine(gameDescription, question, rightAnswer);

export default calcGame;
