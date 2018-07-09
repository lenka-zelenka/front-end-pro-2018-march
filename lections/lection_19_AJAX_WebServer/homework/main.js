function doAjax(method, path, data) {
    var xhr = new XMLHttpRequest();

    xhr.open(method, path, true);
    xhr.send(data);
    return new Promise(function(resolve, reject){
        xhr.onreadystatechange = function(){
            if (xhr.status != 200) {
                reject(xhr);
            } 
            resolve(JSON.parse(xhr.responseText));
        }
    })
}

var sendBtn = document.getElementById('send-data');
var userForm = document.forms["user-data"];
var userName = userForm.elements.name;
var userAge = userForm.elements.age

var userData = {
    name: '',
    age: ''
} 

userName.addEventListener("input", checkName);
userAge.addEventListener("input", checkAge)

function checkName(event){
    if ( userName.value.search(/\d/) != -1 ) { 
        addError(this, 'В имени не должно быть цифр!' )
    } else {
        deleteError(this);
    }
} 

function checkAge (event){
    if ( +userAge.value < 0 ||  +userAge.value >= 120 ) { 
        addError(this, 'Указан неправильный возраст!' )
    } else {
        deleteError(this);
    }
}

function addError(element, errorText ){
    var mesage = element.parentNode.querySelector('p.error');
    element.classList.add('error');
    mesage.classList.add('display');
    mesage.innerHTML = errorText;
    sendBtn.setAttribute('disabled', 'disabled')
}
function deleteError(element){
    var mesage = element.parentNode.querySelector('p.error');
    mesage.classList.remove('display');
    element.classList.remove('error');
    sendBtn. removeAttribute('disabled', 'disabled')
}

sendBtn.addEventListener('submit', function(event){
    event.preventDefault();
    setData();
})


function setData() {
    userData.name = userName.value;
    userData.age =  userAge.value;
    userData = JSON.stringify(userData);
    doAjax('POST', '/registration', userData)
}
