import randomInteger from '../tools';
import games from '..';

const greetingMsg = 'Answer "yes" if number even otherwise answer "no".';
const isEven = x => (x % 2 === 0);

const questionEven = () => {
  const num = randomInteger(1, 100);
  const question = `${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default () => (games(greetingMsg, questionEven));
