import randomInteger from '../tools';
import games from '..';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const greetingMsg = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const questionPrime = () => {
  const num = randomInteger(1, 100);
  const question = `Question: ${num}`;
  const answerCorrect = isPrime(num) ? 'yes' : 'no';
  return [answerCorrect, question];
};

export default () => (games(greetingMsg, questionPrime));
