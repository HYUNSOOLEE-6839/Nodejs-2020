let date = new Date();
/* console.log(today); 
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
 */
// 오전 오후 구분하기

if(date.getHours()<12){
    console.log("오전입니다.");
}
if(12<=date.getHours()){
    console.log("오후입니다.");
}

/* let today = new Date();
console.log(today); 
console.log(today.toLocaleString());
console.log(today.toISOString);  */

/* const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
let date = moment().format('YYYY-MM-DD HH:MM:SS');
console.log(date); */