
// slice, take portion of the string or array based on start and end
// start and end are zero-based indecies 
// while start is included and end is excluded
// ex slice(1, 4) => 1st indexed item is included and 4th indexed item is excluded 

const removeLastChar = (inArr) => {
    return inArr.slice(0, -1); // slice(start, end);
}
console.log('removeLastChar:', removeLastChar([0, 1, 2, 3]));

// slice can work with strings also, please check build-in/string/slice.js
