const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('media/bear.mp4', (error, video)=> {
        res.writeHead(200, {'Content-Type' : 'video/mp4'});
        res.end(video);
    });
});

server.listen(3000);

// * MIME 타입 제대로 맞춰 보내기 (audio/mp3, video/mp4, text/html)