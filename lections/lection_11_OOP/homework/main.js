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
// 2 уровень
function Calculator2(x) {
    this.x = x;
}

Calculator2.prototype = Object.create(Calculator1.prototype);
Calculator2.prototype.setValue = function(val) {
    this.x = val;
}

Calculator2.prototype.Sum = function(a,b) {
    this.setValue(this.Square(a+b) );
}
Calculator2.prototype.Div = function(a,b) {
    this.setValue(this.Square(a/b));
}
Calculator2.prototype.Mul = function(a,b) {
    this.setValue(this.Square(a*b));
}
Calculator2.prototype.Square = function(square) {
    return square * square;
}

// 3 уровень
function Calculator3(x) {
    arr = [];
    arr.length = 200;
}
Calculator3.prototype = Object.create(Calculator2.prototype);

Calculator3.prototype.reInit = function() {
    for (var i = 0; i < this.arr.length; i++) {
        this.arr[i] = Math.floor(Math.random() * 50);
        document.write(this.arr[i] + ' ');
    }
}

// 4 уровень
function Calculator4(x) {}
Calculator4.prototype = Object.create(Calculator3.prototype);

var p4 = new Calculator4();

p4.arr = [1,2,3,4];
p4.reInit()
p4.Sum(2,5)