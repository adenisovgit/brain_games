import readlineSync from 'readline-sync';

const tryCount = 3; // максимум попыток

const ErrorMessage = (st1, st2, userName) => {
  console.log(`\x1b[31m${st1}\x1b[0m is wrong answer ;(. Correct answer was \x1b[31m${st2}\x1b[0m.\n Let\x1b[31m's try again, ${userName}!\x1b[0m\n`);
};

// Поздравление, завершающее игру.
const CongratsMessage = (userName) => {
  console.log(`Congratulations, ${userName}!\n`);
};

// Приветствие с запросом и возвратом имени игрока.
export const getUserNameGreetings = (st1) => {
  console.log('Welcome to the Brain Games!');
  console.log(st1);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  return userName;
};

// единый движок игр. Для вызова игры в параметры передается
// приветственное сообщение и функция постановки задачи/расчета ответа
const games = (greetingMsg, game) => {
  const userName = getUserNameGreetings(greetingMsg);
  for (let i = 0; i < tryCount; i += 1) {
    // возвращаем из игры правильный ответ и строку для вопроса
    const [answerCorrect, gameQuestion] = game();
    console.log(gameQuestion);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) === String(answerCorrect)) {
      console.log('Correct!');
    } else {
      ErrorMessage(answer, answerCorrect, userName);
      return;
    }
  }
  CongratsMessage(userName);
};

export default games;
