import randomInteger from '../tools';
import games from '..';

const greetingMsg = 'Answer "yes" if number even otherwise answer "no".';
const isEven = x => (x % 2 === 0);

const questionEven = () => {
  const num = randomInteger(1, 100);
  const question = `${num}`;
  const answerCorrect = isEven(num) ? 'yes' : 'no';
  return [answerCorrect, question];
};

export default () => (games(greetingMsg, questionEven));
