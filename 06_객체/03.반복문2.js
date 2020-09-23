let persons = [
    {name : '홍길동', gender : '남자',age : '29'},
    {name : '성춘향', gender : '여자',age : '17'}
];

for(let person of persons){
    console.log(person.name, person.gender, person.age);
}

/* console.log(persons[0]);
console.log(persons[0].name); */

/* // for of는 error! 
for(let item of person){
    console.log(item);
} */

/* for (let key in persons){
    console.log(key, person[key]);
} */
