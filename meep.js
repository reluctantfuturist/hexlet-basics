const smallestDivisor = (num) => {
  if (num === 0) {
    return NaN;
  }
  if (num === 1) {
    return 1;
  }
  const iter = (counter, acc) => {
    if (acc % counter === 0) {
      return counter;
    }
    return iter(counter + 1, acc);
  };
  return iter(2, num);
};

const smallestDivisor2 = (num) => {
  let divisor = 2;

  if (num < 1) {
    return NaN;
  }
  
  if (divisor > num / 2) {
    return num;
  }

  while (num % divisor != 0) {
    divisor = divisor + 1; 
  }
  return divisor;
}

const reverse = (str) => {
  let newstr = ''; 
  let i; 
  for (i = 0; i < str.length; i++) { 
    newstr = newstr + str[str.length - 1 - i];
  }

  return newstr;
}

const isPrime = (num) => {
  let i = 2;
  if (num < 2) {
    return false;
  }
  for (; i < num; i += 1) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

const getTriangleArea = (h, b) => 1/2 * h * b;


const square = num => num * num;
const sumOfSquares = (a, b) => square(a) + square(b); 
const squareSumOfSquares = (a, b) => square(sumOfSquares(a, b));


const bigLettersCount = (str) => {
  let counter = 0;
  for (i = 0; i < length(str); i +=1 ) { 
    if (toUpperCase(str[i]) === str[i]) {
      counter += 1; 
    }
  }
  return counter;
}

const identity = str => str;
const length = str => str.length;
const toUpperCase = str => str.toUpperCase();

const sumDigits = num => {
  let num_array = String(num);
  let result = 0;
  let i = 0; 
  for (; i < length(num_array); i += 1) {
    result += Number(num_array[i]);
  }

  return result;
};

const addDigits = num => {
  let result = String(num);
  while (length(result) > 1) {
    result = String(sumDigits(Number(result)));
  }
return Number(result);
}


const capitalizer = str => {
  let result = toUpperCase(str[0]);
  let capnext = 0;

  if (result == ' ') {
    capnext = 1; 
  }

  for (i = 1; i < length(str); i += 1) {
    if (str[i] == ' ') {
      capnext = 1;
      result += str[i];
    }
    else if (capnext == 1) {
      result += toUpperCase(str[i]);
      capnext = 0;
    }
    else {
      result += str[i];
      capnext = 0;
    };
  }
  return result;
}


const reverseInt = (num) => {
  let i = 0;
  let result = '';

  if (num < 0) {
    result += '-';
  }

  console.log(result);
  for (; i < String(Math.abs(num)).length; i += 1) {
    result += String(Math.abs(num))[String(Math.abs(num)).length - 1 - i];
    console.log(result);
  }

  return Number(result);
};

const diff = (a1, a2) => 180 - Math.abs((Math.abs(a1 - a2)) - 180);

console.log(diff(120, 280)); 
