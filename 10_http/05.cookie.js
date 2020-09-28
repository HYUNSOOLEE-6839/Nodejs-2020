const http = require('http');
// const view = require ('./view/01.first')

let server = http.createServer(function(request,response){
    console.log(request.headers.cookie);
    let cookie = request.headers.cookie;
    response.writeHead(200, {    // Status Code, OK
        'Content-Type' : 'text/html',
        'Set-Cookie': ['breakfast = toast', 'lunch = pizza', 'dinner = chicken']
    });
    response.end(`<h1>${cookie}</h1>`);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
});


// 02.file이랑 다른 점은 Argument를 줄 수 있음.