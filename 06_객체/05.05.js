let cart = [
    {
        product : {name : '치약', vol : 500, price : 3000},
        quantity : 5
    },
    {
        product : {name : '비누', vol : 200, price : 1000},
        quantity : 4
    }
];

console.log(JSON.stringify(cart)); // JSON으로 변환
console.log(cart[0].product.price); // 치약의 가격
console.log(cart);
console.log(cart[0].product.price + cart[1].product.price); // 1개 씩 샀을 때 가격
console.log(
    cart[0].product.price*cart[0].quantity +
    cart[1].product.price*cart[1].quantity +
    "원"); // 5개, 4개씩 샀을 때 총 가격

// 카트에서 물건 값의 합 - 반복문 사용

let sum = 0;
for (let item of cart){
    sum += item.product.price * item.quantity;
}
console.log(sum + "원");