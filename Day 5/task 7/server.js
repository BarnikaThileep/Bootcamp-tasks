const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    
    switch (req.url) {
        case '/':
            res.writeHead(200);
            res.end('Welcome to the Home Page!');
            break;
        case '/about':
            res.writeHead(200);
            res.end('About Us: We create awesome web applications.');
            break;
        case '/contact':
            res.writeHead(200);
            res.end('Contact Us at contact@example.com');
            break;
        default:
            res.writeHead(404);
            res.end('404 Not Found');
            break;
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
