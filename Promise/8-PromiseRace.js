const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved one seconds!");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved after two seconds!");
    }, 2000);
});

// Promise.race will take whichever promise settles first (resolve or reject).
Promise.race([promise1, promise2])
    .then(console.log)
    .catch(console.log)
    .finally(() => {
        console.log("finally done!");
    });
