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
    copy: function(buffer){ typeof buffer == 'string' ? this[buffer] = buffer : null },
    clear: function(){ this.result = 0},
    doFunction: function(x,y, func) {return this.result = func(x,y)},
    result: 0,
};
obj.doFunction(3,4, mul);


// ## <hr />



// 2) Дана строка вида &#39;var_text_hello&#39;. Сделайте из него текст &#39;varTextHello&#39;.

// ## <hr />

// 3) Сделайте функцию inArray, которая определяет, есть в массиве элемент с
// заданным текстом или нет. Функция первым параметром должна принимать
// текст элемента, а вторым - массив, в котором делается поиск. Функция должна
// возвращать true или false.<hr >
// ` inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh'])` должно вернуть `true`, т.к. в `affooasf` есть совпадение.



// ## Лекция

// 1) Задан обьект с любым количеством свойств. Одно из свойств является функция `renderObject()`, которая описана в window.
// При вызове метода `obj.renderObject()` -> выводит в document всё содержимое объекта, кроме самого метода `renderObject`


//         obj = { x:10, y: 20 }
//         obj.renderObject() -> x:10, y: 20


// 2) в обьекте `data` существует метод `addRecord`, который аргументами получает любой набор объектов. Метод `addRecord` добавляет все свойства переданных объектов в `data`.


//         data = {
//             addRecord: function(){},
//             p: 600,
//             str: 'hello',
//             y: -50
//         }
//         data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
//         data.x // 50
//         data.y // 20
//         data.z // 30
//         data.p // 600
//         data.str // 'hello'

// 3) В метод `addRecord` добавляется последний необязательный аргумент `flag`, который указывает приоритет присвоения свойств с одинаковым названием.
// Если `true` - берется свойство из первоначального объекта `this`, если `false` - берется свойство из `arguments`.  По умолчанию `flag = false;`

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