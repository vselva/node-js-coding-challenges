const user = { name: "Selva", age: 30 };
console.log('for...in');
for(key in user) {
    console.log(key, '=', user[key]);
}

console.log('');
console.log('Object.entries[user]:');
console.log(Object.entries(user));

console.log('');
console.log('[key, value] of Object.entries(obj):');
for([key, value] of Object.entries(user)) {
    console.log(key, '=', value);
}
