var block = document.querySelector('.block');

var h = 100,
    step = 20,
    direction = 1,
    gap = 5;

document.addEventListener('keydown', function(event){
    console.log(event)
    if (event.ctrlKey) {
        block.style.height = 50 + 'px'
        block.style.top = block.offsetTop + 50 + 'px'
        
    }
    switch(event.keyCode) {
        case 32: 
            setTimeout(function () {
                block.style.top = block.offsetTop - h + 'px'
            },200)
            setTimeout(function () {
                block.style.top = block.offsetTop + h + 'px'
            },300)
            break
        case 37 : 
            block.style.left = block.offsetLeft - step + 'px';
            break
        case 38: 
            block.style.top = block.offsetTop - step + 'px'; 
            break
        case 39: 
            block.style.left = block.offsetLeft + step + 'px';
            break
        case 40: 
            block.style.top = block.offsetTop + step + 'px';
    }
})