/* function randInt(from, to){
    return Math.floor(Math.random()*(to-from+1)+from);
} */

const myModule = require('./21.Module')        // ./으로 파일 지정

for (let i=0; i<5; i++){
    console.log(myModule.area(myModule.randInt(1, 5)));
};
