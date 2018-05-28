window.onload = function() {
    var contextmenu = document.querySelector('#context-menu');
    var mousepositionX,
        mousepositionX;

    document.addEventListener('contextmenu', function(event){
        event.preventDefault();
             
        contextmenu.style.left = event.pageX + 'px';
        contextmenu.style.top = event.pageY + 'px';
        contextmenu.classList.add('show');
    })
    document.addEventListener('mousedown', function(event){     
        contextmenu.classList.remove('show');
    }) 


    // DATA
    var cm = {
        actions: [
            {
                title: 'Copy',
                handler:  'Copy',
            },
            {
                title: 'Paste',
                handler:  'Paste',
            },
            {
                title: 'Delete',
                handler:  'Delete',
            },
            
        ]
    }


    for(i=0; i < cm.actions.length; i++) {
        var li = document.createElement('li');
        li.classList.add('context-menu-item');
        li.innerHTML = cm.actions[i].title;
        
        li.addEventListener('mousedown', window[cm.actions[i].handler]);
        contextmenu.appendChild(li);
    }
}
function Copy(){
    console.log('Copy')
}
function Paste(){
    console.log('Paste')
}
function Delete(){
    console.log('Delete')
}

