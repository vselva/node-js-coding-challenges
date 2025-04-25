const fs = require('fs');

function createDirAsync(dirname) {
    fs.mkdir(dirname, (err) => {
        if (err) {
            console.log('Error creating directory: ' + err);
            return;
        }
        console.log('Directory creation is successful!');
    });
}

function writeFileAsync(path, data) {
    fs.writeFile(path, data, 'utf8', (err) => {
        if (err) {
            console.log('Error writing file: ' + err);
            return;
        }
        console.log('Content write is successful in ' + path);
    });
}

function appendFileAsync(path, data) {
    fs.appendFile(path, data, (err) => {
        if (err) {
            console.log('Error appending file: ' + err);
            return;
        }
        console.log('Content append is successful in ' + path);
    });
}

function fileExists(path) {
    fs.access(path, fs.constants.F_OK, (err) => {
        if (err) {
            console.log('File does not exist: ' + err);
            return;
        }
        console.log('File exists!');
    });
}

function copyFile(src, dest) {
    fs.copyFile(src, dest, (err) => {
        if (err) {
            console.log('Error copying file: ' + err);
            return;
        }
        console.log('Copying file is successful!');
    });
}

function readDirContents(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.log('Error reading directory files: ' + err);
            return;
        }
        console.log('Directory contents:', files);
    });
}

function readFileAsync(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file: ' + err);
            return;
        }
        console.log('============= Contents ==============');
        console.log(data);
        console.log('=========== Contents End ============');
    });
}

function deleteFileAsync(path) {
    fs.unlink(path, (err) => {
        if (err) {
            console.log('Unable to delete the file: ' + err);
            return;
        }
        console.log('File delete successful!');
    });
}

function renameFileAsync(oldPath, newPath) {
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.log('Error renaming file: ' + err);
            return;
        }
        console.log('Renaming file is successful!');
    });
}

// Sample usage
createDirAsync('dir-name');
writeFileAsync('./dir-name/output.txt', 'Sample data to write to the file using fs module in Node.js.\n');
appendFileAsync('./dir-name/output.txt', 'This content will be appended to the existing contents.');
fileExists('./dir-name/output.txt');
copyFile('./dir-name/output.txt', './dir-name/copy-output.txt');
readDirContents('./dir-name');
readFileAsync('./dir-name/output.txt');
renameFileAsync('./dir-name/output.txt', './dir-name/renamed-output.txt');
// deleteFileAsync('./dir-name/output.txt'); // Uncomment to test file deletion
