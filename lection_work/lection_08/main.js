// # Лекция 8
// Task 1 
arr1 = [1,2,2,3,4]
arr2 = [1,2,5,888,9,0,2,3,4]
arr3 = [1,9,6,78,2,2,3,4]

// lection 8

// Task 1 
// # вложенные объекты

var obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    } 
}
convert(obj);
// моя версия
function convert(obj) {
    var newObj = {};
    for (key in obj) {
        if (typeof obj[key] == 'object') {
            for (key2 in obj[key] ) {
                newObj[key2] =  obj[key][key2];
            }
            
        } else {
            newObj[key] =  obj[key];
        }
    }
    return newObj;
}
// не влияет на исходный объект (не дописала в лекционном материале)
// function convertlection(source) {
//     var newObj = {};
//     for (var key in source) {
//         if (typeof source[key] == 'object') {
//             var innerSourse = source[key];
//             for (innerKey in innerSourse) {
//                 newObj[innerKey] = innerSourse[innerKey];
//             }
            
//         } else {
//             newObj[key] =  source[key];
//         }
//     }
//     return newObj;
// }

function square (x) { return x * x; }

console.log(map(square, arr1));
function map(fn, array) {
    var newArr = [];
    for(key in array ){
        newArr 
    }
    return newArr;
}
