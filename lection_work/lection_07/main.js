// # Лекция 7
// Task 1 
arr1 = [1,2,2,3,4]
arr2 = [1,2,5,888,9,0,2,3,4]
arr3 = [1,9,6,78,2,2,3,4]

function fofoFuncton() {
    var arr = []
    for( var i = 0; i < arguments.length; i++) {
        arr = arr.concat(arguments[i])
    }
    return arr;
}

myArr = fofoFuncton(arr1,arr2)
console.log(myArr)

// Task 2


console.log([6,3,5,9,6])
function factory (arr){
    var i = 0;
    return function (callback) {
        return callback(arr[i++]); 
    }
    
    
}
var step = factory( [6,3,5,9,6] ) 
function sqr (x){
    return x*x;
}





function getMaxs () {
    var arr = '';
    for( var i = 0; i < arguments.length; i++) {
        arr += findMax(arguments[i]) + ', ';
    }
    return arr;
}

function findMax(arr){
    max = arr[0];
    for(var i = 0; i < arr.length; i++ ) {
        if (arr[i] > max) {
            max = arr[i]
        } 
    }
    return max;
}
 

console.log(arr1, arr2, arr3)
console.log('MAX ' + getMaxs(arr1, arr2, arr3))
