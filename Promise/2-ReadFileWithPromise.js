const fs = require("fs");

// Promise to handle reading a file
const fileReadPromise = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) reject(err); // Reject on error
            else resolve(data); // Resolve with file data on success
        });
    });
};

// Call the function and handle the promise
fileReadPromise("./test.txt")
    .then((data) => {
        console.log("File read is successful. Data: " + data);
    })
    .catch((err) => {
        console.log("File read failed. Error: " + err);
    })
    .finally(() => {
        console.log("Finally done!");
    });
