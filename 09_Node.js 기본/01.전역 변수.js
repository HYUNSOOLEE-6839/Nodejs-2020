const path = require('path');

console.log(__dirname);
console.log(__filename);

let filename = path.join(__dirname, 'tmp', 'textfile.txt');
let dirtyname = path.join(__dirname, '..', 'tmp', 'textfile.txt')
console.log(filename);
console.log(dirtyname);