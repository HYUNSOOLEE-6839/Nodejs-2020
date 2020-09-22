// Array 생성
let cars = ["Saab", "Volvo", "BMW"];
let persons = new Array("John", "Paul", "Mary", "Kent");
console.log(cars, persons);

console.log(cars.length, persons.length);
cars.sort(); // 알파벳 순서대로 정렬.
console.log(cars);

// 맨 마지막 엘리먼트
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length - 1]);

let html = '';
html += '<ul>\n';
for(let fruit of fruits){
    html += '\t<li>' + fruit + '<li>\n';
}
html += '</ul>\n'
console.log(html);

fruits[fruits.length] = "Cherry"; // 문자열 변경
console.log(fruits.join(" - "));

let popItem = fruits.pop(); // 제일 끝에서 1개 추출
console.log(popItem, fruits);

let shiftItem = fruits.shift(); // 제일 앞에서 1개 추출
console.log(shiftItem, fruits);

fruits.unshift("Lemon"); // 제일 앞에서 1개 변경 <ㅡ> push
console.log(fruits);

delete fruits[0];
console.log(fruits);

// 임의의 위치에서 데이터를 지우고 싶을 때
fruits = ["Banana", "Orange", "Apple", "Mango"];
let spliceItem = fruits.splice(2, 1);
console.log(spliceItem, fruits);

// 어레이 병합
console.log(cars + fruits);
console.log(cars.concat(fruits));

fruits = ["Banana", "Orange", "Apple", "Mango", "Lemon"];
let citrus = fruits.slice(2);
console.log(citrus);
citrus = fruits.slice(1,3);
console.log(citrus);

console.log(fruits.toString());  // txt 형식

console.log(fruits.reverse());  

fruits.forEach(function(value, index){
    console.log(index, value)
});