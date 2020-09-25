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
    }
}, function(e, results) {
    console.log(results.bufA);
    console.log(results.bufB);
    console.log(results.bufC);
});

// node js 비동기 / 콜백지옥 / promise / async, await 