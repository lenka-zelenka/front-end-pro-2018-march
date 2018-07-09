// 1
// напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:

// var characters = [
//     { 'name': 'barney', 'age': 36 },
//     { 'name': 'fred', 'age': 40 }
// ];

// console.log(pluck(characters, 'name')); // ['barney', 'fred']


var characters = [{
        'name': 'barney',
        'age': 36
    },
    {
        'name': 'fred',
        'age': 40
    }
];
function pluck(arr, value) {
    return arr.map(function (item) {
        return item[value];
    });
}
console.log(pluck(characters, 'name')); // ['barney', 'fred']

// 2
// напиши функцию filter, которая принимает функцию-предикат и массив. 
// Возвращает она массив значений, для которых предикат вернет true.

var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]
// Функция не должна изменять исходный массив

function filter(arr, callback){
    return arr.filter(callback)
}

// Array.prototype.foEach = function(callback){
//     for(var i = 0; i < this.length; i++){
//         callback(this[i], i, this);
//     }
// }


// 3
// Напиши функцию count(), считающую число свойств в объекте. Функция должна хранится в прототипе всех обьеков
Object.prototype.count = function(){
    return this.length
}