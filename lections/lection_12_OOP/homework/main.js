function SuperArray(n, m, options) {
   var arr = [];
   for (i=0 ; i < n; i++){
        arr[i] = new Array(m);
    }
   for (i = 0; i < n; i++){
        for(j = 0; j < m; j++){
            arr[i][j] = Math.floor( Math.random() * (options.max - options.min + 1) + options.min)
        }
    }
    this.arr = arr;
    this.marker = '&';
    this.element = 0;
    this.bufer = {}
    
}
SuperArray.prototype.render = function(separator) {
    var separator
    for (i = 0; i < this.arr.length; i++){
        for(j = 0; j < this.arr[i].length; j++){
            document.write(this.arr[i][j] + ' ')
        }
        separator += ' ' + separator
        document.write('<br>')
    }
    document.write(separator + '<br>');
};

SuperArray.prototype.clear = function (direction, k) {
    for (i = 0; i < this.arr.length; i++){
        for(j = 0; j < this.arr[i].length; j++){
            if (direction == 'row' && i == k - 1) {
                this.arr[i][j] = 0;
            } else if ( direction == 'col' && j == k - 1 ) {
                this.arr[i][j] = 0;
            }
        }   
    }
}

SuperArray.prototype.setMarker = function (position) {
    var i = position.x - 1;
    var j = position.y - 1;

    // запоминаем значение и позицию элемента
    this.element = this.arr[i][j]
    this.bufer.x = i;
    this.bufer.y = j;
    this.arr[i][j] = this.marker;
}

SuperArray.prototype.goTo = function (position) {
    this.arr[this.bufer.x][this.bufer.y] = this.element;
    this.setMarker(position);
}

var p = new SuperArray(5, 5, {min: 10, max: 55})
p.render('*')

// p.clear('row', 3)
