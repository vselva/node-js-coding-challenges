// async function always returns promises only
async function basicAsycAwait() {
    let data = await Promise.resolve('Promise Resolved.');
    console.log(data);
    // return 'success!';
    throw ('test Error');
}

// Direct call with .then/.catch
basicAsycAwait()
    .then(console.log)
    .catch(console.log)
    .finally(console.log('Finished!'));

// Alternate method using a parent async function with try/catch
async function parent() {
    try {
        await basicAsycAwait();
    } catch (err) {
        console.log('Error in basicAsyncAwait function. Error: ' + err);
    } 
}
parent().finally(console.log('Finished!!')); // Finally is not possible in the async function like try/catch
