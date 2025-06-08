const array = [ 1, 2, 3, [4, 5, [6, 7, 8]]];

let flatted = array.flat();
console.log(flatted);

flatted = array.flat(2);
console.log(flatted);