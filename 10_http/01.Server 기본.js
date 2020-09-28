const http = require('http');
const view = require ('./view/01.first')

let server = http.createServer(function(request,response){
    //console.log(request);
    let html = view.first();
    response.writeHead(200,     // Status Code, OK
        {'Content-Type' : 'text/html'});
    response.end(html)
});

server.listen(3000);


// 02.file이랑 다른 점은 Argument를 줄 수 있음.