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

function mulWithReduce(...inArr) {

    return inArr.reduce((accmulator, currentValue) => {
        return accmulator * currentValue;
    }, 1);
}
let mul = mulWithReduce(1, 2, 3, 4);
console.log('multiply with reduce function: ' + mul);