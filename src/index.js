import readlineSync from 'readline-sync';
import * as quizEvenModule from './games/quizEven';
import * as quizCalcModule from './games/quizCalc';
import * as quizGcdModule from './games/quizGcd';

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
const games = (greetingMsg, question) => {
  const userName = getUserNameGreetings(greetingMsg);
  for (let i = 0; i < tryCount; i += 1) {
    // формируем вопрос, выводим его и возвращам правильный ответ
    // своя функция для каждой игры
    const answerCorrect = question();
    // общая часть - запрос ответа и сравнение
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

export const quizEven = () => {
  games(quizEvenModule.greetingMsg, quizEvenModule.questionEven);
};

export const quizCalc = () => {
  games(quizCalcModule.greetingMsg, quizCalcModule.questionCalc);
};

export const quizGcd = () => {
  games(quizGcdModule.greetingMsg, quizGcdModule.questionGcd);
};
