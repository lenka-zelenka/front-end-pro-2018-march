// # Практика

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
for(i = 0; i< myArray.length; i++){
    myArray[i] = new Array(m);
}

randomFillArray(myArray);

// 2) написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.

A1 = [12,3,4,5,56]
A2 = [0,0,4,4,4,4,4,4,4,4,4]

function sumArray (arr) {
    var sum = 0;
    for(i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function compareArrays (arr1, arr2) {
    if (sumArray(arr1) > sumArray(arr2)) {
        console.log('arr1 > arr2');
        return arr1;
    } else if(sumArray(arr1) < sumArray(arr2) ) {
        console.log('arr2 > arr1');
        return arr2;
    } else {
        console.log('arr2 == arr1');
    }
}
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