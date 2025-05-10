const inArr = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];

// find First Even Number
const firstEvenNum = inArr.find(el => el % 2 === 0 );
const firstEvenNumIndex = inArr.findIndex((el => el % 2 === 0));
console.log('First Even Number in Array:', firstEvenNum, 'Index:', firstEvenNumIndex);

// First number greater than 5
const firstNumberGreaterThan5 = inArr.find(el => el > 5);
const firstNumberGreaterThan5Index = inArr.findIndex(el => el > 5);
console.log('First Number greater than 5', firstNumberGreaterThan5, 'Index: ', firstNumberGreaterThan5Index);

// find the product whose id is 102
const products = [
    { id: 101, name: 'Pen' },
    { id: 102, name: 'Pencil' },
    { id: 103, name: 'Notebook' }
];
const findId102 = products.find(el => el.id === 102);
const findId102Index = products.find(el => el.id === 102);
console.log('Find 102 Product:', findId102, 'Index:', findId102Index);

// Remove first negative number 
let numbers = [2, -3, 4, -1, 5];
const firstNegativeNumIndex = numbers.findIndex(el => el < 0);
const removed = numbers.splice(firstNegativeNumIndex, 1);
console.log('Removed first negative number:', numbers);

// Replace withe postive numher
numbers = [2, -3, 4, -1, 5];
const replaced = numbers.splice(firstNegativeNumIndex, 1, -numbers[firstNegativeNumIndex]);
console.log('Replaced first negative number with its positive number:', numbers);

// Find first duplicate number 
console.log('-----');
numbers = [1, 2, 2, 3, 4];
let duplicateNum = null;
while(numbers.length > 1) {
    let item = numbers[0];
    numbers.splice(0, 1);
    duplicateNum = numbers.find(el => el === item);
    if(duplicateNum !== undefined) break;
}
if (duplicateNum)
    console.log('Duplicate Number in the array:', duplicateNum);
else 
    console.log('No duplicate number');

// Find the first string that starts with a *:
console.log('-----');
const names = ['John', 'Eve', '*Oliver', 'Chris'];
const firstStarStr = names.find((el) => {
    return el[0] === '*';
});
console.log('first string that starts with a *:', firstStarStr);

// custom implementation of find
console.log('-----');
Array.prototype.myFind = function(cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};
const arr = [1, 3, 5, 7, 8, 9, 10];
const firstEven = arr.myFind(el => el % 2 === 0 );
console.log('First Even Number in Array with custom Prototype function:', firstEven);

console.log('-----');