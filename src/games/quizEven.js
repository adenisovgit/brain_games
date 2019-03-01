import * as tools from '../tools';

export const greetingMsg = 'Answer \x1b[31m"yes"\x1b[0m if number even otherwise answer \x1b[31m"no"\x1b[0m.\n';

export const questionEven = () => {
  const num = tools.randomInteger(1, 100);
  console.log(`Question: ${num}`);
  return tools.isEven(num) ? 'yes' : 'no';
};
