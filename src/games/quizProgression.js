import randomInteger from '../tools';
import games from '..';

const greetingMsg = 'What number is missing in the progression?';
const progressionLength = 10;


const questionProgression = () => {
  const start = randomInteger(1, 100); // первый элемент прогрессии
  const step = randomInteger(1, 5); // шаг прогрессии
  const missedValueNum = randomInteger(1, progressionLength) - 1; // номер скрытого элем с 0
  let questionStr = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const currentValue = start + i * step;
    if (i === missedValueNum) {
      questionStr += String('.. ');
    } else {
      questionStr += String(`${currentValue} `);
    }
  }
  const missedValue = start + step * missedValueNum;
  const question = `${questionStr.trim()}`;
  return [missedValue, question];
};

export default () => (games(greetingMsg, questionProgression));
