function print(name, count){
/*     // undefined면 count는 0이다.  ! = Not
    if(!count)
        count = 0;
        // 삼항연산자로 변환 
    count = !count ? 0 : count; */
    //count = count ? count : 0;
    count = count || 0;
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print("사과", 10);
print("감");


// z = x && y - x가 false면 z는 false. 
// z = x || y - x가 true면 z는 true. x가 false일 경우 z는 y