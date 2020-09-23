// 1에서 1000까지 각 숫자의 갯수

 let counts = [0,0,0,0,0,0,0,0,0,0]; // 0부터 9까지 각 자리 수
 
 for (let i=1; i<=1000; i++){
     let numString = String(i);
     for(let digit of numString){
         counts[parseInt(digit)]++;
     }
 }
 console.log(counts);

