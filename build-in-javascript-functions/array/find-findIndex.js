const inArr = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];

console.log('');
console.log('find First Even Number');
const firstEvenNum = inArr.find(el => el % 2 === 0 );
const firstEvenNumIndex = inArr.findIndex((el => el % 2 === 0));
console.log('First Even Number in Array:', firstEvenNum, 'Index:', firstEvenNumIndex);

console.log('');
console.log('First number greater than 5');
const firstNumberGreaterThan5 = inArr.find(el => el > 5);
const firstNumberGreaterThan5Index = inArr.findIndex(el => el > 5);
console.log('First Number greater than 5', firstNumberGreaterThan5, 'Index: ', firstNumberGreaterThan5Index);

console.log('');
console.log('find the product whose id is 102');
const products = [
    { id: 101, name: 'Pen' },
    { id: 102, name: 'Pencil' },
    { id: 103, name: 'Notebook' }
];
const findId102 = products.find(el => el.id === 102);
const findId102Index = products.find(el => el.id === 102);
console.log('Find 102 Product:', findId102, 'Index:', findId102Index);

console.log('');
console.log('Remove first negative number');
let numbers = [2, -3, 4, -1, 5];
console.log('original array - numbers:', numbers);
const firstNegativeNumIndex = numbers.findIndex(el => el < 0);
const removed = numbers.splice(firstNegativeNumIndex, 1);
console.log('Removed first negative number:', numbers);
console.log('Removed negative number - the return value value (removed):', removed);

console.log('');
console.log('Replace with postive numher');
numbers = [2, -3, 4, -1, 5];
console.log('original array - numbers:', numbers);
const replaced = numbers.splice(firstNegativeNumIndex, 1, -numbers[firstNegativeNumIndex]);
console.log('Replaced first negative number with its positive number:', numbers);

console.log('');
console.log('Find first duplicate number');
numbers = [1, 2, 2, 3, 4];
let duplicateNum = null;
while(numbers.length > 1) {
    // let item = numbers[0];
    let [ item ] = numbers.splice(0, 1);
    console.log('item:', item, 'numbers:', numbers);
    duplicateNum = numbers.find(n => n === item);
    if(duplicateNum) break;
}
console.log(duplicateNum ? `Duplicate Number in the array is ${duplicateNum}` : 'No duplicate number');

console.log('');
console.log('Find the first string that starts with a "Mr.":');
const names = ['John', 'Eve', 'Mr.Oliver', 'Mr.Chris'];
const firstStarStr = names.find((name) => {
    return name.startsWith('Mr.');
});
console.log('first string that starts with "Mr." is', firstStarStr);

console.log('');
console.log('custom implementation of find');
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
