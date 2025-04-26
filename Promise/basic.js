
promise = new Promise((res, rej) => {
    //res('Success!'); // => then method will get executed of this promise object
    rej('Failure!'); // => catch method will get executed of this promise object
});

// consuming the promise
promise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('Done!');
});
