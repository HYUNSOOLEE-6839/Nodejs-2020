/* function callFiveTimes(callback){
    for (let i = 0 ; i< 5; i++){
        callback();
    }
}
callFiveTimes(function(){
    console.log('함수 호출');
}); */

function callFiveTimes(callback){
    for (let i = 0 ; i< 5; i++){
        callback();
    }
}

callFiveTimes(function(){
    console.log('호출')
});