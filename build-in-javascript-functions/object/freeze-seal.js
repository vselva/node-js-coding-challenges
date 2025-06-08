// freeze
// This prevents adding, deleting, or modifying properties.
const person = {
  name: "John",
  age: 30
};

Object.freeze(person);

person.name = "Jane";  // This will not work
person.city = "New York";  // This will also not work

console.log(person.name);  // John
console.log(person.city);  // undefined

// seal
// This prevents new properties from being added to an object
// the values of existing properties can be modified
const car = {
  make: "Toyota",
  model: "Camry"
};

Object.seal(car);

car.make = "Honda";  // This will work
car.color = "red";  // This will not work

console.log(car.make);  // Honda
console.log(car.color);  // undefined
