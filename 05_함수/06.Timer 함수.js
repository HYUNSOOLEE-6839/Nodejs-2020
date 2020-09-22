let today = new Date();
console.log(today);

/* setTimeout(function(){
    console.log('3초 경과');
    today = new Date();
console.log(today);
}, 3000);
 */
let id = setInterval(() => {
    console.log(new Date());
}, 1000);

// 인터벌 정지

/*  #1 
setTimeout(() => {
    clearInterval(id);
}, 2000); */

/*  #2 
setTimeout(function(){
    clearInterval(id);
}, 3000); */

/* #3 
setTimeout(() => {
    console.log('3초 경과')
}, 3000); */