const { min } = require("moment");

let total = 0;
for(let h = 0; h<=23; h++){
    for(let m = 0; m<60; m++){
        let time = h + ':' + m;
        if(time.indexOf('3')>=0)
            total += 60;
    }
}

console.log(total);