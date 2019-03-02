import readlineSync from 'readline-sync';

// Приветствие с запросом и возвратом имени игрока.
export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
};
