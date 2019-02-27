import readlineSync from 'readline-sync';

const stYes = '\x1b[31m"yes"\x1b[0m';
const stNo = '\x1b[31m"no"\x1b[0m';
let userName = '';
const tryCount = 3; // максимум попыток
const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// Сообщение об ошибке
const ErrorMessage = (st1, st2) => {
  console.log(`\x1b[31m${st1}\x1b[0m is wrong answer ;(. Correct answer was \x1b[31m${st2}\x1b[0m.\n Let\x1b[31m's try again, ${userName}!\x1b[0m`);
};

// Поздравление, завершающее игру.
const CongratsMessage = () => {
  console.log(`Congratulations, ${userName}!\n`);
};

export const getUserName = (st1) => {
  console.log('Welcome to the Brain Games!');
  console.log(st1);
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
};

// игра с определением четности
export const quizEven = () => {
  getUserName(`Answer ${stYes} if number even otherwise answer ${stNo}.\n`);
  let i = 0;
  while (i < tryCount) {
    const num = randomInteger(1, 100);
    console.log(`Question: ${num}`);
    const answ = readlineSync.question('Your answer: ');
    if ((answ === 'no' && num % 2) || (answ === 'yes' && !(num % 2))) {
      console.log('Correct!');
      i += 1;
    } else {
      const st2 = (num % 2) ? 'no' : 'yes';
      ErrorMessage(answ, st2);
      return;
    }
  }
  CongratsMessage();
};

// игра - калькулятор
export const quizCalc = () => {
  const operations = '+-*';
  getUserName('What is the result of the expression?\n');
  let i = 0;
  while (i < tryCount) {
    const num1 = randomInteger(1, 100);
    const num2 = randomInteger(1, 100);
    const oper = operations[randomInteger(0, 2)];
    const result = eval(`${num1} ${oper} ${num2}`);
    console.log(`Question: ${num1} ${oper} ${num2}`);
    const answ = readlineSync.question('Your answer: ');
    if (answ == result) { // используем сравнение с преобразованием типа
      console.log('Correct!');
      i += 1;
    } else {
      ErrorMessage(answ, result);
      return;
    }
  }
  CongratsMessage();
};
