let date = new Date();

// 현재 날짜에서 100일 더하기
console.log(date.toDateString());
date.setDate(date.getDate() + 100);
console.log(date.toDateString());