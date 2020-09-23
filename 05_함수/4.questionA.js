// 1에서 1000까지 각 숫자의 갯수

 let counts = [0,0,0,0,0,0,0,0,0,0]; // 0부터 9까지 각 자리 수
 // 1의 자릿수
 for(let i = 1; i<=9; i++){
     counts[i]++;
 }
 // 두 자릿수
 for (let i=10; i<=99; i++){
     counts[parseInt(i/10)]++; // 예를 들어 21을 나눴을 시 2.1이기에 parseInt를 통해 정수 2로 만드는 과정.
     counts[i % 10]++;         // 일의 자릿수. 21%10 = 1
 }
 // 세 자릿수
 for (let i=100; i<=999; i++){
    counts[parseInt(i/100)]++; // 백의 자릿수
    counts[parseInt((i%100)/10)]++; // 십의 자릿수
    counts[i % 10]++;              // 일의 자릿수
 }
 // 네 자릿수
 for (let i=1000; i<=1000; i++){
    counts[parseInt(i/1000)]++; // 천의 자릿수
    counts[parseInt((i%1000)/100)]++; // 백의 자릿수
    counts[parseInt((i%100)/10)]++; // 십의 자릿수
    counts[i%10]++; // 일의 자릿수
 }
 console.log(counts);

