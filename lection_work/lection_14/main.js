//  СОБЫТИЯ

window.onload =  function(){
    var timer;
    var bg_color;
    var block_1 = document.querySelector('.block-1'),
        block_2 = document.querySelector('.block-2');
        button = document.querySelector('#toggle-block');

    block_1.addEventListener('mousemove', showCoordinates);
    button.addEventListener('click', function(){
        if (timer) {
            clearInterval(timer);
            timer = undefined;
            return;
        }
        timer = setTimer();
    });
    var step = 4, 
        direction = 1;

    timer = setTimer();

    function startAnimation(){
        if(block_2.offsetLeft >= (window.innerWidth - block_2.offsetWidth) ||
            block_2.offsetLeft <= 0 && direction == -1) {
                direction = -direction;
            }
        block_2.style.left = block_2.offsetLeft + (step*direction) + 'px';  
    }
    function setTimer(){
        return setInterval(startAnimation, 20);
    }
    setInterval( function(){
        block_2.style.backgroundColor =  getColor();
    },500)
}

function showCoordinates(event) {
    this.innerHTML = 'x:' + event.offsetX + '<br> y:'+ event.offsetY;
}

function getColor(){
    var random_color = []
    for (var i=0; i<3; i++){
        random_color[i] = Math.floor(Math.random()* 255)
    } 
    return 'rgb(' + random_color[0] + ',' + random_color[1] + ',' + random_color[2];
}