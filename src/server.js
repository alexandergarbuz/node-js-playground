import { createServer } from 'node:http';
import dotenv from 'dotenv';

dotenv.config();

const hostname = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

const contentTypeHeader = 'Content-Type';
const contentType = 'application/json';

const server = createServer(processRequest);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
function processRequest(req, res) {

    console.log(`Requested by ${req.method} for URL ${req.url}`);

    let bodyValue = '';
    let statusCode = 200;

    if (req.method === 'GET') {
        if (req.url === '/') {
            bodyValue = 'Root';
        } else if (req.url.startsWith('/about')) {
            bodyValue = 'About';
        } else if (req.url.startsWith('/contact')) {
            bodyValue = 'Contact Information';
        } else {
            statusCode = 404;
            bodyValue = 'Page not found';
        }
    } else if (req.method === 'POST') {
        bodyValue = 'POST request handler is not defined yet';
    } else {
        statusCode = 405;
        bodyValue = 'Method is not allowed';
    }


    res.statusCode = statusCode;
    res.setHeader(contentTypeHeader, contentType);

    const json = JSON.stringify({
        requestMethod: req.method,
        requestedUrl: req.url,
        statusCode: res.statusCode,
        responseBody: bodyValue
    }, null, 4);

    console.log(json);
    res.end(json);


}
