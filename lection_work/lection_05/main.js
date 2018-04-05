// # test

// level 1

//  1)

// document.write('1) <br>')

// arr1 = [1, 2, 3, 4, 5]
// for (i=0; i < arr1.length; i++) {
//     document.write(arr1[i] + '_')
// }


// // 2)
// document.write('2) <br>')
// arr2 = [6,7,2,3,5,7,]
// document.write('<ul>');
// for (i=0; i< arr2.length; i++ ){
//     document.write('<li>' + arr2[i] + '</li>');

// }
// document.write('</ul>');

// document.write('3) <br>')
// 3)

// arr3 = [5,6,34,56,56,562,7,8,566,4,3,4,7,9]
// length = arr3.length
// document.write(arr3)
// document.write('<br>')
// pos = Math.ceil( length / 2 -1)

// if (length % 2){
//     arr3.splice(length / 2, 1 )
// } else {
//     arr3.splice(length / 2 - 1, 2 )
// }
// document.write(arr3)


// элементы на главной диагонали i==j
// побочная диагональ  i+j == n-1 (n - длина массива)
// ниже главной диагонали i>j
// выше i<j
// ниже побочной  - i+j >= n-1
// выше побочной  - i+j <= n-1
// 


// создали массив из углов всяких областей
// n = 20;
// A = new Array(n);
// c = Math.ceil( A.length/2)

// for(i = 0; i < A.length; i++){
//     A[i] = new Array(n);
// }
// // --- fill
// for(i = 0; i < A.length; i++){
//     for(j = 0; j < A[i].length; j++){
//         if ( i < c && i+j <= n-1 ) {
//             A[i][j] = 1;
//         } else if ( i >= j+c  || i+j <= n - 1 + c && 
//             i >= c && 
//             j >= c ) {
//             A[i][j] = 2;
//         }else {
//             A[i][j] = 0;
            
//         }

//         document.write(A[i][j] + ' ');
//     }
//     document.write('<br />');
// }

n = 10;
arr = new Array(n);
for (i=0 ; i < arr.length; i++){
    arr[i] = new Array(n)
}

min = arr[0][0];
minPosI = minPosJ = 0;
document.write('default <br />'); 
// fill 
for (i=0 ; i < arr.length; i++){
    for (j= 0; j< arr[i].length; j++){
        arr[i][j] = Math.floor((Math.random() * 81) -42);
        document.write(arr[i][j]+ ' ');
    }
    document.write('<br />');    
}
document.write('<br />  <br /> <br />');  

document.write('changed <br />' ); 

for (i=0 ; i < arr.length; i++){
    for (j= 0; j < arr[i].length; j++){
        if (arr[i][j] <= min ){
            min = arr[i][j];
            minPosI = i;
            minPosJ =j;
        }
    }
}
document.write(min);
// swap
temp = arr[minPosI][minPosJ];
arr[minPosI][minPosJ] = arr[0][0];
arr[0][0] = temp;

console.log(arr);