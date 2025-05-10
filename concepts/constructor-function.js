// Constructor Function:
// Special type of function used to create & initialize objects 
// called with new keyword
// this is set to point a new object 

function PersonFunction (name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new PersonFunction('Selva', 24);
console.log(person1);
console.log(person1.name);
console.log(person1.age);

// Modern alternartive
class Personclass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
const person2 = new Personclass('Selva', 24);;
console.log(person2);
console.log(person2.name);
console.log(person2.age);
