let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);

console.log(numberFromLiteral, numberFromConstructor);

let number = 273.3724327468;
console.log(number.toExponential()); // 제곱수
console.log(number.toFixed(4)); // 소숫점 4자리까지 제거
console.log(number.toPrecision(6)); // 유효자리 숫자 6자리

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER); // 2의 53승 -1
console.log(Number.MIN_SAFE_INTEGER); // - 2의 53승 +1

console.log(Math.pow(2,54)) // 2의 54승
console.log(Math.pow(2,53)-1)

let number2 = 9007199254740992;
console.log(number2.toExponential());