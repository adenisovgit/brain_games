import * as tools from '../tools';
import games from '..';

const greetingMsg = 'What number is missing \x1b[1min\x1b[0m the progression?\n';

const questionProgression = () => {
  const progressionLength = 10;
  const numStart = tools.randomInteger(1, 100); // первый элемент прогрессии
  const numStep = tools.randomInteger(1, 5); // шаг прогрессии
  const missedValueNum = tools.randomInteger(1, progressionLength); // номер скрытого элемента
  let missedValue;
  let questionStr = '';
  for (let i = 1; i <= 10; i += 1) {
    const currentValue = numStart + (i - 1) * numStep;
    if (i === missedValueNum) {
      missedValue = currentValue;
      questionStr += String('.. ');
    } else {
      questionStr += String(`${currentValue} `);
    }
  }
  const question = `Question: ${questionStr.slice(0, -1)}`;
  return [missedValue, question];
};

export default () => (games(greetingMsg, questionProgression));
