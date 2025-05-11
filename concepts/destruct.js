const array = [1, 2, 3, [4, 5]];

console.log('----- Destructuring  array -----')
const [a, b, c, d, e] = [ ...array ];
console.log(a, b, c, d, e); // nested array will not be destructured
 
console.log('----- Destructuring nested array -----')
const [aa, bb, cc, [dd, ee] ] = [ ...array ];
console.log(aa, bb, cc, dd, ee); // nested array will  be destructured 

const obj = { 
    name: 'Selva', 
    age: 12,
    contacts: { email: 'vselva@gmail.com', phone: 9876543210 }
};

console.log('----- Destructuring Objects -----')
const { name, age, contacts } = { ...obj };
console.log(name, age, contacts);

console.log('----- Destructuring Nested Objects -----')
const { name: name1, age: age1, contacts: { email, phone} } = { ...obj };
console.log(name1, age1, email, phone);
