const isPerfect = (num) => {
    let i = 0;
    let sum = 0;
    for (; i < num; i += 1) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (num === sum) {
        return true;
    }
    return false;
}

const squareSum = (num) => {
    let i = 0;
    let result = 0;
    for (; i <= num; i +=1 ) {
        result += i;
    }
    return Math.pow(result, 2);

};

const sumSquares = (num) => {
    let i = 0; 
    let result = 0;
    for (; i <= num; i +=1) {
        result += Math.pow(i, 2);
    }
    return result;
};

const sumSquareDifference = (num) => squareSum(num) - sumSquares(num);

const fizzBuzz = (begin, end) => {
    if (begin > end) {
        return '';
    }
    let num = begin; 
    for (i = 0; i <= end - begin; i += 1) {
        if (num % 3 == 0 && num % 5 == 0) { 
            console.log('FizzBuzz');
        }
        else if (num % 3 == 0) {
            console.log('Fizz');
        }
        else if (num % 5 == 0) {
            console.log('Buzz');
        }
        else console.log(num);
        num += 1;
    }
};

fizzBuzz(11, 20);