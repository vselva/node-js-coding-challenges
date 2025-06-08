const obj = { name: 'Selva', age: 24 };
console.log(obj);

// Check whether field name exists or not
console.log('name' in obj);
console.log('age' in obj);
console.log('non-existing-field' in obj);
