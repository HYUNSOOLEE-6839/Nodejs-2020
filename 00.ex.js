/* let input = 32;
if (input %2 ==0){
    console.log("짝수입니다!");
}

if (input %2 ==1){
    console.log("홀수입니다!");
} */

/* let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
 */

 /* let date = new Date();

 if(date.getHours() < 12){
     console.log("오전입니다.");
 }

 if(12 <= date.getHours()){
    console.log("오후입니다.");
} */

let date = new Date();
let hours = date.getHours();

if(hours<11){
    console.log("아침 먹을 시간입니다.");
} else{
    if (hours < 15) {
        console.log("점심 먹을 시간입니다.");
    } else {
        console.log("저녁 먹을 시간입니다.");
    }
}