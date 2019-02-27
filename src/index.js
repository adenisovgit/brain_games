import readlineSync from 'readline-sync';

const stYes = '\x1b[31m"yes"\x1b[0m';
const stNo = '\x1b[31m"no"\x1b[0m';
let userName = '';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Answer ${stYes} if number even otherwise answer ${stNo}.\n`);
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
};

export const quiz = () => {
  let i = 0;
  while (i < 3) {
    const num = Math.round(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answ = readlineSync.question('Your answer: ');
    if ((answ === 'no' && num % 2) || (answ === 'yes' && !(num % 2))) {
      console.log('Correct!');
      i += 1;
    } else {
      const st2 = (num % 2) ? stNo : stYes;
      console.log(`\x1b[31m${answ}\x1b[0m is wrong answer ;(. Correct answer was ${st2}.\n Let\x1b[31m's try again, ${userName}!\x1b[0m`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};
