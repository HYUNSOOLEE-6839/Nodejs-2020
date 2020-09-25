// process.on('____',function(){
// });
// , 전까지가 event, 후로는 event handler.

// exit 이벤트 연결
process.on('exit', function(code) {
    console.log('프로세스가 종료되었습니다.')
    console.log('exit code:', code);
});

// uncaughtException 이벤트 연결
process.on('uncaughtException', function(error) {
    console.log('예외가 발생했습니다.');
    console.log('uncaughtException 매개변수:\n', error);
});

// 임의의 이벤트 연결
process.on('message', function(){
    console.log('message event');
});

// 예외 강제 발생
error.error.error();