// 배열 (Array)
let arrayPersonInfo = ['홍길동', '남자', 29];
console.log(arrayPersonInfo[0],arrayPersonInfo[1],arrayPersonInfo[2]);

// 객체(Object) - key, value 쌍으로 구성.
let personInfo = {
    '이름' : '홍길동',
    '성별' : '남자',
    '나이' : '29'
};
let g = '성별'
console.log(personInfo['이름'], personInfo[g], personInfo['나이']);

let person = {
    name : '홍길동',
    gender : '남자',
    age : '29'
};

console.log (person.name, person.gender, person.age);

console.log(process.env.JAVA_HOME);