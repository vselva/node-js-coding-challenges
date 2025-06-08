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
        return files;
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

function renameFileSync(oldPath, newPath) {
    try {
        fs.renameSync(oldPath, newPath);
        console.log('Renaming file is successful!');
    } catch (err) {
        console.log('Error renaming file: ' + err);
    }
}

function deleteFileInDirSync(dir) {
    try {
        setTimeout(() => { 
            let files = readDirContentsSync(dir);
            for(let file of files) {
                path = dir + file;
                console.log(path);
                fs.unlink(path, (err) => {
                    if(err) {
                        console.log('Error in unlink the file: ' + file + ' error: ' + err);
                    } else {
                        console.log('File Delete Successful: ' + file);
                    }
                })
            }
        }, 2000);
        
    } catch (err) {
        console.log('Unable to delete the file: ' + err);
    }
}

createDirSync('dir-name');
console.log('');
writeFileSync('./dir-name/output.txt', 'Sample data to write to the file using fs module in Node.js.\n');
console.log('');
appendFileSync('./dir-name/output.txt', 'This content will be appended to the existing contents.');
console.log('');
fileExists('./dir-name/output.txt');
console.log('');
copyFileSync('./dir-name/output.txt', './dir-name/copy-output.txt');
console.log('');
readDirContentsSync('./dir-name');
console.log('');
readFileSync('./dir-name/output.txt');
console.log('');
renameFileSync('./dir-name/output.txt', './dir-name/renamed-output.txt');
console.log('');
deleteFileInDirSync('./dir-name/'); 
