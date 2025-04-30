

let Person = {
    name: 'Selva',
    age: 20,
    greetNormalFunction: function() {
        console.log('Hi ' + this.name); 
        // this is dynamic here
        // it depends on how function is called
        // Since we call `Person.greetNormalFunction()`, `this` refers to `Person`.
    },
    greetArrowFunction: () => {
        console.log('Hi ' + this.name); 
        // `this` is not bound to `Person`.
        // It uses lexical scoping: `this` refers to the surrounding scope
        // Here this refers to global object 
    }
}

Person.greetNormalFunction(); // Hi Selva. even though this is undefined here, it has value in Person Class. 
Person.greetArrowFunction(); // Hi undefined, because here this is undefined - lexical scoping 
console.log('this: ', this);

console.log('----------------------');

const person = {
name: 'Selva',
age: 30, 
greet: function () {
    innerArrowFunction = () => {
        console.log('innerArrowFunction - Name: ' + this.name); // Name: Selva 
    }
    innerArrowFunction();
    console.log('this: ', this);
}
}

person.greet();