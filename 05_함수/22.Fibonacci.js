// 피보나치 수열
// ex ) 1 1 2 3 5 8 13 21 34 - 앞의 항을 더한 것.

function fibo(n){
    if (n === 0 || n === 1)
        return 1;
    return fibo(n-1) + fibo(n-2);
}

for (let i=0; i<10; i++) {
    console.log(`fibonacci(${i}) = ${fibo(i)}`);
}
