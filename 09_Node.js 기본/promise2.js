const promise = new Promise((resolve, reject) => {
    let succeed = false;

    console.log('처리중')
    succeed = true;

    if (succeed) {
        resolve('처리결과');
    } else {
        reject('오류 메시지');
    }
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
