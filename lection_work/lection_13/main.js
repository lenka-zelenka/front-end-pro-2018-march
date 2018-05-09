// BOM_DOM

//  DOM

window.onload = function(){
    var blocks = document.querySelectorAll(".block");
    var counter = 0;
    var i = 0;

    setInterval(function(){
        blocks[i].classList.toggle('bottom');
        console.log(counter, i) 
        if ( i == blocks.length - 1) {
            counter--;
        } else if (i == 0) {
            counter ++;            
        } 
        i += counter;
        
    }, 1000 );
    
}