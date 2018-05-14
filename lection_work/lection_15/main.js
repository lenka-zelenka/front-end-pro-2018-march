window.onload = function() {
    var block_1 = document.querySelector('.block-1');
    var x, y;

    block_1.addEventListener('mousedown', getCoordinates);
    document.addEventListener('mouseup', function(){
        document.removeEventListener('mousemove', setCoordinates);
    } )
    function getCoordinates (event) {
        x = event.offsetX;
        y = event.offsetY;
        document.addEventListener('mousemove', setCoordinates);
    }
    function setCoordinates(event) {
        block_1.style.left =  event.pageX - x  + 'px';
        block_1.style.top =  event.pageY - y + 'px';    
    }
}