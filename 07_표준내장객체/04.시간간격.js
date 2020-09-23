let today = new Date (2020, 9, 23);

let examDay = new Date (2020,12,3)

let diff = examDay.getTime() - today.getTime();
let dDay = diff / (1000 * 60 * 60 * 24);
console.log(`오늘은 수능 D-${dDay}일입니다.`);


/* let before = new Date ('January 31, 1996');

console.log(today.getTime());

let interval = today.getTime() - before.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24));

console.log(`태어나고 ${interval}일 지났습니다.`) */