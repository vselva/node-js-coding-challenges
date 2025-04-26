
console.log('----- clone array -----');
let arr = [1, 2, 3];
let clonedArr = [...arr];
clonedArr.push(4);
console.log(`array: ${arr}`);
console.log(`Cloned array: ${clonedArr}`);


console.log('----- merge array -----');
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = [...arr1, ...arr2];
console.log(`Merged array: ${mergedArr}`);

console.log('----- copy object -----');
let obj = {name: 'selva', age: 18};
let clonedObj = {...obj};
clonedObj = {...obj, age:24, loc: 'Chennai'}; // replacing a old field and adding a new field
console.log(`object: ${JSON.stringify(obj)}`);
console.log(`Cloned object: ${JSON.stringify(clonedObj)}`);

console.log('----- convert string to array -----');
let str = 'Selvakumar';
let chars = [...str];
console.log('string to array: ' + chars);
