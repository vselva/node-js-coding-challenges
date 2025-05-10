// The Nullish Coalescing Operator (??) in JavaScript is used 
// to return the right-hand operand when the left-hand operand is null or undefined

let user = null;
let name = user ?? "Guest"; // "Guest"
console.log(name);

user = "Selva";
name = user ?? "Guest"; // "Selva"
console.log(name);

// Nullish Coalescing Operator (??) be chained
user = null;
name = null;
let displayName = user ?? name ?? "Anonymous";
console.log(displayName); // "Anonymous"