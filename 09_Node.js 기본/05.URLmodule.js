const url = require('url');

let urlSample = 'http://hanbit.co.kr/store/books/look.php?p_code=B4250257160'

let parsedObject = url.parse(urlSample);
console.log(parsedObject);
console.log(parsedObject.query);

console.log(url.format(parsedObject));