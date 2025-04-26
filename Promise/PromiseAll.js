promise1 = new Promise((resolve) => {
    resolve(1);
});

promise2 = new Promise((resolve) => {
    resolve(2);
});

promise3 = Promise.resolve(3); // with Promise static method

Promise.all([ promise1, promise2, promise3])
    .then((data) => {
        console.log('All Promises resoves successfully! Data: ', data);
    })
    .catch((error) => {
        console.log('Not all promises resolved! Error: ', error);
    })
    .finally(() => {
        console.log('Finally done!');
    })
