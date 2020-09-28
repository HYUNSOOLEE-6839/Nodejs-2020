/* const http = require('http');
const url = require('url')
const fs = require('fs')

let server = http.createServer((req,res) => {
    let method = req.method;
    if(method === 'GET') {
        fs.readFile('view/10.form.html', 'utf8', (error, html) =>{
            res.end(html);
        });
    } else if (method === 'POST'){
        res.end('<h1>Received Form Data</h1>');
    }
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
}); */

const http = require('http');
const url = require('url');

http.createServer((req,res) => {
    let query = url.parse(req.url, true).query;
    console.log(query.name, query.region);
    // GET 파라메터 출력, localhost:3000?name=Kim&region=Seoul
    res.end(`<h1>${JSON.stringify(query)}</h1>`)
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000')
});