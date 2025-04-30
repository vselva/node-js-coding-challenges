// Closure is a feature in JavaScript 
// where an inner function has access to the variables of its outer function, 
// even after the outer function has finished executing.

// A closure "remembers" variables from its outer scope.
function greet(name) {
    // Outer function takes `name` and returns a new function
    return function(message) {
        // Inner function uses `name` even though it's not its own variable `message`
        console.log('Hi ' + name + ', ' + message);
    }
}

// greetSelva is now a function that remembers "Selva" as the name
const greetSelva = greet('Selva');

// You can reuse greetSelva with different messages, 
// while name is stored already only message can be changed 

greetSelva('Good Morning!'); 
// => Hi Selva, Good Morning!

greetSelva('Good Evening!'); 
// => Hi Selva, Good Evening!
