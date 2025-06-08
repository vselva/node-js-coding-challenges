// splice(start, count)
// This is a Remover type code
// removes characters of count 'count' from the location 'start'
// returns removed chars 
// while the actual string modified to keep the remaining 

console.log("-".repeat(40));

let inArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const removedChars = inArr.splice(2, 4);
console.log('removedChars:', removedChars);
console.log('remainingChars:', inArr);

console.log("-".repeat(40));

// splice works only with arrays
// to simulate splice with a string:
// 1. Convert the string into an array using .split('')
// 2. Use splice() to remove/retain elements (characters) in the array
// 3. Join the remaining array elements back into a string using .join('')
const spliceString = (inStr, start, count) => {
    const array = inStr.split('');
    // const array = [ ...inStr ]; // alternate method to convert string to array of characters
    const removedArr = array.splice(start, count);
    return {
        removed: removedArr.join(''),
        remaining: array.join('')
    }
}

const str = "0123456789";
const {removed, remaining} = spliceString(str, 2, 4);
console.log('removed: ', removed, 'remaining:', remaining);
