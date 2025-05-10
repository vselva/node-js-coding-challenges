// The typeof operator is used to determine the type of a given operand.

console.log(typeof 42);        // "number"
console.log(typeof NaN);       // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (this is a known quirk in JavaScript)
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"
console.log(typeof /abc/);        // "object"
console.log(typeof function(){}); // "function"
