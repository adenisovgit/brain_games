import * as common from '..';
import readlineSync from 'readline-sync';

// игра - калькулятор
const quizCalc = () => {
  const operations = '+-*';
  const userName = common.getUserNameGreetings('What is the result of the expression?\n');
  for (let i = 0; i < common.tryCount; i += 1) {
    const num1 = common.randomInteger(1, 100);
    const num2 = common.randomInteger(1, 100);
    const oper = operations[common.randomInteger(0, 2)];
    const result = common.evaluateExpression(num1, num2, oper);
    console.log(`Question: ${num1} ${oper} ${num2}`);
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

export default quizCalc;
