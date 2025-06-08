// A prototype is a hidden object 
// that every JavaScript object has. 
// It acts as a blueprint or fallback for property and method lookups.

// Base object (acts like a template or prototype) 
const personPrototype = {
    phone: 9876543210,
    greet () {
        console.log(`Hello, I'm ${this.name} and I am ${this.age} years old!`);
    }
};

/////// One way to create prototype with __proto__ ///////
const me = {
    name: 'Selva',
    age: 24,
    __proto__: personPrototype
}

console.log('');
console.log('One way to create prototype with __proto__')
me.greet();

/////// Second way to create prototype with Object.create ///////
// Create a new object using personPrototype as the prototype
const selva1 = Object.create(personPrototype); 
console.log(selva1); // this will display as {} since prototye props will not get displayed

// Add own properties
selva1.name = 'Selvakumar';
selva1.age = 24;

// access protytpe member and methods
console.log('');
console.log('Second way to create prototype with Object.create')
selva1.greet();
console.log(selva1.phone);

// getPrototypeOf(obj)
console.log('');
console.log('Proto Type with getPrototypeOf(obj):');
console.log(Object.getPrototypeOf(selva1));

/////// Third way to create prototype with constructor function ///////
// Initialize Base Object
function ConstructorFunction (name) 
{ 
    this.name = 'Selva';
    this.age = 24;
};

function ProtoConstructorFunction() {
    this.phone = 9876543210,
    this.greet = function () {
        console.log(`Hello, I'm ${this.name} and I am ${this.age} years old!`);
    }
}

// add prototype properties
// ConstructorFunction.prototype.phone ='9876543210';
// ConstructorFunction.prototype.greet = function () {
//     console.log(`Hello, I'm ${this.name}. I am ${this.age} years old.`);
// }

// or we can assign another object 
// ConstructorFunction.prototype = personPrototype;

// or we can initialize a construction function and assigne to prototype
ConstructorFunction.prototype = new ProtoConstructorFunction();

// crete new object selva
const selva2 = new ConstructorFunction('Selva');

// console log the obj, which will not show the prototype properies
console.log(selva2);

console.log('');
console.log('Third way to create prototype with Object.create')
selva2.greet();
console.log(selva2.name);

