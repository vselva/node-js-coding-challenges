// Function that returns a Promise, which resolves after a specified time delay (ms)
function mockAsyncFunctionWithDelay(ms) {
    // Returning a new Promise that resolves after the setTimeout delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(`Resolved after ${ms} milliseconds`); // Resolving the promise with a message
            reject(`Rejected after ${ms} milliseconds`); // Rejectinve the promise with a message
        }, ms);
    });
}

// Async function that demonstrates usage of 'await' for waiting on the delay promise
async function testAsyncAwait() {
    console.log('Start'); // Logs at the start of the function execution
    await mockAsyncFunctionWithDelay(1000) // Waits for the delay function to resolve before moving to the next line
        //.then(console.log)
        //.catch(console.log); 
    console.log('End'); // Logs after the delay is completed
}

// Calling the async function, which returns a Promise
testAsyncAwait()
    .then((msg) => {
        console.log('Test async-await completed: message:', msg); // Logs when the promise from testAsyncAwait is resolved
    })
    .catch((error) => {
        console.log('Error occurred:', error); // Logs if there's an error in the async function or delay
    })
    .finally(() => {
        console.log('Finally block executed'); // Logs after the promise has settled (either resolved or rejected)
    });

