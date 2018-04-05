// функции 
function doMath(x, y, z) {
    if (!x || !y || !z) {
        return "ERROR";
        return;
    }
    if ( z == '+') {
        return x + y;
    } else if ( z == '-') {
        return x - y;
    } else if ( z == '*') {
        return x * y;
    } else if ( z == '/') {
        return x / y;
    } else if ( z == '%') {
        return x % y;
    } else if ( z == '^') {
        return Math.pow( x,  y) ;
    } else {
        return 'NOT KNOWN OPERATION'
    }
}

x = +prompt('Enter x');
z = prompt('Enter ZNAK')
y = +prompt('Enter y');
console.log( x, z, y )
console.log( doMath(x, y, z) )