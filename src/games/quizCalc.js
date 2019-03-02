import randomInteger from '../tools';
import games from '..';

const evaluateExpression = (a, b, operand) => {
  switch (operand) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return undefined;
  }
};

const greetingMsg = 'What is the result of the expression?';
const operations = '+-*';

const questionCalc = () => {
  const num1 = randomInteger(1, 100);
  const num2 = randomInteger(1, 100);
  const oper = operations[randomInteger(0, 2)];
  const question = `${num1} ${oper} ${num2}`;
  const answerCorrect = evaluateExpression(num1, num2, oper);
  return [answerCorrect, question];
};

export default () => (games(greetingMsg, questionCalc));
