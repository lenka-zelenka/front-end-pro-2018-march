//  СОБЫТИЯ
var block = document.querySelector('.block');

var h = 100,
    step = 20,
    direction = 1,
    gap = 5;
topJumpPosition = block.offsetTop - h;

this.document.addEventListener('keydown', function(event){
    if(event.keyCode == 32) {
        return setInterval(jump, 50)
    }
})

function jump(){
   
    // if ((x >= window.innerHeight - h - gap) )  {
    //     direction = -direction;
    // } 
    // block.style.bottom = - window.innerHeight + (4*direction) + 'px';
    if (block.offsetTop <= topJumpPosition) {
        debugger;
        direction = -1;
        console.log(direction);
        
    } 
    // ||
    //     (block.offsetTop <= topJumpPosition + h +  gap && direction == -1)) {
    //         direction = -direction;
    //         console.log(direction);
    //     }
    block.style.top = block.offsetTop - (gap*direction)  + 'px';

}

//     block.addEventListener('mousemove', showCoordinates);
//     button.addEventListener('click', function(){
//         if (timer) {
//             clearInterval(timer);
//             timer = undefined;
//             return;
//         }
//         timer = setTimer();
//     });
//     var step = 4, 
//         direction = 1;

//     timer = setTimer();

//     function startAnimation(){
//         if(block_2.offsetLeft >= (window.innerWidth - block_2.offsetWidth) ||
//             block_2.offsetLeft <= 0 && direction == -1) {
//                 direction = -direction;
//             }
//         block_2.style.left = block_2.offsetLeft + (step*direction) + 'px';  
//     }
//     function setTimer(){
//         return setInterval(startAnimation, 20);
//     }
//     setInterval( function(){
//         block_2.style.backgroundColor =  getColor();
//     },2000)
// }

// function showCoordinates(event) {
//     this.innerHTML = 'x:' + event.offsetX + '<br> y:'+ event.offsetY;
// }

// function getColor(){
//     var random_color = []
//     for (var i=0; i<3; i++){
//         random_color[i] = Math.floor(Math.random()* 255)
//     } 
//     return 'rgb(' + random_color[0] + ',' + random_color[1] + ',' + random_color[2];
// 

// }