//2
for(let i = 0; i<8; i++){
    let stars = '';
    for(let k = 0; k<i+1; k++){
        stars += '*';
    }
    console.log(stars);
} 
//1
 for(let i = 0; i<8; i++){
    let stars = '';
    for(let k = 0; k<8-i-1; k++){
        stars += ' ';
    }
    for(let k=0; k<i+1; k++){
        stars += '*';
    }
    console.log(stars);
}

//4
for(let i = 0; i<8; i++){
    let stars = '';
    for(let k = 0; k<8-i-1; k++){
        stars += ' *';
    }
    console.log(stars);
}

//3
for(let i = 8; i>0; i--){
    let stars = '';
    for(let k =0; k<8-i; k++){
        stars += ' ';
    }
    for(let k=0; k<i-1; k++){
        stars += '*';
    }
    console.log(stars);
}
