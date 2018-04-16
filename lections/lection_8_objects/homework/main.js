
// # Практика

// 1) Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), 
// которая определяет, есть в массиве элемент с заданным текстом или нет. 
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
// Функция должна возвращать true или false.

function inArray(string, arr) {
    var isPresent = false;
    for (key in arr) {
        if( string == arr[key]) {
            isPresent = true;
        }
    }
    return isPresent;    
}

inArray('hello', ['svnj', 'Hello', 'cvpoq'])



// 2) Написать функцию assignObjects(obj1, obj2), 
// которая принимает аргументами 2 обьекта и возвращает новый, 
// который состоит из свойство обоих обьектов (склеить). 
// Если свойство повторяется, то взять значение второго обьекта

// ```
// assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }

// assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }
// ```

var obj1 = { x: 10, y: 20 },
    obj2 =  { z: 30 }



function assignObjects(obj1, obj2) {
    var flag = false;
    var newObj = obj1;

    if (arguments.length == 3) {
        flag = arguments[2];
    } 
    
    for (key in obj2) {
        if (flag  && newObj[key]) {
            continue;
        } else{
            newObj[key] = obj2[key];      
        }
    }
    return newObj;
}


// var concatObj1 = assignObjects(obj1 , obj2, false);

var concatObj2 = assignObjects({ x: 10 }, { x: 20, y: 30 }, true);
// var concatObj2 = assignObjects({ x: 10 }, { x: 20, y: 30 });

// 3) В задачу п.2 добавить 3ий аргумента flag, который является boolean. 
// Если флаг true, тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.
// ```
// assignObjects({...}, {...}, false);
// ```

// 4) В задачу п.3, сделать параметр flag не обязательный, если параметр не передать - устанавливать значение false.