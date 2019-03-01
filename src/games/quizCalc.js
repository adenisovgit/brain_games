import * as tools from '../tools';

export const greetingMsg = 'What is the result of the expression?\n';

export const questionCalc = () => {
  const operations = '+-*';
  const num1 = tools.randomInteger(1, 100);
  const num2 = tools.randomInteger(1, 100);
  const oper = operations[tools.randomInteger(0, 2)];
  console.log(`Question: ${num1} ${oper} ${num2}`);
  return tools.evaluateExpression(num1, num2, oper);
};
