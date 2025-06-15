let user = new Map();

user.set('name', 'Selva');
user.set('age', 24);
user.set({ location: 'Chennai' }, 'location object');
user.set('area', { location: 'Chennai' });

for ( let [key, value ] of user) {
    console.log('key:', key, '& value:', value);
}