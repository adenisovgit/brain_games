import * as tools from '../tools';

export const greetingMsg = 'Find the greatest common divisor of given numbers.\n';

export const questionGcd = () => {
  const num1 = tools.randomInteger(1, 100);
  const num2 = tools.randomInteger(1, 100);
  console.log(`Question: ${num1} ${num2} ${tools.getGcd(num1, num2)}`);
  return tools.getGcd(num1, num2);
};
