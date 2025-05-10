let string = '12';
let number = 12;

console.log(string == number); // true - compared only the value only 
console.log(string === number); // false - strict equality operator
                                // compared both type and value

console.log('Arrays Strict Comparision:');
console.log('Array Reference Assignement:');
const array1 = [1, 2, 3];
let array2 = array1; // Same reference
console.log(array1 === array2); // true 
array2 = [...array1]; // different reference
console.log(array1 === array2); // false 

console.log('Objects Strict Comparision:');
const obj1 = {};
let obj2 = obj1; // same reference
console.log(obj1 === obj2);      // true
obj2 = {...obj1}; // difference referencd
console.log(obj1 === obj2);      // false