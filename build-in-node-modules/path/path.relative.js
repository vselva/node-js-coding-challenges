const path = require('path');

console.log(
    'path.relative() - Relative path between two directories:',
    path.relative('user/selva/react',
    'user/selva/node'
));

console.log('');    
console.log(
    'path.relative() - Relative path between two directories:',
    path.relative('user/selva',
    'user/selva/node'
));
