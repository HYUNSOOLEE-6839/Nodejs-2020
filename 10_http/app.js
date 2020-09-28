const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const view = require('./view/index');

http.createServer(function(req, res) {
    let pathname = url.parse(req.url).pathname;
    switch(pathname) {
    case '/':
        fs.readdir('data', function(error, filelist) {
            let list = '';
            for (let file of filelist) {
                let filename = file.substring(0, file.length-4);
                list += `<li><a href="/?id=${filename}">${filename}</a></li>`;
            }
            let html = view.index(list);
            res.end(html);
        });
        break;
    case '/':
        fs.readdir('data', function(error, )
    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
}); 


/*         if (pathname === '/'){
            let list = '';
            res.end(list);
        } else if (pathname === '/CSS'){
            fs.readFile('data/CSS.txt', (error, text) =>{
                res.writeHead(200, {'content-Type' : 'text/html'})
                res.end(html);
            })
        } */