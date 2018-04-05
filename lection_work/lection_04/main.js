// найти минимальное значение массива и его индекс
// task1 = 'Задание 1: найти минимальное значение массива и его индекс';
// arr = [2,3,8,-4,3,2];
// min = max = arr[0];
// minPos = maxPos = 0
// for(i=1; i < arr.length; i++) {
//     if ( arr[i] < min) {
//         min = arr[i];
//         minPos = i;
//     }
//     if (arr[i] > max ) {
//         max = arr[i];
//         maxPos = i;
//     }
// }

// console.log(task1)
// console.log('arr = ', arr)
// console.log('minimus = ', min,  'minPos = ', minPos)
// console.log('maximim  = ', max,  'maxPos = ', maxPos)


// ***********************
// list = []

// while (list[list.length - 1] !== '?') {
//     list[list.length] = prompt();
// }
// delete list[list.length - 1];
// console.log(list)


// *********************************

// посчитать сумму всех четных рядков массива 

row = 10;
col = 25;

arr = new Array(row);
for (i=0 ; i < arr.length; i++){
    arr[i] = new Array(col)
}
for (i=0 ; i < arr.length; i++){
    for (j= 0; j< arr[i].length; j++){
        arr[i][j] = Math.floor(Math.random() * 90 + 10);
        document.write(arr[i][j]+ ' ');

    }
    document.write('<br />');    

}

sum = 0
for (i=0 ;  i < arr.length; i+=2){
    for (j= 0; j < arr[i].length; j++){
        sum += arr[i][j];
        document.write('sum = ' + sum + ' ');
    }
}