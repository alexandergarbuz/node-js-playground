const { createServer } = require('node:http');
require('dotenv').config();
const hostname = process.env.HOST;
const port = process.env.PORT;
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World!!!</h1>');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
