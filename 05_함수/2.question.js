// a+b+c = 1000인 피타고라스 수를 구하시오
// a < b < c    /   a + b > c   /   a*a + b*b = c*c

function sum(a, b, c){
    return (a*a + b*b)-c*c;
}
console.log(sum(200, 375, 425));

// a = 200 . b = 375 . c = 425