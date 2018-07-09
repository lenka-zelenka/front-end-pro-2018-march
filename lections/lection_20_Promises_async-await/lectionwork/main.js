console.log('Lection_20');



function doAjax(method, path){
    var xhr = new XMLHttpRequest();
    
    xhr.open(method, path, true);
    xhr.send();
    return new Promise(function(resolve, reject){
        xhr.onreadystatechange = function(){
            if (xhr.readyState != 4) {
                return;
            }
            if (xhr.status != 200) {
                reject(xhr);
            } 
            resolve(JSON.parse(xhr.responseText));
        }
    })
}

doAjax('GET', '/config.json')
    .then(configSuccess);

function configSuccess(response) {
    doAjax('GET', '/' + response.role +'.json')
        .then(initMenu)
}
Promise
    .all([
        doAjax('GET', '/data.json'),
        doAjax('GET', '/data2.json'),
    ])
    .then(function(response){
        console.log(response[2]); 
        
    })
    .catch(function(){
        console.log('Error');
    });

function initMenu(menuItems){
    var menu = document.getElementById('menu');

    for (i = 0; i < menuItems.menu.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = menuItems.menu[i].title;
        menu.appendChild(li);
    }
}


