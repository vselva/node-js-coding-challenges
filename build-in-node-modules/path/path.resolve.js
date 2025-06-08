const path = require('path');

console.log(
    'path.resolve() function converts sequence of path segments to absolution path:',
    'Also resolves . and .. in to normalized path\n\r',
    path.resolve('/user', 'selva', '../', './', 'selva', 'file.txt')
);