const selva = {name: 'Selva', age: 30};

console.log('');
console.log('console.log(console):');
console.log('=====================');
console.log(console);

console.log('');
console.log('console.assert:');
console.log('==============');
console.assert(true, 'Error Message'); // Error message wont come
console.assert(false, 'Error Message'); // Error message will come 

console.log('');
console.log('console.table:');
console.log('==============');
console.table(selva);

console.log('');
console.log('console.group(label):');
console.log('=====================');
// this works well in browser only 
console.group('User Info:');
console.log('Name: Selva');
console.log('Age: 24');
console.group('Education:');
console.log('Degree: BE');
console.log('Grade: A');
console.groupEnd(); 
console.groupEnd(); 

console.log('');
console.log('console.dir(object):');
console.log('=====================');
console.dir(selva);

console.log('');
console.log('console.count("event"):');
console.log('=======================');
console.count('click1');
console.count('click1');
console.count('click2');
console.count('click2');


console.log('');
console.log('console.time() & console.timeLog():');
console.log('=======================');
console.time();
console.timeLog();
console.timeLog();
console.timeLog();
// with label
console.log('');
console.time('myTimer');
console.timeLog('myTimer');
console.timeLog('myTimer');
console.timeLog('myTimer');

console.log('');
console.log('console.trace():');
console.log('================');
const sum = (a, b) => {
    const c = a + b;
    console.trace('before returning the sum.');
    return c;
}
sum(1, 2);

console.log('');
console.log('console.log with CSS:');
console.log('=====================');
console.log("%cThis is css styled!", 'color: red; font-size: 16px;'); // this will work only in browser 
