// Mergint objects
const target = { name: 'Selva' };
const source1 = { name: 'Selvakumar', age: 24 };
const source2 = { name: 'Selvakumar V', phone: 9876543210 }; // Same filed will get overwritten 

const assigned = Object.assign(target, source1, source2);
console.log(assigned);

// Shallow Cloning
const shallowCloned = Object.assign({}, source1, source2);
console.log(shallowCloned);
