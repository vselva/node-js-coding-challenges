const string = 'This is Selvakumar';

// true conditions 
console.log(string.match(/^T/)); // starts wit T
console.log(string.match(/r$/)); // ends with r

// false conditions
console.log(string.match(/^t/)); // starts wit t
console.log(string.match(/R$/)); // ends with R
