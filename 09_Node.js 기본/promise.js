/* const promise = new Promise((resolve, reject) => {
    // 비동기 처리 코드

    if(true){
        resolve('처리 결과');
    } else {
        reject('오류 메시지');
    }
});
console.log(promise.then(()=>{}));
console.log(promise.catch(()=>{}));

/* promise.then(result => {

}).catch(error => {

}); */ 

const promise = new Promise((resolve, reject) => {
    console.log('첫 번째 비동기 처리');
    resolve('첫 번째 비동기 처리 완료');
});

promise.then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        console.log('두 번째 비동기 처리');
        /* reject('두 번째 비동기 처리 중 오류 발생'); */
        resolve('두 번째 비동기 처리 완료');
    });
}).then(result => {
    console.log(result);

/* throw 'then에서 오류 발생'; */

    return '모든 비동기 처리 완료';
}).then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
