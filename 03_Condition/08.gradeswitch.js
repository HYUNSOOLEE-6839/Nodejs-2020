const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.setPrompt('성적 입력>');
rl.prompt();
rl.on('line', function(buf){
let score = parseInt(buf)
let grade;
/* switch(parseInt(score/10)){
    case 10:
    case 9:
        grade = 'A';
        break;
    case 8 : 
        grade = 'B';
        break;
    case 7 :
        grade = 'C';
        break;
    case 6 :
        grade = 'D';
        break;
    default:
        grade = 'F';
    } 
    console.log(`성적: ${score}, 학점: ${grade}`);
rl.close();
});
*/


if(score>=90){
    grade = 'A';
} else if(score>=80){
        grade = 'B';
    }       else if(score>=70) {
                    grade = 'C';
                    }
                        else if(score>=60){
                                grade = 'D';
                                }
                                    else{
                                        grade ='F';
                                    }
    console.log(`성적: ${score}, 학점: ${grade}`);
    rl.close();
});