const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved after two seconds!");
        // reject('Rejected after two seconds!');
    }, 2000);
});

timeout
    .then(console.log) // equivalent to (data) => { console.log(data) };
    .catch(console.log) // equivalent to (data) => { console.log(data) };
    .finally(() => {
        console.log("Finally done!");
    });
