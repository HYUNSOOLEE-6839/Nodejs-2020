// 함수를 포함하는 객체
let name = '외부 이름';
let price = '외부 가격';
let product = {
    name : '치약', 
    vol : 500,  // 개체의 속성
    price : 3000, // 개체의 속성
    print : function(){ // 개체의 method
        console.log(`제품명은 ${name}이고, 가격은 ${price}입니다.`);
        console.log(`제품명은 ${this.name}이고, 가격은 ${this.price}입니다.`);
// 객체 내에서 사용 시 this.를 붙여야함.
    },
    string : function() {
        return `제품명은 ${this.name}이고, 가격은 ${this.price}입니다.`;
    }
}

product.print()
console.log(product.string());
