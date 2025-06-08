
const array = [1, 2, 3, 4, 5];
const [ first, second, ...restOfArray ] = array;
console.log('org array:', array, 'first:', first, 'second:', second, ' rest of array items:', restOfArray);