// String to Array with Rest Operator
const string = "Selvakumar";
const array = [...string];
console.log('String to Array:', array);
 
// // Merge two arrays using spread
const arr1 = [1, 2];
const arr2 = [3, 4];
let mergedArray = [...arr1, ...arr2];
console.log('Merged arrays:', mergedArray); // [1, 2, 3, 4]

// Clone an object using spread and add/modify a property
const user = { name: 'Alice', age: 25 };
let clonedUser = {...user, sex: 'Male'};
clonedUser.age = 30;
console.log('cloned user:', clonedUser); // { name: 'Alice', age: 30 }

// Function argument expansion
function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log('sum:', sum(...nums)); // 6

// Remove a property from an object using destructuring and spread
const person = { name: 'Selva', age: 24, location: 'Chennai' };
const{age, ...newObj}  = person; // rest of the items other than age gods to newObj
console.log('Removed a property from object with spread and destructuring', newObj); // { name: 'Selva', location: 'Chennai' }

// Write a function that accepts a variable number of arguments and 
// returns a new array with all values doubled
function doubleAll(...args) {
    let double = [];
    for(let i = 0; i < args.length; i++) {
        double[i] = args[i] * 2;
    }
    return double;
}
console.log('doubleAll:', doubleAll(1, 2, 3)); // [2, 4, 6]

// Flatten nested arrays using spread (only one level deep)
const nested = [1, [2, 3], [4, 5]];
const flatten = [nested[0], ...nested[1], ...nested[2]];
console.log('Flatten an array with spread operator:', flatten); // [1, 2, 3, 4, 5]

// Write a function that merges two objects, giving precedence to the second
function merge(obj1, obj2) {
    return {...obj1, ...obj2}
}
const mergedObj = merge({ a: 1, b: 2 }, { b: 3, c: 4 }); // { a: 1, b: 3, c: 4 }
console.log('Merged objects with spread:', mergedObj);
