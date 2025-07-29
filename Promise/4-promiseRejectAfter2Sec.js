prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Rejected after two seconds!");
    }, 2000);
});

prom.then(console.log)
    .catch(console.log)
    .finally(() => {
        console.log("Finally done!");
    });
