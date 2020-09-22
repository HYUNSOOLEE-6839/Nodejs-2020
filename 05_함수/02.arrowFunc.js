let arrowFunc = () => {
    console.log('화살표 함수');
}
arrowFunc();
console.log(arrowFunc);

// #1
let power = x => { return x * x}
console.log(power(13));

// #2
let power2 = x => x*x
console.log(power2(12));

console.log(power(10), power2(10));