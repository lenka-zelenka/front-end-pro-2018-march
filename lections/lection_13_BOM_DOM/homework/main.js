window.onload = function(){


    var inputValue = document.getElementsByTagName('input');
    
    // хотела законкатенировать в переменную, но не работает

    // var textareaValue;
    // for (i =0; i < inputValue.length; i++){
    //     textareaValue += inputValue[i].value + ',';
    // }
    // this.setInterval(function(){
    //     document.querySelector('textarea').value = textareaValue;
    // }, 300)

    this.setInterval(function(){
        if (inputValue[0].value || inputValue[1].value || inputValue[2].value) {
        document.querySelector('textarea').value = inputValue[0].value + ',' +  inputValue[1].value + ',' + inputValue[2].value;
        }
    }, 300)
    console.log(inputValue)
}

