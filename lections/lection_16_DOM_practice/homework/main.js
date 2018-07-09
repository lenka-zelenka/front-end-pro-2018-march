window.onload = function () {
    var contextmenu = document.querySelector('#context-menu');
    var block = document.querySelector('.block');
    var positionY = block.offsetTop,
        positionX = block.offsetLeft;

    acntionCtrl = {
        JumpHandler: JumpHandler,
        Remove: Remove,
        ChangeColor: ChangeColor
    }



    function JumpHandler() {
        jump(block);
    }

    function jump(block) {
        setTimeout(function () {
            block.style.top = block.offsetTop - h + 'px';
        }, 200)
        setTimeout(function () {
            block.style.top = block.offsetTop + h + 'px';
        }, 300)
        isMoveing();
    }

    function Remove() {
        block.remove();
    }

    function ChangeColor() {
        var color = prompt("Введите цвет");
        block.style.backgroundColor = color;
    }


    


    // DATA
    var cm = {
        actions: [{
                title: 'Jump',
                handler: 'JumpHandler',
            },
            {
                title: 'Remove',
                handler: 'Remove',
            },
            {
                title: 'Change color',
                handler: 'ChangeColor',
            },

        ]
    }


    for (i = 0; i < cm.actions.length; i++) {
        var li = document.createElement('li');
        li.classList.add('context-menu-item');
        li.innerHTML = cm.actions[i].title;
        li.addEventListener('mousedown', acntionCtrl[cm.actions[i].handler]);
        contextmenu.appendChild(li);
    }
    block.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        // console.log(contextmenu.getBoundingClientRect())
        contextmenu.classList.add('show');
        if(event.pageX >= window.innerWidth - contextmenu.clientWidth){
            contextmenu.style.left = event.pageX - contextmenu.clientWidth + 'px';
        } else {
            contextmenu.style.left = event.pageX + 'px';
        }
        if(event.pageY >= window.innerHeight - contextmenu.clientHeight){
            contextmenu.style.top = event.pageY - contextmenu.clientHeight + 'px';
        } else {
            contextmenu.style.top = event.pageY + 'px';
        }

        
        
    })
    document.addEventListener('mousedown', function (event) {
        contextmenu.classList.remove('show');
    })


    var isMove =false;

    var h = 100,
        step = 20,
        gap = 5;

    function sitDown() {
        if (block.clientHeight === 100) {
            block.style.height = 50 + 'px'
            moveTo('top', 'offsetTop', -h/2 )
        }
    }

    function getUp() {
        if (block.clientHeight === 50) {
            block.style.height = 100 + 'px'
            moveTo('top', 'offsetTop', h/2 )
        }
    }
    function moveTo(direction, position, step){
        block.style[direction] = block[position] - step + 'px';
    }
    function isMoveing(){
        isMove = true;
        setTimeout(function() {
            isMove = false;
        }, 100)
    }

    document.addEventListener('keyup', function (event) {
        if (!event.ctrlKey) {
            getUp();
        }
    })
    document.addEventListener('keydown', function (event) {
        // console.log(event)
        if (event.ctrlKey) {
            sitDown();
        }

        if (isMove) return;
        switch (event.keyCode) {
            case 32:
                // setTimeout(function () {
                //     block.style.top = block.offsetTop - h + 'px';
                // }, 200)
                // setTimeout(function () {
                //     block.style.top = block.offsetTop + h + 'px';
                // }, 300)
                jump(block);
                
                break;
            case 37:
                // ArrowLeft
                if(block.offsetLeft >= step) {
                    moveTo('left', 'offsetLeft', step);
                    isMoveing();
                }
                break
            case 38:
                // ArrowUp
                if(block.offsetTop >= step){
                    moveTo('top', 'offsetTop', step)
                    isMoveing();
                }
                break
            case 39:
                // ArrowRight
                if(block.offsetLeft + block.clientWidth + step <= window.innerWidth ){
                    moveTo('left', 'offsetLeft', -step)
                    isMoveing();
                }
                break
            case 40:
                // ArrowDown
                if(block.offsetTop + block.clientHeight + step <= window.innerHeight){
                    moveTo('top', 'offsetTop', -step );
                    isMoveing();
                }
        }
    })



}