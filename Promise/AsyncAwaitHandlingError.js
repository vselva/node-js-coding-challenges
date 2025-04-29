// ======================== Preferred method - try/catch blocks ========================

// Async function to demonstrate successful promise resolution
async function asyncAwaitResolve() {
    try {
        const data = await Promise.resolve('Promise Resolved');
        console.log('Data: ' + data);
    } catch (err) {
        console.log('Error: ' + err);
    }
}
asyncAwaitResolve();

// Async function to demonstrate promise rejection handling
async function asyncAwaitReject() {
    try {
        const data = await Promise.reject('Promise Rejected');
        console.log('Data: ' + data);
    } catch (err) {
        console.log('Error: ' + err);
    }
}
asyncAwaitReject(); 


// ============================== Handling error in the calling function with then/catch blocks ===========================

// Async function demonstrating return value after resolving a promise
async function asyncAwaitResolveWithReturn() {
    const data = await Promise.resolve('Promise Resolved');
    console.log('Data: ' + data);
    return 'success!';
}
asyncAwaitResolveWithReturn()
    .then(result => {
        console.log('Result from async function: ' + result);
    })
    .catch(err => {
        console.log('Error: ' + err);
    });

// Async function demonstrating promise rejection and handling the rejection with .then() and .catch()
async function asyncAwaitRejectWithReturn() {
    const data = await Promise.reject('Promise Rejected');
    console.log('Data: ' + data);
    return data;  // Just for demonstration purposes
}
asyncAwaitRejectWithReturn()
    .then(data => {
        console.log('Data: ' + data);
    }).catch(err => {
        console.log('Error: ' + err);
    });
