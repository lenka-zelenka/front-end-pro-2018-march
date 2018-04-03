// # Практика

// 1) В одномерном массиве произвести такую замену:
// 1 элемент поменять с 2
// 3 элемент поменять с 4
// 5 элемент поменять с 6
// и тд
// Если массив непарный - последний элемент не трогать.<br><br>
// было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5

separator = '<br />* * * * * * * * * *<br />'
n = 15;
arr = new Array(n);
for (i = 0; i < arr.length; i++) {
    arr[i] = i;
}
document.write(arr)
document.write(separator)



temp = arr[0];
for (i = 0; i < arr.length; i+=2) {
    if(arr.length % 2 && i == arr.length -1) {
        break
    } else {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    
}
document.write(arr)
document.write(separator)

// 2) В двумерном массиве A размером n на m. Заполнить случайными числами.
//     1. Найти ряд, где сумма элементов наименьшая
//     2. Найти ряд, где сумма элементов найбольшая
//     3. Поменять ряды местами (1 и 2 пункт)

n = 5;
m = 2;
arr2 = new Array(n);
for (i = 0; i < arr2.length; i++) {
    arr2[i] = new Array(m);
}
for (i = 0; i < arr2.length; i++) {
    for (j = 0; j < arr2[i].length; j++){
        arr2[i][j] = Math.floor(Math.random() * 20 - 15);
        document.write(arr2[i][j] + ' ');
    }
    document.write('<br />');
}
// document.write(arr2);
document.write(separator);

rowSum = rowMinPos = rowMaxPos = 0;

minSum = Infinity;
maxSum = -Infinity;
for (i = 0; i < arr2.length; i++) {
    rowSum = 0;    
    for (j = 0; j < arr2[i].length; j++){
        rowSum += arr2[i][j];
    }
    if (minSum >= rowSum ) {
        minSum = rowSum;
        rowMinPos = i;
    }
    if (maxSum <= rowSum){
        maxSum = rowSum;
        rowMaxPos = i;
    }
    document.write('row summ = ' + rowSum + '<br />');
}
document.write(separator);
document.write('min summ = ' + minSum +  ' position =  ' + rowMinPos + '<br />');
document.write('max summ = ' + maxSum +  ' position =  ' + rowMaxPos + '<br />');

//     3. Поменять ряды местами (1 и 2 пункт)
// я уже знаю мин и макс позицию строк
tempArray = new Array()
tempArray =  arr2[rowMinPos];

arr2[rowMinPos] = arr2[rowMaxPos];
arr2[rowMaxPos] = tempArray
for (i=0; i<arr2.length; i++){
    document.write(arr2[i]  + '<br />') ;

}