
// slice, take portion of the string or array based on start and end
// start and end are zero-based indecies 
// while start is included and end is excluded
// ex slice(1, 4) => 1st indexed item is included and 4th indexed item is excluded 

const removeLastChar = (inArr) => {
    return inArr.slice(0, -1); // slice(start, end);
}
console.log('removeLastChar:', removeLastChar([0, 1, 2, 3]));

// const removeFirstChar = (inArr) => {
//     return inArr.slice(1); // slice(start)
//     //return inArr.slice(1, inArr.length); // slice(start, end)
// }
// console.log('removeFistChar:', removeFirstChar('Tajmahal'));

// const lastNCharOfString = (inArr, n) => {
//     return inArr.slice(-n);
// }
// console.log('lastNCharOfString:', lastNCharOfString('selvakumar', 5));

// const firstNCharOfString = (inArr, n) => {
//     return inArr.slice(0, n);
// }
// console.log('firstNCharOfString:', firstNCharOfString('selvakumar', 5));

// const copyString = (inArr) => {
//     return inArr.slice();
// }
// const inArr = 'Selvakumar';
// console.log('copyStringWithSlice:', copyString(inArr));
