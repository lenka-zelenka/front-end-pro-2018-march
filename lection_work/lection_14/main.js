//  СОБЫТИЯ

window.onload =  function(){
    var block_1 = document.querySelector('.block-1'),
        block_2 = document.querySelector('.block-2');
        button = document.querySelector('#toggle-block');

    block_1.addEventListener('mousemove', showCoordinates);
    button.addEventListener('mousemove', toggleBlock);
    // block.addEventListener('mousemove', changeColor)
    var step = 4, 
        direction = 1;
    setInterval( function(){
        block_2.style.left = block_2.offsetLeft + (step*direction) + 'px';                
        if(block_2.offsetLeft == window.innerWidth - block_2.offsetWidth || block_2.offsetLeft <= 0) {
            direction = -direction;
        }
    }, 10)
}

function showCoordinates(event) {

    this.innerHTML = 'x:' + event.offsetX + '<br> y:'+ event.offsetY;
}

function toggleBlock (event) {

}
// function changeColor(event){

// }