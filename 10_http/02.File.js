const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('view/02.any.html', 'utf8', (error, html)=> {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(html);
    });
});

server.listen(3000)

// 사이트에 최초 복붙하는 index.html 복붙 가능.
// 이후 01.server 기본의 양식으로 만들면 됨.

// 순서 1. createServer -> 2. readFile(Async. 콜백함수)
// 3. response 4. server.listen