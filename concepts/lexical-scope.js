
function outer() {
    let outVar = 'Selva';

    function inner() {
        console.log('outVar: ' + outVar); 
        // Here the inner function has acccess to outer function's variable 'outVar'
        // This is called lexical scopping 
    }

    inner();
}

outer();

