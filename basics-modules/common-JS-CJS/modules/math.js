// Local Modules

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const remainder = (a, b) => a % b;

/*
module.exports = {
    add: add, 
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    remainder: remainder
}
*/

// or   
// ES6 shorthand property names
// If the property name and value are the same, you can omit the value
// and just write the property name. This is called shorthand property names.

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    remainder
}