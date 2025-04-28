
const http = require('http');
const { requestHandler } = require('./routes.js');
const PORT = 3000;

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log('Listening Port 3000');
});
