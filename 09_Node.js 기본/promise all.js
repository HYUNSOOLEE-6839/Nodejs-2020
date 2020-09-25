const promise1 = new Promise((resolve, reject) => {
    console.log('promise1');

    resolve('promise1 처리 완료');
});

const promise2 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        console.log('promise2');

        resolve('promise2 처리 완료');
    }, 1000);
});

Promise.all([promise1, promise2]).then(results => {
    console.log(results);
});