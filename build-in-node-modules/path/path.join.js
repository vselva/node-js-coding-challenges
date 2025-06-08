const path = require('path');

const pathJoined = path.join('/users', 'selva', 'path.txt');
console.log(
    'path.join() joins the path segments in to platform specific separator (back slash or slash):', 
    '\n\n',
    pathJoined
); // \users\selva\path.txt for windows machine 

console.log('');
console.log(path.join('folder', 'subfolder', 'file.txt'));
