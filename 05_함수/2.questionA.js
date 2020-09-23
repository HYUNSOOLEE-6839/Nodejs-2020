/* // a+b+c = 1000인 피타고라스 수를 구하시오
// a < b < c    /   a + b > c   /   a*a + b*b = c*c

function sum(a, b, c){
    return (a*a + b*b)-c*c;
}
console.log(sum(200, 375, 425));

// a = 200 . b = 375 . c = 425 */

let a,b,c;
let outerBreak = false;
for(a=1; a<=332; a++){
    for(b=a+1; b<=499; b++){
        c = 1000 - a - b;
        if(c > (a + b))
            continue;
        if(c*c === (a*a + b*b)) {
            console.log(a, b, c);
            console.log(a*a,b*b,c*c);
            outerBreak = true;
            break;
        }
    }
    if(outerBreak)
        break;
}