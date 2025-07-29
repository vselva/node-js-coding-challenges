const promise1 = Promise.resolve("resolved immediately!");

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("rejected after two seconds!");
    }, 2000);
});

Promise.allSettled([promise1, promise2]).then((results) => {
    console.log(results);
});
// .catch(console.log);  // Not required for allSettled
