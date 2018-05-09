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
    this.arr = [];
    this.arr.length = 200;
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


document.write('<br>')
// 2) Создать класс SuperMath. Добавить к экземпляру метод - check(obj), 
// параметр obj которого имеет свойства X, Y, znak. 
// Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. 
// Если -да, сделать мат действие znak(которое описано в прототипе),
//  иначе - запросить ввод новых данных через метод input() класса SuperMath.
// Пример обекта: `obj = { X:12, Y:3, znak: “/”}`, возможные варианты znak=>  `+ - / * %`.
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия
function SuperMath(){
    var  x, y, znak;
}

SuperMath.prototype.checkZnak = function (znak){
    if (znak == '+' || znak == '-' || znak ==  '/' || znak ==   '*' || znak == '%'){
        this.check({x: this.x, y: this.y, znak: this.znak})
    } else {
        this.input();
    }
}
SuperMath.prototype.input = function(){
    alert('Введите новые данные');
    this.x =  +prompt('Введите х: ')
    this.y =  +prompt('Введите у: ')
    this.znak = prompt('Введите знак: ')
    this.checkZnak(this.znak)
}

SuperMath.prototype.check = function(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.znak = obj.znak;

    var response = confirm("Вы хотите произвести действие " + this.znak + ' c числами' + this.x + ' и '+ this.y + ' ?');
    if (response){
        document.write("Результат: ")
        if (this.znak == '+'){
            document.write(this.x + this.y)
        } 
        if (this.znak == '-'){
            document.write(this.x - this.y)
        } 
        if (this.znak == '/'){
            document.write(this.x / this.y)
        } 
        if (this.znak == '*'){
            document.write(this.x * this.y)
        } 
        if (this.znak == '%'){
            document.write(this.x % this.y)
        } 
    } else {
        this.input()
    }
}

obj = {x: 4, y: 2, znak: '+'};
var s = new SuperMath();
s.check(obj)