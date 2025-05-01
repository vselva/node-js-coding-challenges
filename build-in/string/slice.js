
// slice, take portion of the string or array based on start and end
// start and end are zero-based indecies 
// while start is included and end is excluded
// ex slice(1, 4) => 1st indexed item is included and 4th indexed item is excluded 

const removeLastChar = (inStr) => {
    return inStr.slice(0, -1); // slice(start, end);
}
console.log('removeLastChar:', removeLastChar('Tajmahal'));

const removeFirstChar = (inStr) => {
    return inStr.slice(1); // slice(start)
    //return inStr.slice(1, inStr.length); // slice(start, end)
}
console.log('removeFistChar:', removeFirstChar('Tajmahal'));

const lastNCharOfString = (inStr, n) => {
    return inStr.slice(-n);
}
console.log('lastNCharOfString:', lastNCharOfString('selvakumar', 5));

const firstNCharOfString = (inStr, n) => {
    return inStr.slice(0, n);
}
console.log('firstNCharOfString:', firstNCharOfString('selvakumar', 5));

const copyString = (inStr) => {
    return inStr.slice();
}
const inStr = 'Selvakumar';
console.log('copyStringWithSlice:', copyString(inStr));
