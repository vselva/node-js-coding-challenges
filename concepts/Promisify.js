// Promisify:
// This is a technique used to convert 
// callback-based functions into promise-based functions.

// Call back based functions
/* 
const fs = require('fs');
fs.readFile('invalid.js', 'utf-8', (err, data) => {
    if (err) {
        console.log('1. Error in reading this file. Error: ' + err);
        return;
    }

    console.log(data);
});
*/

// Promisify this call back baed function

// METHOD I
// --------
// Using fs.promises
const fs = require('fs');
const fsPromisify = fs.promises;

// .then .catch method
fsPromisify.readFile('invalid-file.js', 'utf-8')
    .then((data) => {
        console.log(data);
    }).catch((err) =>  {
        console.log('2. Error in reading this file: Error: ' + err);
    });

// async await method in try catch block
(async () => {
    try {
        const data = await fsPromisify.readFile('invalid-file.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.log('3. Error in reading file. Error: ' + err);
    }
    
})();

// METHOD II
// ---------
// custom promisification approach.
function promisifyReadFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) 
                reject(err);
            else
                resolve(data); 
        });
    });
}

promisifyReadFile('invalid-file.txt')
    .then(console.log)
    .catch((err) => {
        console.log('4. Error in reading file. Error: ' + err);
    });

promisifyReadFile('test.txt')
    .then(console.log)
    .catch((err) => {
        console.log('4. Error in reading file. Error: ' + err);
    });

// METHOD III
// ----------
// with the module util - buildin node module
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
readFileAsync('test.txt', 'utf-8')
    .then(console.log)
    .catch(console.log);