
// slice = This is GETTER function
// take portion of the string or array based on start and end
// start and end are zero-based indecies 
// while start is included and end is excluded
// orginal array will not updated
// ex slice(1, 4) => 1st indexed item is included and 4th indexed item is excluded 

const removeLastChar = (inArr) => {
    return inArr.slice(0, -1); // slice(start, end);
}
console.log('removeLastChar:', removeLastChar([0, 1, 2, 3]));
console.log('');
// slice can work with strings also, please check build-in/string/slice.js

const inArr = [1, 2, 3, 4, 5];
console.log('inArr:', inArr)

sliced = inArr.slice(1, 3);
console.log('After slice, inArr (unchanged):', inArr);
console.log('sliced Item:', sliced);