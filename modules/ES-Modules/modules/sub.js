// Named export
// exporting in a separate line - arrow function 
/*
const sub = (a, b) => {
    return a - b;
};
export { sub }; 
*/

// exporting in a separate line - regular function
/*
const sub = function(a, b) {
    return a - b;
};
export { sub }; 
*/

// exporting in the same line - arrow function 
/*
export const sub = (a, b) => {
    return a - b;
}
*/

// exporting in the same line - regular function 
export function sub(a, b) {
    return a - b;
}
