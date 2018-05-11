window.onload = function(){
    var range = document.getElementById('range'),
        number = document.getElementById('number');
        
        
    range.addEventListener('input', function(){
        drawDiagram (this.value);
        setValue (number, this.value)         
    } )
    number.addEventListener('input', function(){
        drawDiagram (this.value);
        setValue (range, this.value) 
    } )
}
function setValue (input, value) {
    input.value = value;
}
function drawDiagram (value) {
    var comission = document.querySelector('.diagram-comission'),
        range = document.querySelector('.diagram-range');
        
    range.style.height = value + '%';
    comission.style.bottom = value + '%';
    comission.style.height = getComissionAmount(value) + '%';
}

function getComissionAmount (range){
    if (range < 20) {
        return 2;
    }else if (range >= 20 && range < 50) {
        return 4;
    } else if (range >+ 50 && range < 75) {
        return 6;
    } else if (range >= 75 && range <= 100) {
        return 8
    }

}