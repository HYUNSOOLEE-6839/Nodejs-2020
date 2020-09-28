const http = require('http');

let server = http.createServer(function(request,response){
    response.writeHead(302,     // Status Code, Found
        {'Location' : 'http://www.hanbit.co.kr'});
        response.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
});
// response 객체에 자리, header 값에 의미있는 정보를 주면 동작