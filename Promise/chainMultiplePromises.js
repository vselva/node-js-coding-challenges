promise = new Promise((resolve, reject) => {
    resolve(2)
});

promise
    .then((data) => {
        console.log(data);
        return data * 2;
    })
    .then((data) => {
        console.log(data);
        return data * 2;
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Finally done!')
    });