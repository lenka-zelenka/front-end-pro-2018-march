// var x = +prompt('Введите х ');
// console.log(x)
// if ( x < -5) {
//     y = x * x;
// } else if (x >= -5 && x <= 3) {
//     y = x - 2;
// } else {
//     y = (x - 2) * x;
// }
// document.write(y)

// result =1
// do {
//     a = +prompt('Введите a');
// } while (isNaN(a))
// do {
//     n = +prompt('Введите n');
// } while (isNaN(n) && n > 0 )
// for (i = 1 ; i <= n; i++){
//     result = result * a;
// }

// document.write(result)


// факториал
result =1
n = +prompt('Введите n');

for (i = 1 ; i <= n; i++){
    result = result * i;
}

document.write(result)