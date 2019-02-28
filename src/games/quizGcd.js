import * as common from '..';
import readlineSync from 'readline-sync';

// игра с определением наибольшего общего делителя.
const quizGcd = () => {
  const userName = common.getUserNameGreetings('Find the greatest common divisor of given numbers.\n');
  for (let i = 0; i < common.tryCount; i += 1) {
    const num1 = common.randomInteger(1, 100);
    const num2 = common.randomInteger(1, 100);
    const result = common.getGcd(num1, num2);
    console.log(`Question: ${num1} ${num2} ${result}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      common.ErrorMessage(answer, result, userName);
      return;
    }
  }
  common.CongratsMessage(userName);
};

export default quizGcd;
