// Async/Await are keywords
// They work on top of Promises
// They allow writing async code in a sync-like manner

// 'async' is used to define an async function 
// 'await' (inside async functions) pauses the execution until the Promise resolves

// Automatically wrapped in Promise.resolve()
// Example using 'async' (returns a Promise automatically)

async function fetchData1() {
    return { data: 'sample2' }; 
}

// Same behavior without 'async' (manual Promise)
function fetchData2() {
    return new Promise((resolve) => resolve({ data: 'sample2' }));
}

// Calling both functions and handling their results
fetchData1().then(console.log);  // Output: { data: 'sample2' }
fetchData2().then(console.log);  // Output: { data: 'sample2' }

// Throws an error, which automatically wraps in Promise.reject()
// Example using 'async' (returns a Promise reject automatically)
async function fetchData3() {
    throw new Error('Failure in FetchindData')
}

fetchData3().then(console.log).catch((err) => console.log('Error in Fetching Data: ' + err));