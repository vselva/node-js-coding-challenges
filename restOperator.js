// Capture first few args and rest to others
function captureFewArgs(f, s, t, ...others) {
    console.log('f: ' + f + ' s: ' + s + ' t: ' + t + ' others: ' + others);
    console.log('-'.repeat(80));
}
captureFewArgs('one', 'two', 'three', 'four', 'five', 'six');

// same in other way
const [f, s, t, ...others] = ['one', 'two', 'three', 'four', 'five', 'six']
console.log('f: ' + f + ' s: ' + s + ' t: ' + t + ' others: ' + others);
console.log('-'.repeat(80));

// multiple elements in to array 
function addArguments(...inArry) {
    let sum = 0;

    for(let arg of inArry) {
        sum += arg;
    }
    return sum;
}
console.log('Adding two arguments: ' + addArguments(1, 2));
console.log('Adding three arguments: ' + addArguments(1, 2, 3));
console.log('Adding fieve arguments: ' + addArguments(1, 2, 3, 4, 5));
console.log('-'.repeat(80));

// Capture Onject Props and rest to a object
function captureObjectProps({name, age, ...obj}) {
    console.log('name: ' + name);
    console.log('age: ' + age);
    console.log('Remaining Props in the object: ' + JSON.stringify(obj));
}
let Person = {name: 'selva', age: 18, location: 'chennai', nationlity: 'Indian'};
captureObjectProps(Person);
console.log('-'.repeat(80));

// same in other way 
const {name, ...oth} = Person;
console.log('name: ' + name);
console.log('Remaining Props in the object: ' + JSON.stringify(oth));
console.log('-'.repeat(80));