// Создать 4-х уровневый калькулятор

// * 1ый уровень самый главный. Будет иметь метод render(x), который отобразит текущее значение переменной х. 
// Будет иметь метод clear(x), очищает значение переменной на 0. 
// * 2ой уровень наследует 1ый 
// Будет иметь методы на основные математические операции, но в квадрате.
// Методы Sum, Div, Mul, которые получают 2 числа и выполняют операцию, 
// и возвращают результат в квадрате, а также запишет значение в x (1 уровень), 
// для этого создать метод setValue(). Например Sum(2, 5) -> (2+5)^2=49 
// * 3ий уровень наследует 2ой 
// Будет свойство-массив arr, в котором генерируются случайные числа от 0 до 50. 
// Длина массива arr.length = 200; Тут будет метод reInit(arr), который переопределяет массив arr 
// * 4ий уровень наследует 3ий 
// Пустой 
// * Экземпляры создаются от 4 уровня


// 1 уровень
function Calculator1 (x){
    this.x = x;
}
Calculator1.prototype.render = function(){
    return this.x;
}
Calculator1.prototype.clear = function() {
    this.x = 0;
}

function Calculator2(x) {
    this.x = x;
}

Calculator2.prototype = Object.create(Calculator1.prototype);

Calculator2.prototype.setValue = function(val) {
    this.x = val;
}

Calculator2.prototype.Sum = function(a,b) {
    this.setValue(a+b);
}

var p = new Calculator1(0);
var p2 = new Calculator2(0);

// var p = new Calculator1(25);
// var p2 = new Calculator2();