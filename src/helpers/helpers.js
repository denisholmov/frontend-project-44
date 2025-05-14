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

export const isEven = num => {
  if (num % 2 === 0) {
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

export const generationNumber = () => {
  return Math.floor(Math.random() * 101);
};

export const generationArithmeticProgression = () => {
  const lengthProgression = Math.floor(Math.random() * (100 - 5 + 1)) + 5;
  const stepProgression = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

  let numForProgression = stepProgression;

  const newArr = [];

  for (let i = 0; i < lengthProgression; i += 1) {
    newArr.push(numForProgression);
    numForProgression = numForProgression + stepProgression;
  }

  return newArr;
};

export const replaceRandomWithDots = arr => {
  const positionPoints = Math.floor(Math.random() * arr.length);
  const newArr = arr.map((item, index) => (index !== positionPoints ? item : '..'));

  return [newArr, arr[positionPoints]];
};

// Функция с арифмитической прогрессией
// 1. Генерация количества чисел
// 2. Определение позиции двух точек, то есть загаданного числа.
// 3.
