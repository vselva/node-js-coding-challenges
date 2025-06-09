function sumWithReduce(...inarr) {
    return inarr.reduce((accmulator, currentValue, currentIndex, array) => {
        // console.log('accmulator: ' + accmulator);
        // console.log('currentValue: ' + currentValue);
        // console.log('currentIndex: ' + currentIndex);
        // console.log('array: ' + array);
        // console.log('========================');
        return accmulator + currentValue;
    }, 0);
}
let sum = sumWithReduce(1, 2, 3, 4);
console.log('sum with reduce function: ' + sum);

function multiplysWithReduce(...inArr) {
    return inArr.reduce((accmulator, currentValue) => {
        return accmulator * currentValue;
    }, 1);
}
let mul = multiplysWithReduce(1, 2, 3, 4);
console.log('multiply with reduce function: ' + mul);

console.log('');
console.log('Find Total Order value from array of order objects:');
console.log('===================================================');

const orders = [
    { id: 1, total: 100 },
    { id: 2, total: 200 },
    { id: 3, total: 300 },
    { id: 4, total: 400 },
];

console.log(`Total (reduce): ${orders.reduce((acc, cur) => acc + cur.total, 0)}`);
console.log(`Total (reduceRight): ${orders.reduceRight((acc, cur) => acc + cur.total, 0)}`);

console.log('');
console.log('Reverse a String');
console.log('===================================================');
const inStr = 'Welcome';

const reversed = inStr.split('').reduceRight((acc, cur) => acc + cur, '');
console.log('Reverse a String with reduceRight():', reversed);

console.log('');
console.log('Reverse a String with reverse():', inStr.split('').reverse().join(''));
console.log('');
