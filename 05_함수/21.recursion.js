// 재귀적 호출 (Recursive call)

function facto(n) {
    if(n === 0)
        return 1;
    return n * facto(n-1);
}
for (let i=0; i<10; i++) {
console.log(facto(i));
}