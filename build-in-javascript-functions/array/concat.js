// Merge arrays
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [7, 8, 9, 10, 11, 12];
const array3 = [13, 14, 15, 16, 17, 18];

const mergedArray = array1.concat(array1, array2);
console.log('Merged Array:', mergedArray);

// Flatten One Level of Nested Arrays
const input = [[1], [2, 3], [4]]
const flattenArray = [].concat(...input);
console.log('Flaatan Array:',  flattenArray);

// Merge Arrays Without Duplicates
const a = [0, 1, 2, 3];
const b = [2, 3, 4, 5];
const mergedUnique = [...new Set(a.concat(b))];
console.log('Merged and unique array:', mergedUnique);
