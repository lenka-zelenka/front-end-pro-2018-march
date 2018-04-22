// # Практика
// 1) Есть обьект `obj = { }`
// Внутри него описываем методы `copy, clear, doFunction`.
// Организовать создание методов так, что бы можно было вызывать любые
// комбинации:<hr >
//     `obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()`<hr >
// `doFunction(x, y, func);` получает параметрами 2 числа и функцию, которую нужно применить к x и y. 
// Результат операции сохранять в `obj.result`<hr >
// `clear()` очищает значение `obj.result` в 0<hr >
// `copy(buffer)` получает параметром название ключа buffer (string) и добавляет его к `obj`
// Далее в любом порядке можно вызывать комбинации функций 

var obj = {
    copy: function(buffer){ 
        typeof buffer == 'string' ? this[buffer] = buffer : null;
        return this;    
    },
    clear: function(){ 
        this.result = 0
        return this;
     },
    doFunction: function(x,y, func) {
        this.result = func(x,y);
        return this;
    },
    result: 0,
};
obj.doFunction(3, 4, mul);


// ## <hr />



// 2) Дана строка вида &#39;var_text_hello&#39;. Сделайте из него текст &#39;varTextHello&#39;.
var str = 'var_text_hello';

var newstr = str.split('_'); // var, text, hello
for (var i =1; i < newstr.length; i++) {
    newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].substr(1).toLowerCase()
}
newstr = newstr.join('')

// ## <hr />

// 3) Сделайте функцию inArray, которая определяет, есть в массиве элемент с
// заданным текстом или нет. Функция первым параметром должна принимать
// текст элемента, а вторым - массив, в котором делается поиск. Функция должна
// возвращать true или false.<hr >
// ` inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh'])` должно вернуть `true`, т.к. в `affooasf` есть совпадение.

function inArray(string, arr) {
    var isPresent = false;
    for (key in arr) {
        if(arr[key].indexOf(string) !== -1 ) {
            isPresent = true;
        }
    }
    return isPresent;    
}

inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']);

// функции для первого задания

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