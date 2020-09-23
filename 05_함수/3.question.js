//디지털 시계에 하루동안 3이 표시되는 시간을 초로 환산하면
// 00:00:00 ~ 23:59:59
// 00:30~39 3 13 23 43 53

/* let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if (date.getHours() = 3){
    console.log("o");
} else if (date.getMinutes() = 3){
        console.log("o");
        } else if (date.getSeconds() = 3){
            console.log("o")
        } else {
            console.log("x")
        } */

/* console.log(date.getHours()); 
console.log(date.getMinutes());
console.log(date.getSeconds());
 */


/* let date = new Date();
let hours = date.getHours();
for(let i = 0; i <= 23; i++){
    if(date.getHours() == 3){
    console.log("o");}
    else{
        console.log("x");
    }
} */



/* 
let id = setInterval(() => {
    console.log(new Date());
    for(let i = 0; i <= 60; i++){
    console.log("output");}
}, 1000); */


/* let date = new Date();
switch (new Date().getHours()) {
    case 0:
      hour = "1";
      break;
    case 1:
      hour = "2";
      break;
  }
  console.log(date); */

  let s = 0;
  for (let h =0; h < 24; ++h){
      for (let m = 0; m<60; ++m){
          if(Math.floor(h/10)===3||h%10===3||
          Math.floor(m/10)===3||m%10===3){
              s +=60;
          }
      }
  }
  console.log(s);
  // h = hour . m = minute . s = second