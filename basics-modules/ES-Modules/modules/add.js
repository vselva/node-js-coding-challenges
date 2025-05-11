// Default export - Export add as default
const add = (a, b) => {
    return a + b;
};
export default add;

// Named export - Export sub with separate line
const sub = (a, b) => {
    return a - b;
};
export { sub }; 

// // Named export (inline) - Export mul in the function declaration itself
export const mul = (a, b) => {
    return a * b;
}; 
