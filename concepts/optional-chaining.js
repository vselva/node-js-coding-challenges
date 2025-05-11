const obj = { 
    name: 'Selva', 
    age: 12, 
    greet() {
        console.log('Hi ' + this.name);
    },
    contacts: { email: 'vselva@gmail.com', phone: 9876543210 }
};

console.log('----------- Accessing Nested Properties ----------');
console.log(obj.contacts?.email);
console.log(obj.invalid?.email); // prints undefined, but will not throw error with optional chaining
try {
    console.log(obj.invalid.email);
} catch (err) {
    console.log('Error in accessing non existing field in a obj: ' + err);
}

console.log('----------- Optional Functional Call ----------');
obj.greet?.();
obj.invalid?.();
try {
    obj.invalid();
} catch (err) {
    console.log('Error in accessing non existing function in a obj: ' + err);
}
