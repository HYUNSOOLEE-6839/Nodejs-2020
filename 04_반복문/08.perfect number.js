// 완전수 구하기

for(let i =2; i<=10000; i++){
    //약수 구하기
    let divArray = [];
        for(let k=1; k<i; k++){
            // 자기자신을 제외하기 때문에 k<=i가 아닌 k<i.
        if (i % k === 0){
            divArray.push(k);
        }
    }
    // 약수의 합 구하기
    let sum = 0;
    for(let divisor of divArray)
        sum += divisor;
    // 약수의 합과 자기 자신의 수 비교
    if(i===sum){
        console.log(i);
        console.log(divArray);
    }
}