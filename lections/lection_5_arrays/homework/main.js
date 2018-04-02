// // # Практика

// // 1) В одномерном массиве произвести такую замену:
// // 1 элемент поменять с 2
// // 3 элемент поменять с 4
// // 5 элемент поменять с 6
// // и тд
// // Если массив непарный - последний элемент не трогать.<br><br>
// // было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5

// separator = '<br />* * * * * * * * * *<br />'
// n = 15;
// arr = new Array(n);
// for (i = 0; i < arr.length; i++) {
//     arr[i] = i;
// }
// document.write(arr)
// document.write(separator)



// temp = arr[0];
// for (i = 0; i < arr.length; i+=2) {
//     if(arr.length % 2 && i == arr.length -1) {
//         break
//     } else {
//         temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
    
// }
// document.write(arr)
// document.write(separator)

// // 2) В двумерном массиве A размером n на m. Заполнить случайными числами.
// //     1. Найти ряд, где сумма элементов наименьшая
// //     2. Найти ряд, где сумма элементов найбольшая
// //     3. Поменять ряды местами (1 и 2 пункт)

// n = 5;
// m = 13;
// arr2 = new Array(n);
// for (i = 0; i < arr2.length; i++) {
//     arr2[i] = new Array(m);
// }
// document.write(arr2)
// document.write(separator)


// LECTION_06 функции 


function doMath(x, y, z) {
    if (!x || !y || !z) {
        return "ERROR";
        return;
    }
    if ( z == '+') {
        return x + y;
    } else if ( z == '-') {
        return x - y;
    } else if ( z == '*') {
        return x * y;
    } else if ( z == '/') {
        return x / y;
    } else if ( z == '%') {
        return x % y;
    } else if ( z == '^') {
        return Math.pow( x,  y) ;
    } else {
        return 'NOT KNOWN OPERATION'
    }
}

x = +prompt('Enter x');
z = prompt('Enter ZNAK')
y = +prompt('Enter y');
console.log( x, z, y )
console.log( doMath(x, y, z) )