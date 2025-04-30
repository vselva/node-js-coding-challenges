
function greet(message) {
    console.log('Hi ' + this.name + ', ' + message);
}
greet('Good Morning'); // this.name will be undefined 

// this object and function argument initialization 
let person = {
    name: 'Selva'
};
let message = 'Good Morning!';
// call
// this can be passed as first argument as object
// function argument should be passed as comman separated after the first object argument 
greet.call(person, message);

// apply 
// this can be passed as first argument as object
// function arguments should be passed in array 
greet.apply(person, [message]);

// bind
// this can be passed as first argument as object
// function arguments passed as comma separated after first argument 
// but this will not executed immediately but returns another function which need tobe called. 
let bindedFunction = greet.bind(person, message);
bindedFunction();
