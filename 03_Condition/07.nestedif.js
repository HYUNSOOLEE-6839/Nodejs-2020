let date = new Date();
let hours = date.getHours();

if(hours<11){
    console.log("아침 메뉴입니다.");
} else {
        if (hours<15){
            console.log("점심 메뉴입니다.");
} else{
        console.log("저녁 메뉴입니다.");
    }
}

if(hours<11){
    console.log("아침 메뉴입니다.");
} else if (hours <15){
    console.log("점심 메뉴입니다.");
} else {
    console.log("저녁 메뉴입니다.");
}

let x = parseInt(buf)
let grade;
if(x>=90){
    grade = 'A';
} else{
    if(x>=80)
        grade = 'B';
}       else{
            if(x>=70)
                grade = 'C';
                    else{
                        if(x>=60)
                            grade = 'D';
                                else{
                                    grade ='F';
                                }
    console.log('성적:${x}, 학점:${grade}');