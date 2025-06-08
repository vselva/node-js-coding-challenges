
const array = [200, 300, 400, 500];
console.log('Initial array:', array);

console.log('');
console.log('push');
const pushed = array.push(600); // added 6 at last position 
console.log(pushed); // new length
console.log(array); // updated array 

console.log('');
console.log('pop');
const poped = array.pop(); // removed last element
console.log(poped); // removed char
console.log(array); // updated array 

console.log('');
console.log('unshift');
const unshifted = array.unshift(100); // add the first element 
console.log(unshifted); //new length
console.log(array); // updated array 

console.log('');
console.log('shift');
const shifted = array.shift(); // renove the first element 
console.log(shifted); // renoved char 
console.log(array); // updated array 
