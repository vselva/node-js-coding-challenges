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

// .then(console.log) automatically passes the resolved value to console.log(data).
// Same as writing: .then((data) => { console.log(data); })
