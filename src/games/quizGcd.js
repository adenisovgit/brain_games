import * as tools from '../tools';
import games from '..';

const greetingMsg = 'Find the greatest common divisor of given numbers.\n';

const questionGcd = () => {
  const num1 = tools.randomInteger(1, 100);
  const num2 = tools.randomInteger(1, 100);
  const question = `Question: ${num1} ${num2}`;
  return [tools.getGcd(num1, num2), question];
};

export default () => (games(greetingMsg, questionGcd));
