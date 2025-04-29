async function basicAsycAwait() {
    let data = await Promise.resolve('Promise Resolved.');
    console.log(data);
    return 'success!';
}

// Direct call with .then/.catch
basicAsycAwait()
    .then(console.log)
    .catch(console.log);

// Alternate method using a parent async function with try/catch
async function parent() {
    try {
        await basicAsycAwait();
    } catch (err) {
        console.log('Error in basicAsyncAwait function. Error: ' + err);
    } 
}
parent();
