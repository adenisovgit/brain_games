import * as tools from '../tools';
import games from '..';

const greetingMsg = 'What is the result of the expression?\n';

const questionCalc = () => {
  const operations = '+-*';
  const num1 = tools.randomInteger(1, 100);
  const num2 = tools.randomInteger(1, 100);
  const oper = operations[tools.randomInteger(0, 2)];
  const question = `Question: ${num1} ${oper} ${num2}`;
  return [tools.evaluateExpression(num1, num2, oper), question];
};

export default () => (games(greetingMsg, questionCalc));
