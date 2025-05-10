
const string = 'This is a string';

console.log('charAt()');
console.log(string.charAt(0));
console.log(string.charAt(10));
console.log(string.charAt(-1)); // returns null, DOES NOT support negative index 

console.log('');
console.log('at()');
console.log(string.at(0));
console.log(string.at(10));
console.log(string.at(-1)); // SUPPORTS negative index 