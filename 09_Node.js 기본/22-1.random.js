const myModule = require('./21-1.Module')        // ./으로 파일 지정

for (let i=0; i<6; i++){
    console.log(myModule.area(myModule.randInt(1, 6)));
};