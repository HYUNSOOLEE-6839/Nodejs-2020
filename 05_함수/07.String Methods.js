/* // String Length
let hello = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(hello.length);

// String 내에서 문자열을 찾을 때
console.log(hello.indexOf("U"));
console.log(hello.indexOf("7")); */

/* /* // 동일한 String 내에서 다음 문자열을 찾을 때
                    #1
let str = "Please locate where 'locate' occurs!";
let pos = str.lastIndexOf("locate");
console.log(str);
console.log(pos);

                    #2
let str = "Please locate where 'locate' occurs!";
let pos = str.search("locate");
console.log(pos);

console.log(str.search('locate')); */

// 문자열의 일부분 추출하기
let str = "Apple, Banana, Kiwi";
/* let res = str.slice(7, 13);  => 시작 인덱스, 끝 인덱스
// str의 7번째에서부터 13번째까지 출력
console.log(res);
// str의 끝에서부터 4번째까지 출력
console.log(str.slice(-4));
 */
// substring은 slice와 비슷하지만 - 형태, negative 형태는 사용 불가.

// substr은 갯수로 갖고옴. 7번째에서부터 6글자
/* console.log(str.substr(7,6)); */ // 시작 인덱스, 갯수

/* // 문자열을 대체
let newStr = str.replace(',',':') // 문자열 1개 바꾸기
console.log(newStr);
newStr = str.replace(/,/g,':'); // 문자열 전체 바꾸기, Regular Expression
console.log(newStr);
 */
// 공백 제거
let str2 = "       Hello World!        ";
/* console.log(str2);
console.log(str2.trim());

// 특정 위치 내 문자 추출
console.log(str.charAt(2))
console.log(str2.charAt(13)) */

// 문자열을 Array로 변경
let txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe
console.log(txt.split(" "));
console.log(txt.split(","));
console.log(txt.split("|"));