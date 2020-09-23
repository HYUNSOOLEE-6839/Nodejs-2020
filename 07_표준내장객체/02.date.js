// 현재 시각
let date = new Date();
console.log(`현재 시간은 ${date}입니다.`);

// 유닉스 타임(1970.1.1 00시 00분 00초부터 경과한 밀리초)
let unixDate = new Date(1600841000000)
console.log(`unixDate 시간은 ${unixDate}입니다.`);

// 문자열 기반 Date 객체 생성
let dateStr = new Date("September 23, 2020 14:47:00")
console.log(`dateStr시간은 ${dateStr}입니다.`);

// 시간 요소(년, 월 -1, 일, 시간, 분, 초, 밀리초) 기반 Date 객체
let dateFacto = new Date (2020, 9-1, 23, 14, 48);
console.log(`dateFacto 시간은 ${dateFacto}입니다.`)