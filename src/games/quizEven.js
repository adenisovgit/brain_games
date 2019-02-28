import * as common from '..';
import readlineSync from 'readline-sync';

// игра с определением четности
const quizEven = () => {
  const userName = common.getUserNameGreetings(`Answer ${common.stYes} if number even otherwise answer ${common.stNo}.\n`);
  for (let i = 0; i < common.tryCount; i += 1) {
    const question = common.randomInteger(1, 100);
    const answerCorrect = common.isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === answerCorrect) {
      console.log('Correct!');
    } else {
      common.ErrorMessage(answer, answerCorrect, userName);
      return;
    }
  }
  common.CongratsMessage(userName);
};

export default quizEven;
