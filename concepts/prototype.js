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
console.log(person1.greetUser());   // person1 doesn't have a greet() method, 
                                    // inherits it from Person.prototype.greetUser
console.log(person1.age); // person1 doesn't have a age property, 
                          // inherits it from Person.prototype.age

console.log('');
console.log('custom implementation of find with prototype:');
Array.prototype.myFind = function(cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};
const arr = [1, 3, 5, 7, 8, 9, 10];
const firstEven = arr.myFind(el => el % 2 === 0 );
console.log('First Even Number in Array with custom Prototype function:', firstEven);

console.log('-----');
