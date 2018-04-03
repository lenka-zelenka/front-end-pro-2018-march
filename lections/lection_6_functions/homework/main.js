// # Практика

// 1) Написать функцию заполнения двумерного массива. Имя произвольное.

// 2) написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.


// # Лекция

// 1) Написать функцию `doMath(x, znak, y)`, которая получает 3 аргумента: числа `x` и `y`, строку
// `znak`. В переменной знак может быть: `+, -, *, /, %, ^`. Вывести результат
// математического действия, указанного в переменной `znak`.

// function doMath(x, y, z) {
//     if (!x || !y || !z) {
//         return "ERROR";
//         return;
//     }
//     if ( z == '+') {
//         return x + y;
//     } else if ( z == '-') {
//         return x - y;
//     } else if ( z == '*') {
//         return x * y;
//     } else if ( z == '/') {
//         return x / y;
//     } else if ( z == '%') {
//         return x % y;
//     } else if ( z == '^') {
//         return Math.pow( x,  y) ;
//     } else {
//         return 'NOT KNOWN OPERATION'
//     }
// }

// x = +prompt('Enter x');
// z = prompt('Enter ZNAK')
// y = +prompt('Enter y');
// console.log( x, z, y )
// console.log( doMath(x, y, z) )