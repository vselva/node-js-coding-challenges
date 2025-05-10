let array = [-1, 0, 1, 2, 3, 4, 5];

console.log('some()');
const containEven = array.some(el => el % 2 === 0);
console.log(containEven);

const containOdd = array.some(el => el % 2 === 1);
console.log(containOdd);

const containGt10 = array.some(el => el > 10);
console.log(containGt10);

const containNegative = array.some(el => el < 0);
console.log(containNegative);

console.log('');
console.log('every()');
array = [2, 4, 6, 8];
const allEven = array.every(el => el % 2 == 0);
console.log(allEven);

const allOdd = array.every(el => el % 2 == 1);
console.log(allOdd);

const allPositive = array.every(el => el > 0);
console.log(allPositive);

const allNegative = array.every(el => el < 0);
console.log(allNegative);
