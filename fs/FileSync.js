const fs = require('fs');

function readFileSync(path) {
    try {
        // Declare 'data' with const or let to avoid accidental global variable creation
        const data = fs.readFileSync(path, 'utf-8');  // Read the file synchronously
        console.log(data);  // Log the file content
    } catch (err) {
        console.log('Error reading file:' + err);  // If an error occurs, log the error
    }
}

// Call the function and specify the correct file path
readFileSync('./test.txt');  // file exists
console.log('=============================');
readFileSync('./invalidfile.js'); // file does not exists