let array = [52.64, 8765, '아침밥', '저녁밥', true, false, 6, 87, 35, 3, 24, 4, 354, 68873, 87, 35, 3, 24, 4, 354, 68873, 87, 35, 3, 24, 4, 354, 68873, 87, 35, 3, 24, 4, 354, 68873, 87, 35, 3, 24, 4, 354, 68873, 87, 35, 3, 24, 4, 354, 68873, 87, 35, 3, 24, 4, 354, 68873, 87, 35, 3, 24, 4, 354, 68873, 87, 35, 3, 24, 4, 354, 68873, 87, 35, 3, 24, 4, 354, 68873, 87, 35, 3, 24, 4, 354, 68873, 87, 35, 3, 24, 4, 354, 68873, 87, 35, 3, 24, 4, 354, 68873];
//console.log(array.length);
//console.log(array);
//console.log(array[5], array[70], array[94]);

array[0] = 123456741566441321890;
//console.log(array);

array[6] = 'new item';
//console.log(array);
//array.push('push');
//console.log(array);

for(let i = 0; i<array.length; i ++){
    console.log(array[i], typeof(array[i]));
}

//Enhanced For Loop
for(let item of array){
    console.log(item, typeof(item));
}