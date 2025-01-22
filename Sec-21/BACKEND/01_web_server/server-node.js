const http = require('http')

const hostname = '127.0.0.1';
const port = 3002

const server = http.createServer((req, res) => {
if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Porsche')
    } else if (req.url === '/porsche') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Thanks for ordering Porsche')
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not found')
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
    
});