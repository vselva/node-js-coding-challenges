
async function basicAsycAwait() {
    data = await Promise.resolve('Promise Resolved.');
    console.log(data);
    return 'success!';
}

basicAsycAwait().then(console.log);