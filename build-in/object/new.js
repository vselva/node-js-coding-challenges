// create object from class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const person1 = new Person("Alice", 30);
console.log(person1.greet());

// create object from constructor function
function createCar(make, model) {
    this.make = make;
    this.model = model;
    this.getDetails = function () {
        return `Car: ${this.make} ${this.model}`;
    }
}
const car1 = new createCar("Toyota", "Corolla");
console.log(car1.getDetails());
