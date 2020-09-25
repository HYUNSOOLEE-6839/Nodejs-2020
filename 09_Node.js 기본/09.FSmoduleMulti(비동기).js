/* // 여러 개 파일 비동기적으로 읽기

const fs = require('fs')

fs.readFile('tmp/a.txt', 'utf8', (e, bufA) => {
    console.log(bufA);
});
fs.readFile('tmp/b.txt', 'utf8', (e, bufB) => {
    console.log(bufB);
});
fs.readFile('tmp/c.txt', 'utf8', (e, bufC) => {
    console.log(bufC);
});
fs.readFile('tmp/async.txt', 'utf8', (e, bufD) => {
    console.log(bufD);
});
fs.readFile('tmp/sync.txt', 'utf8', (e, bufE) => {
    console.log(bufE);
});
fs.readFile('tmp/txt.txt', 'utf8', (e, bufF) => {
    console.log(bufF);
});

// 순서에 대한 보장이 없으며, 이를 극복하는 방법은
fs.readFile('tmp/a.txt', 'utf8', (e, bufA) => {
    fs.readFile('tmp/b.txt', 'utf8', (e, bufB) => {
        fs.readFile('tmp/c.txt', 'utf8', (e, bufC) => {
            fs.readFile('tmp/async.txt', 'utf8', (e,bufD)=> {
                fs.readFile('tmp/async.txt', 'utf8', (e,bufE)=> {
                    fs.readFile('tmp/async.txt', 'utf8', (e,bufF)=>{
                        console.log(bufA);
                        console.log(bufB);
                        console.log(bufC);
                        console.log(bufD);
                        console.log(bufE);
                        console.log(bufF);
                    });
                });
            });
        });
    });
}); */
// 콜백지옥
// 콜백지옥 극복방법 - async 모듈 사용

const async = require('async');

const fs = require('fs')

// 순서보장이 안 되는 문제를 async 모듈을 사용하여 해결

async.parallel({
    bufA:function(callback) { 
        fs.readFile('tmp/a.txt', 'utf8', callback);        
    },
    bufB : callback => {
        fs.readFile('tmp/b.txt', 'utf8', callback);        
    },
    bufC : callback => {
        fs.readFile('tmp/c.txt', 'utf8', callback);        
    },
    bufD: callback => {
        fs.readFile('tmp/async.txt', 'utf8', callback);        
    },
    bufE: callback => {
        fs.readFile('tmp/sync.txt', 'utf8', callback);        
    },
    bufF: callback => {
        fs.readFile('tmp/txt.txt', 'utf8', callback);        
    }
}, function(e, results) {
    console.log(results.bufA);
    console.log(results.bufB);
    console.log(results.bufC);
    console.log(results.bufD);
    console.log(results.bufE);
    console.log(results.bufF);
});