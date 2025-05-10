
// Type coercion is the automatic or implicit conversion of values 
// from one data type to another, 
// such as converting a string to a number or a boolean.

// Implicit Coercion: Done automatically by JavaScript 
console.log('Number coercion: ');
console.log(5 + '1'); // 51 - concatination 
console.log(5 + 'a'); // 5a - concatination 
console.log(true + ''); // 'true'
console.log('');

console.log('String coercion: ');
console.log(5 - '2'); // 3 - substraction 
console.log(5 * '2'); // 10  - multipilcation
console.log(5 / '2'); // 10  - devide
console.log(5 % '2'); // 10  - devide
console.log('');

// null becomes 0
// undefined will not coerced to number 
console.log('null/undefined coercians:')
console.log(null >= 0); // true;
console.log(undefined == 0); // false 
console.log('');

// Explicit Coercion: Done manually using functions like Number(), String(), Boolean()

console.log('Manual coercion:');
console.log('');

console.log('Number:');
console.log(Number('10')); // 10
console.log(Number('a')); // NaN - Not a Number
console.log(parseInt('42px')); // 42
console.log(parseFloat("3.14")); // 3.14
console.log('');

console.log('String:');
console.log(String(10)); // '10'
console.log((123).toString()); // 123
console.log('');

console.log('Boolean:');
console.log(Boolean('')); // false
console.log(Boolean('a')); // true
console.log(Boolean([])); // true
console.log('');
