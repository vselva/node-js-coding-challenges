let userMap = new Map();

userMap.set('name', 'Selva');
userMap.set('age', 24);

const userObj = Object.fromEntries(userMap);

console.log('user map:', userMap);
console.log('user object:', userObj);

