function Calc(a, b) {
    this.a = a;
    this.b = b;
}

Calc.prototype.multiply = function () {
    console.log('multiply ' + this.a + ', ' + this.b + ': ' + this.a * this.b);
}



Calc.prototype.getValue = function () {
    return this.value;
}

Calc.prototype.convertToSupercalc = function (decorator) {
    var F = function () { },
        overrides = this.constructor.decorators[decorator],
        newObj;

    // Прототипом для декоратора устанавливается тот объект, который декорируется.
    F.prototype = this;
    newObj = new F();
    // сохраняем ссылку на тот объект, который декорируем
    newObj.super = F.prototype;

    // Все свойства и методы декоратора копируем в декорируемый объект
    for (i in overrides) {
        if (overrides.hasOwnProperty(i)) {
            newObj[i] = overrides[i];
        }
    }

    return newObj;
}

// Все декораторы будут храниться в свойстве конструктора.
Calc.decorators = {}

Calc.decorators.ingenier = {
    pover: function () {
        console.log('pover ' + this.a + ','+ this.b +': '+ Math.pow(this.a, this.b))
    },
    factorial: function () { },
    sin: function () { },
    cos: function () { }
}

var aaa = new Calc(2, 3)

aaa = aaa.convertToSupercalc('ingenier')


aaa.multiply()
aaa.pover()
