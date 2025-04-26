// Array destructuring
const arr1 = [1, 2, 3];
const [a, b, c] = arr1;
console.log(`a=${a}, b=${b}, c=${c}`);

// Array destructuring with default values
const arr2 = [1, 2];
const [d = 4, e = 5, f = 6] = arr2;
console.log(`d=${d}, e=${e}, f=${f}`);

// Array destructuring with skipping elements
const arr3 = [1, 2, 3];
const [, s, t] = arr3;
console.log(`s=${s}, t=${t}`);

// Array destructuring with rest operator to collect remaining elements
const arr4 = [1, 2, 3, 4];
const [first, second, ...rest] = arr4;
console.log(`first=${first}, second=${second}, rest=${rest}`);

// Object destructuring
const person1 = {
    name: 'selva',
    age: 30,
    address: { city: 'Chennai', pin: '600001' }
};
const { name, age, address: { city, pin } } = person1;
console.log(`name=${name}, age=${age}, city=${city}, pin=${pin}`);

// Object destructuring with default values
const Person2 = { na: 'selva', ag: 30};
const {na, ag, lo='Bangalore'} = Person2;
console.log(`name=${na}, age=${ag}, location=${lo}`);

// Object destructuring with renaming variables
const person3 = { name: 'selva', age: 18, location: 'Chennai' };
const { name: myName, age: myAge, location: myLocation } = person3;
console.log(`myName=${myName}, myAge=${myAge}, myLocation=${myLocation}`);


// Object destructuring with rest operator to capture remaining properties
const person4 = { pName: 'John', age: 30, city: 'Coimbatore' };
const { pName, ...otherDetails } = person4;
console.log(`pName=${pName}, others=${JSON.stringify(otherDetails)}`);
