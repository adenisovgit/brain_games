// набор вспомогательных функций для реализации логики игр

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

export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
