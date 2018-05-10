// BOM_DOM

//  DOM

window.onload = function(){
    // var blocks = document.querySelectorAll(".block");
    // var counter = 0;
    var i = 0;

    // setInterval(function(){
    //     blocks[i].classList.toggle('bottom');
    //     console.log(counter, i) 
    //     if ( i == blocks.length - 1) {
    //         counter--;
    //     } else if (i == 0) {
    //         counter ++;            
    //     } 
    //     i += counter;
        
    // }, 1000 );

    var inputValue = document.getElementsByTagName('input');
    var textareaValue;
    // for (i =0; i < inputValue.length; i++){
    //     textareaValue += inputValue[i].value + ',';
    // }
    this.setInterval(function(){
        document.querySelector('textarea').value = inputValue[0].value + ',' +  inputValue[1].value + ',' + inputValue[2].value;
    }, 300)
    console.log(inputValue)
}

