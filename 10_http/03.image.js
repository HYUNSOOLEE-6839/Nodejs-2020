const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('media/Elvis.png', (error, image)=> {
        res.writeHead(200, {'Content-Type' : 'image/png'});
        res.end(image);
    });
});

server.listen(3000);


// img 파일이기에 utf-8 사용 x , html은 img로 변경.