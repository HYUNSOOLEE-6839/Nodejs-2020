let persons = [
    {name : '홍길동', gender : '남자',age : '29'},
    {name : '성춘향', gender : '여자',age : '17'}
];

let externalForm = JSON.stringify(persons); // 외부로 나갈 때 형태 - stringify
console.log(externalForm);

let p = JSON.parse(externalForm); // 내부로 들여올 때 - parse
for (let person of p) {
    console.log(person.name, person.gender, person.age);
}