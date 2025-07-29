//direct promise
promise1 = new Promise((res, rej) => rej("Failure!"));
promise1
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Done!"));

//function that returns promise
promise2 = function () {
    return new Promise((res, rej) => res("Success"));
};

promise2()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Done!"));
