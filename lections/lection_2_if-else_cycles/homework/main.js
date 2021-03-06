// 1. Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры

document.write('<h2>Task 1:</h2> <h3>Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры<h3>')
do {
    n = +prompt('Введите число n больше нуля')
} while(isNaN(n) && n>=0)

prev = 0;
fib = 1;
next = 1;

for(i=0; i<n; i++){
    document.write(prev + ', ')
    next = prev + fib;
    prev = fib;                     
    fib = next;
}

// 2. Ввести с клавиатуры a и b, где а меньше b. 
//    Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры).
//    Посчитать сумму факториалов чисел которые попадаются во время перебора.

document.write('<h2>Task 2:</h2> <h3>Ввести с клавиатуры a и b, где а меньше b. Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры). Посчитать сумму факториалов чисел которые попадаются во время перебора.<h3>')
    
do {
    a = +prompt('Введите число a')
} while(isNaN(a))

do {
    b = +prompt('Введите число b, больше ' + a )
} while(isNaN(b) || b<a )
do {
    h = +prompt('Введите шаг h, больше 0')
} while(isNaN(h) || h<0 )

document.write('a= ' + a + ', b= ' + b + ', h= ' + h)
document.write( '<br />Числа в ряду: <br />')
var i=1;

for( ; a <= b; a += h){
    var fact = 1;
    for (i=1; i <= a; i++ ){
        // считаем факториал
        fact *= i;
    }
    document.write( 'факториал ' + a+ ' равен ' + fact + '<br />' )
}


// 3. Выведите столбец четных чисел в промежутке от 0 до 100. (в document в виде таблицы)

document.write('<table border=1>');
for(i=0; i<=100; i+=2){
    document.write('<tr><td>' + i + '</td></tr>');
    
}
document.write('</table>');
