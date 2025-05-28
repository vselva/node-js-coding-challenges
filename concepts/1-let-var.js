// Initial Value 
function intialvalue() {
    var v;
    let l;
    console.log('Initial value of var variable: ' + v); // undefined
    console.log('Initial value of let variable: ' + l); // undefined
}
intialvalue();

// Hoisting: Moving declarations (not initializations) to the top of the current scope
//
// Access Variable before declaration: 
function canAccessVariableBeforeDeclaration() {
    console.log(v); // undefined
    var v = 10; // This declaration only will be moved to top of the scope 
                // (ie., this function scope) and so initialized to undefined
                // Please note that initializatin (10) will not be hoisted
    try {
        console.log(l); // TDZ - Temporal Dead zone - can not access let variable before declaration 
        let l = 10;     // So it throws error - ReferenceError: Cannot access 'l' before initialization
                        // This is hoisted but enters in to TDZ 
    } catch (err) {
        console.log('Error in let variable access before declaration: Error: ' + err)
    }
}
canAccessVariableBeforeDeclaration();

// Redeclare 
function reDeclare() {
    var v1 = 10;
    var v1 = 20; // accepted
    
    try {
        let l1 = 10;
        let l1 = 20; // not accepted
    } catch (err) {
        console.log('Error in re declaring let variable. Error: ' + err.message);
    }
}
reDeclare();
