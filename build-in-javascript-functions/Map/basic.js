
const map = new Map();

map.set('name', 'Selva');
map.set('age', 24);
map.set({ location: 'Chennai' });

console.log('name from Map:', map.get('name'));
console.log(map.has('age') ? 'This Map has age field' : 'This Map has no age field');
console.log(map.has('work') ? 'This Map has work field' : 'This Map has no work field');
console.log('map size:', map.size);

console.log('');
console.log('map deleted:', map.delete('age'));
console.log(map.has('age') ? 'This Map has age field' : 'This Map has no age field');

console.log('');
console.log('Clearing map items with map.clear()');
map.clear();
console.log('map size:', map.size);
