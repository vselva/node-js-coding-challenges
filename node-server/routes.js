const fs = require('fs');

let flashMessage = '';

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    const path = './form-data.txt';

    if (url == '/form' && method == 'GET') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<head><title>Enter Form Details</title></head>')
        res.write('<html>');
        res.write('<h1>Form</h1>');
        if (flashMessage) {
            res.write('<p>' + flashMessage + '</p>');
            flashMessage = ''; // Clear the message after displaying it
        }

        res.write('<body><form action="/submit" method="POST">');
        res.write('<input type="text" name="message"> <input type="submit" value="Send">');
        res.write('</form></body>');
        res.write('</html>')
        res.end();
    } else if(url == '/submit' && method == 'POST') {

        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = new URLSearchParams(Buffer.concat(body).toString());
            const message = parsedBody.get('message');
            if (message) {
                const timeStamp = Date.now();
                const finalMessage = `${timeStamp}: ${message}\n`;
                fs.appendFile(path, finalMessage, (err) => {
                    if(err) {
                        console.log('Error writing file. Error: ' + err);
                        flashMessage = 'Error writing file. Error: ' + err;
                        res.writeHead(302, {'Location': '/form'});
                        res.end();
                    } else {
                        console.log('File Write successful!');
                        flashMessage = 'File Write successful!';
                        res.writeHead(302, {'Location': '/form'});
                        res.end();
                    }
                });
            } else {
                flashMessage = 'No message provided!';
                res.writeHead(302, {'Location': '/form'});
                res.end();
            }
        });
    } else {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<h1>Welcome to Node Server!</h1>');
        res.write('<p>Go to <a href="http://localhost:3000/form">localhost:3000/form</a> to view a form</p>');
        res.end();
    }
}

module.exports = {requestHandler};
