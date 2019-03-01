import * as tools from '../tools';
import games from '..';

const greetingMsg = 'Answer \x1b[31m"yes"\x1b[0m if given number is prime. Otherwise answer \x1b[31m"no"\x1b[0m.\n';


const questionPrime = () => {
  const num = tools.randomInteger(1, 100);
  const question = `Question: ${num}`;
  return [tools.isPrime(num) ? 'yes' : 'no', question];
};

export default () => (games(greetingMsg, questionPrime));
