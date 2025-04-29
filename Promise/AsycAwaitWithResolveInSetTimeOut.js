// Function that returns a Promise, which resolves after a specified time delay (ms)
function delay(ms) {
    // Returning a new Promise that resolves after the setTimeout delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved after ${ms} milliseconds`); // Resolving the promise with a message
        }, ms);
    });
}

// Async function that demonstrates usage of 'await' for waiting on the delay promise
async function testAsyncAwait() {
    console.log('Start'); // Logs at the start of the function execution
    await delay(1000).then(console.log); // Waits for the delay function to resolve before moving to the next line
    console.log('End'); // Logs after the delay is completed
}

// Calling the async function, which returns a Promise
testAsyncAwait()
    .then(() => {
        console.log('Test async-await completed'); // Logs when the promise from testAsyncAwait is resolved
    })
    .catch((error) => {
        console.log('Error occurred:', error); // Logs if there's an error in the async function or delay
    })
    .finally(() => {
        console.log('Finally block executed'); // Logs after the promise has settled (either resolved or rejected)
    });

