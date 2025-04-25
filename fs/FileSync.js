const fs = require('fs');

function createDirSync(dirname) {
    try {
        fs.mkdirSync(dirname);
        console.log('Directory creation is successful!');
    } catch (err) {
        console.log('Error creating directory: ' + err);
    }
}

function writeFileSync(path, data) {
    try {
        fs.writeFileSync(path, data, 'utf8');
        console.log('Content write is successful in ' + path);
    } catch (err) {
        console.log('Error writing file: ' + err);
    }
}

function appendFileSync(path, data) {
    try {
        fs.appendFileSync(path, data);
        console.log('Content append is successful in ' + path);
    } catch (err) {
        console.log('Error appending file: ' + err);
    }
}

function fileExists(path) {
    try {
        fs.accessSync(path, fs.constants.F_OK);
        console.log('File exists!');
    } catch (err) {
        console.log('File does not exist: ' + err);
    }
}

function copyFileSync(src, dest) {
    try {
        fs.copyFileSync(src, dest);
        console.log('Copying file is successful!');
    } catch (err) {
        console.log('Error copying file: ' + err);
    }
}

function readDirContentsSync(dir) {
    try {
        const files = fs.readdirSync(dir);
        console.log('Directory contents:', files);
    } catch (err) {
        console.log('Error reading directory files: ' + err);
    }
}

function readFileSync(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        console.log('============= Contents ==============');
        console.log(data);
        console.log('=========== Contents End ============');
    } catch (err) {
        console.log('Error reading file: ' + err);
    }
}

function deleteFileSync(path) {
    try {
        fs.unlinkSync(path);
        console.log('File delete successful!');
    } catch (err) {
        console.log('Unable to delete the file: ' + err);
    }
}

function renameFileSync(oldPath, newPath) {
    try {
        fs.renameSync(oldPath, newPath);
        console.log('Renaming file is successful!');
    } catch (err) {
        console.log('Error renaming file: ' + err);
    }
}

// Sample usage
createDirSync('dir-name');
writeFileSync('./dir-name/output.txt', 'Sample data to write to the file using fs module in Node.js.\n');
appendFileSync('./dir-name/output.txt', 'This content will be appended to the existing contents.');
fileExists('./dir-name/output.txt');
copyFileSync('./dir-name/output.txt', './dir-name/copy-output.txt');
readDirContentsSync('./dir-name');
readFileSync('./dir-name/output.txt');
renameFileSync('./dir-name/output.txt', './dir-name/renamed-output.txt');
// deleteFileSync('./dir-name/output.txt'); // Uncomment to test file deletion
