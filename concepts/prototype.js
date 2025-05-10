// Prototype:
// In JavaScript, a prototype is an object 
// that is associated with every function and object by default.

function Person (name) {
    this.name = name;
}
    // add a function to Person prototype
    Person.prototype.greetUser = function () {
        return 'Hi ' + this.name;
    }

    // add a age variable to Person prototype
    Person.prototype.age = 10; 

const person1 = new Person('Selva');
console.log(person1.greetUser());   // selva doesn't have a greet() method, 
                                    // inherits it from Person.prototype.greetUser
console.log(person1.age); // selva doesn't have a age property, 
                          // inherits it from Person.prototype.age