import randomInteger from '../tools';
import games from '..';

const greetingMsg = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const questionGcd = () => {
  const num1 = randomInteger(1, 100);
  const num2 = randomInteger(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [correctAnswer, question];
};

export default () => (games(greetingMsg, questionGcd));
