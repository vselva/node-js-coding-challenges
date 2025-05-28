
// 1. Named Function
function namedFunction() {
    console.log('This is a named FUnction!');
}
namedFunction();

// 2. Anonymous Function 
console.log('add functionality with anonymous function:', function(a, b) {
    return a + b;
} (1, 2));

// 3. Function Expression 
const multiply = function(a, b) {
    return a * b;
}
console.log('multiply with a function expression:', multiply(10, 30));

// 4. Arrow Function 
const substract = (a, b) => {
    console.log('This is a arrow function');
    return a - b;
}
console.log('Subtract with array function:', substract(100, 30));

// 5. Call back function 
const add = (a, b) => a + b; // call back function
function operation (a, b, cb) { // call back function is passed as argment 
    console.log('callback:', cb(a, b));
}
operation(10, 30, add);

// 6. Higher Order Function 
const mul = (a, b) => a * b;
function higherOrderFuntion1(a, b, cb) { // higher order function received function as argument
    console.log('higher order function:', cb(a, b));
}
higherOrderFuntion1(2, 18, mul);

function higherOrderFuntion2(num1) {
    return function(num2) {
        return num1 * num2; // this higher order function returns a function 
    }
}

const double = higherOrderFuntion2(2);
console.log('double the number 10:', double(10));

const triple = higherOrderFuntion2(3);
console.log('triple the number 200:', triple(200));

// 7. Pure Function 
// for the same input it returns the same output
// three is no side effect, no state
function square(num) {
    return num * num;
}
const sq = square(10);
console.log('Pure Function - squre of 10:', sq);
console.log('Pure Function - squre of 10:', sq);

// 8. Impure Function 
// for same input the output need not to be the same
// modify the sate 
// have side effects
let counter = 0;
increment = (incrementBy) => counter = counter + incrementBy;
console.log(increment(2)); // returns 2
console.log(increment(2)); // for same arg, the return values changes to 4
