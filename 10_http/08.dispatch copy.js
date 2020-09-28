const http = require('http');
const url = require('url');
const view = require ('./view/01.first');

let server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    if (pathname === '/'){
        let html = view.first();
        res.end(html);
    } else if (pathname === '/image'){
        fs.readFile('media/Elvis.png', (error, image)=> {
            res.writeHead(200, {'Content-Type' : 'image/png'});
            res.end(image);
        });
    } else if (pathname === '/video'){
        fs.readFile('media/bear.mp4', (error, video)=> {
            res.writeHead(200, {'Content-Type' : 'video/mp4'});
            res.end(video);
        });
    } else{
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
});