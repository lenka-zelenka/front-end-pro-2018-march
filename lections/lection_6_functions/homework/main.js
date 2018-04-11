// # Практика
separator = '<br />* * * * * * * * * *<br />'
// 1) Написать функцию заполнения двумерного массива. Имя произвольное.

function randomFillArray (array){
    if (Array.isArray(array) ) {
        for (var i = 0; i < array.length ; i++) {
            for (var j = 0; j < array[i].length; j++) {
                array[i][j] = Math.floor(Math.random() * 100)
            }
        }
        return array;
    } else {
        return console.log("Вы не отправили массив")
    }
}

n=4;
m=5;
myArray = new Array(n);
for(var i = 0; i< myArray.length; i++){
    myArray[i] = new Array(m);
}
document.write(' <br />Массив после создания <br />', myArray)
randomFillArray(myArray);
document.write(' <br />Массив после заполнения <br />', myArray)


// 2) написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.
document.write(' <br />Задание 2) <br />')

A1 = [12,3,4,5,56]
A2 = [0,0,4,4,4,4,4,4,4,4,4]
document.write(' <br />Массив 1<br />', A1)
document.write(' <br />Массив 1<br />', A2)

function sumArray (arr) {
    var sum = 0;
    for(i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function compareArrays (arr1, arr2) {
    if (sumArray(arr1) > sumArray(arr2)) {
        document.write('arr1 > arr2');
        return arr1;
    } else if(sumArray(arr1) < sumArray(arr2) ) {
        document.write('arr2 > arr1');
        return arr2;
    } else {
        document.write('arr2 == arr1');
    }
}
document.write(' <br />Сумма массива 1 =' + sumArray(A1) + '<br />')
document.write(' <br />Сумма массива 2 =' + sumArray(A2) + '<br />')

compareArrays(A1, A2)

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