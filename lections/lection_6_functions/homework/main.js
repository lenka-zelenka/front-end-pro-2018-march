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
document.write('До заполнения myArray',myArray, separator);
randomFillArray(myArray);
document.write('Посе заполнения myArray', myArray, separator);



// 2) написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.
A1  = [0,2,3,3,4,5,5,5,5,1,1,1,1,1,1,1,1,1,10000];
A2 = [3,4,5,5,6,7,6,6,5];

function arraySum (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++ ) {
        sum += arr[i];
    }
    return sum;
}

function compareArraySum (arr1, arr2){
    if (arraySum(arr1) > arraySum(arr2) ) {
        console.log('arr1 > arr2')
        return arr1;
    } else if (arraySum(arr1) < arraySum(arr2)) {
        console.log('arr2 > arr1 ')        
        return arr2;
    } else {
        console.log('arr1 == arr2');
    }
}

compareArraySum(A1, A2)

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