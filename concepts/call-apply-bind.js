
function greet(message) {
    console.log('Hi ' + this.name + ', ' + message);
}
greet('Good Morning'); // this.name will be undefined 

// this object and function argument initialization 
let thisArg = {
    name: 'Selva'
};
let messageArg = 'Good Morning!';

// call - Syntax: function.call(thisArg, arg1, arg2, ...)
// this can be passed as first argument as object
// function argument should be passed as comman separated after the first object argument 
greet.call(thisArg, messageArg);

// apply - Syntax: function.apply(thisArg, [arg1, arg2, ...])
// this can be passed as first argument as object
// function arguments should be passed in array 
greet.apply(thisArg, [messageArg]);

// bind - Syntax: function.bind(thisArg, arg1, arg2, ...)
// this can be passed as first argument as object
// function arguments passed as comma separated after first argument 
// but this will not executed immediately but returns another function which need tobe called. 
let bindedFunction = greet.bind(thisArg, messageArg);
bindedFunction();
