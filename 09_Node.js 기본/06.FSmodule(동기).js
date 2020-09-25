// CRUD :
// FILE - 생성 / 조회 / 수정 / 삭제
// => 내용 / FILE 자체 


//동기적으로 파일 읽기

const fs = require('fs');

//Binary data 읽기
let buffer = fs.readFileSync('tmp/textfile.txt')
console.log(buffer);
console.log(buffer.toString());

// Text data 읽기
let text = fs.readFileSync('tmp/textfile.txt', 'utf8');
console.log(text);

/* const file = fs.readFileSync('textfile.txt')
console.log(file);
console.log(file.toString()); */