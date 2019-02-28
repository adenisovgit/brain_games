import readlineSync from 'readline-sync';

export const stYes = '\x1b[31m"yes"\x1b[0m'; // для вывода yes/no красным цветом
export const stNo = '\x1b[31m"no"\x1b[0m';
export const tryCount = 3; // максимум попыток
export const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
export const isEven = x => (x % 2 === 0);
export const evaluateExpression = (a, b, operand) => {
  switch (operand) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return undefined;
  }
};

export const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

export const ErrorMessage = (st1, st2, userName) => {
  console.log(`\x1b[31m${st1}\x1b[0m is wrong answer ;(. Correct answer was \x1b[31m${st2}\x1b[0m.\n Let\x1b[31m's try again, ${userName}!\x1b[0m\n`);
};

// Поздравление, завершающее игру.
export const CongratsMessage = (userName) => {
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
