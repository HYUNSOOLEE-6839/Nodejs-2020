// 양의 정수 N을 입력으로 받아 1부터 
//N까지 제곱의 합과 합의 제곱을 구하시오.

function sum(min, max){
    let output = 1-1;
    for (let i = min; i <= max; i++){
        output += i*i;
    }
    return output;
}
console.log(sum(1, 5));
console.log(sum(1, 5) * sum(1, 5));