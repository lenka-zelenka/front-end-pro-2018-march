 console.log('lection 09')

// this
// контекст выполнения -> this

var obj = {
    name: 'Lena',
    gender: 'female',
    renderObject: fn,
    gender1: 'female1'
}

document.write('Task 1 <br/>')
function fn() {
    document.write('{ <br/>');
    for(var key in this ){
        if ( key == 'renderObject' ) {
            continue;
            
        } else {
            document.write(key + ' : ' + this[key] +  '<br/>');
        }
    }
    document.write('} <br/>');
}
obj.renderObject()

document.write('Task 2 <br/>')

var data = {
    p: 600,
    str: 'Hello',
    x: 10,
    str: 'Heelo',
    addRecord: addRecord,   
}

function addRecord() {
    var args = arguments;
    var last = args[args.length - 1];

    var flag = typeof last === 'boolean' ? last : false
    // args[args.length - 1] ? flag = true : ''; 
    for ( var i = 0; i < args.length; i++ ) {
        if ( args[i] == last && 'boolean'  ){
            return;
        }
        for (var key in args[i] ){
            if (flag &&  this[key]) {
                continue;
            } else {
                this[key] = args[i][key];
            }
        }
            
    }   
}

console.log(data);
data.addRecord({x: 10, y: 24}, {z: 12, x: 24, text: 'tarararar'}, true )
console.log(data);
