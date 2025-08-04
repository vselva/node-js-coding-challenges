function greet(name) {
    const respectfulName = "Mr. " + name;
    return function (message) {
        console.log("Hi " + respectfulName + ", " + message);
    };
}

const greetSelva = greet("Selva");
greetSelva("Good Morning!");
greetSelva("Good Evening!");

// counter using closure
function counter(init) {
    let count = init;
    return function (inc) {
        count += inc;
        return count;
    };
}

const increment = counter(0);
console.log(increment(4));
console.log(increment(4));
console.log(increment(-4));
