
// # Практика

// 1) Функция должна вернуть массив из центральных элементов переданных массивов.

//     Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3

//     Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4
arr1 = [1,2,2,3,4]
arr2 = [1,2,5,888,9,0,2,3,4]
arr3 = [1,9,6,78,2,2,3,4]
separator = '<br />* * * * * * * * * *<br />'

function getMiddleElement(arr){
    res = [];
    if ( arr.length % 2 == 0) {
        res = arr.splice(arr.length / 2 - 1, 2);
    } else {
        res = arr.splice(arr.length / 2, 1);
        
    }
    return res;
}

function MiddleElements() {
    var resArray = [];
    for(var i = 0; i < arguments.length; i++){
        resArray.push( getMiddleElement(arguments[i]) );
    }
    return resArray;
}

document.write("Arrays: <br />" +  arr1 + "<br />" + arr2 + "<br />" + arr3  + "<br />");
document.write("Middle elements : ", MiddleElements(arr1, arr2, arr3));


// 2) Написать функцию, которая получает 3 аргумента: два числа и функцию. 
//  Произвести вызов переданной функции с двумя аргументами числами.
// `doFunction(2, 3, power);` в ответе должны получить 8, как 2 в степени 3.

function doSmt(x, y, fn) {
    arguments,length;
    if (arguments.length == 2 ) {
        return factorial(x);
    } else{ return fn(x, y); }
    
}

document.write(separator);
document.write("result of Task 2: " + doSmt(4, 3, power));


// 3) Из п.2 реализовать функции sum, div, mul, power

function sum (x, y){
    return x + y;
}
function div (x, y){
    return x / y;
}
function mul (x, y){
    return x * y;
}
function power (x, y){
    if (y <= 0 ){
        return 'error';
    } else if ( y == 0 ) {
        return 1;
    } else {
        var res = x;
        for (var i = 1; i < y; i++){
            res *= x;
        }
        return res;
    }
}

function factorial(a) {
    var fact = 1;
    for (i=1; i <= a; i++ ){
        fact *= i;
    }
    return fact;
}



// `doFunction(16, -23, mul); // 16*(-23)`

// 4) Из п.2, если количество числовых аргументов равно единице и переданная функция `factorial`
//  - реализовать расчет факторикала. `doFunction(6, factorial);`, в ответе поулчаем 6! = 720. 
// arguments.length и typeof


