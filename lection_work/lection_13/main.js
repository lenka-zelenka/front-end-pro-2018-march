// BOM_DOM

//  DOM

window.onload = function(){
    var blocks = document.querySelectorAll(".block");
    var counter = -1;
    var i = 0;

    setInterval(function(){
        if ( i == blocks.length - 1) {
            counter = -1;
        } else if () {counter = 1}
        // i == ( blocks.length - 1 ) ? counter = -1 : i += counter;
        blocks[i].classList.toggle('bottom');
        
        i += counter;
    }, 1000 );
    
}