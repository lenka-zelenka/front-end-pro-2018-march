
//   *********************************
// 2

// var a = +prompt("Введите а")
// var b = +prompt("Введите b")

// // a<b ? i=a : i=b;
// for (i = a; i <= b; i++ ){
//     // (i<0) ? console.log(-i*i + ',') : console.log(i*i);
//     res = i*i;
//     if (i<0){
//         res = -res;
//     }
//     console.log(res)
// }

//  *********************************

// 3

// var a = 1, b = 15;
// var odd = '';
// var even  = '';

// for (i= a; i< b; i++) {
//     if ( i % 2) {
//         // НЕЧЕТНЫЕ
//         odd += i;
//         console.log('четные ',i )
//     } else {
//         // ЧЕТНЫЕ
//         even += i;
//         console.log('нечетные ',i )
        
//     }
// }

// document.write('<table border=1><tr><td>' + odd + '</td></tr><tr><td>' + even + '</td></tr></table>')


// 4 

var x, y;
var odd = 0;
var even  = 0;
var sum = 0;
do {
    x = +prompt('Введите х');
} while( isNaN(x))

do {
    y = +prompt('Введите y');
} while( isNaN(y))


if (x < y){
    console.log('x меньше y ')
    // считаем нечетные
    for( i = x; i <= y; i++ ){
        if (i%2) { 
            console.log('нечетные ' , i )
            odd += i
        }

    }
    console.log('сумма четных ', odd)
}else{
    console.log('x больше y ')
    for( i = x; i >= y; i-- ){
        // i%2 ? console.log('odd: ', odd +=i)   :  console.log('even', even+=i);
        if (!(i%2)) {
            console.log('нечетные ', i)
            even += i
        }
        
    }
    console.log('сумма нечетных ', even)
}


