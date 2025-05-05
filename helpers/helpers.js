export const calcNums = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;
  }
};

export const generationMathOperator = () => {
  const num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      return '+';

    case 1:
      return '-';

    default:
      return '*';
  }
};

export const isCheckingNumber = (num, answer) => {
  if (num % 2 === 0 && answer === 'yes') {
    return true;
  } else if (num % 2 === 1 && answer === 'no') {
    return true;
  }

  return false;
};

export const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};
