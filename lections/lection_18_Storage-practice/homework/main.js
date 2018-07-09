var model = {
    goods: null
}
var addBtn = document.querySelectorAll('.add-to-cart');
var clearBtn = document.querySelector('#clear-basket');
var basket = document.querySelector('#basket .collection');
var basketContainer =  document.getElementById('basket')
var removeItemBtns = [];
var totalSum = 0;
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
doAjax('GET', './goods.json')
    .then(function(response){
        model.goods = response.goods;
        renderGoods()
    })

function renderGoods(){
    var goodsConteiner = document.getElementById('goods-container')
    for (key in model.goods) {
        var col = document.createElement('div');
        col.className = "col s12 m4 l3";

        var card = document.createElement('div');
        card.className = "card"
        card.setAttribute('id', model.goods[key].id)

        var cardImage = document.createElement('div');
        cardImage.className = "card-image"
        cardImage.innerHTML = ' <img src="' + model.goods[key].imageSrc + ' ">'

        var cardContent = document.createElement('div');
        cardContent.className = "card-content";
        cardContent.innerHTML = '<span class="card-title"> ' + model.goods[key].title + '</span> '+ 
        '<span class="tial"> ' + model.goods[key].price + '</span> ';

        var cardAction = document.createElement('div');
        cardAction.className = 'card-action';


        var addBtn = document.createElement('a');
        addBtn.className = 'add-to-cart';
        addBtn.innerText = 'В корзину!';
        addBtn.addEventListener('click', addToCart);

        cardAction.appendChild(addBtn);
        card.appendChild(cardImage);
        card.appendChild(cardContent);
        card.appendChild(cardAction);
        col.appendChild(card);        
        goodsConteiner.appendChild(col);
        
    }
}

clearBtn.addEventListener('click', function(event){
    clearBasket(basket);
    //очищаем все хранилище
    delete localStorage.goods;
    basketContainer.style.display  = 'none';
});
removeItemBtns.forEach(function(item){
    item.addEventListener('click', clearBasketItem)
});


function addToCart (event){
    itemId = this.parentNode.parentNode.id;
    selectedGood = model.goods[itemId];
    setLocalGoods(selectedGood);
    InitGoodsCart(selectedGood)
}
function setLocalGoods(item) {
    var data = {};
    if (localStorage.goods) {
        data = getLocalGoods();
    }

    if (!data[item.id]) {
        data[item.id] = item;
        data[item.id].quantity = 1;
    }
    else {
        data[item.id].quantity++;
    }

    localStorage.setItem('goods', JSON.stringify(data));
}
function getLocalGoods(){
    return JSON.parse(localStorage.goods);
}
function InitGoodsCart(){
    showBasket();
    var tempitems = getLocalGoods();
    var sum = 0;
    if (basket) {
        clearBasket(basket);
    }
    for (key in tempitems){   
        sum += (tempitems[key].price * tempitems[key].quantity) 
        var li = document.createElement('li');
        removeItemBtn = document.createElement('a');
        removeItemBtn.classList.add('remove-item', 'red-text')
        removeItemBtn.innerHTML = '<i class="material-icons">close</i>';
        removeItemBtn.addEventListener('click', function(event){
            clearBasketItem(tempitems[key])
        });
        li.classList.add('collection-item');
        li.innerHTML =  
            '<span class="item-title">'+ tempitems[key].title + ' </span>' + 
            '<span class="item-price">'+ tempitems[key].price * tempitems[key].quantity + ' </span>' + 
            '<span class="new badge">' + tempitems[key].quantity + '</span>';
        li.appendChild(removeItemBtn)
        basket.appendChild(li);
    }
    totalSum = sum;
    totalContainer = document.getElementById('total-summ');
    totalContainer.innerText = totalSum;
}

function showBasket(){
    basketContainer.style.display  = 'block';
}

function clearBasket(basket) {
    basket.querySelectorAll('li').forEach(item => item.remove());    
}
function clearBasketItem(item) {
    var tempitems = getLocalGoods();  
    totalSum = totalSum -  tempitems[item.id].price * tempitems[item.id].quantity;     
    delete tempitems[item.id]; 
    localStorage.setItem('goods', JSON.stringify(tempitems));
    InitGoodsCart(tempitems);
    if (Object.keys(tempitems).length == 0) {
        basketContainer.style.display  = 'none';
    }
}