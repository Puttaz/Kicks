$(document).ready(function(){
    var items = []
    var totalAmount = 0.0;
    if(localStorage.getItem('items')){
        console.log("items found")
        items = JSON.parse(localStorage.getItem('items'))
    }

    var str = '';
    for (var i = 0; i < items.length; i++) {
        var quantityId = items[i].name+'-quantity';
        var removeId = +items[i].name+'-btn';
        totalAmount += items[i].price * items[i].quantity;
        str += '<tr class="item" id="'+items[i].name+'">' +
          '<td><h3>' + items[i].name +'</h3></td>'+
          '<td><img src = ' + items[i].img + '></td>' +
          '<td><input class="quantity" type="number" value = '+items[i].quantity+'></input></td>'+
          '<td><p>' + items[i].price +  '</p></td>'+
          '<td><p>' + (items[i].price * items[i].quantity).toFixed(2)+  '</p></td>'+
          '<td><button class="remove-btn">Remove</button></td>'+
          '</tr>';
    }
    $(".cart").append(str);

    $("#total-amount").html(totalAmount.toFixed(2));

    var removeBtns = document.getElementsByClassName('remove-btn')
    for (var i = 0; i < removeBtns.length; i++) {
        var button = removeBtns[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantitys = document.getElementsByClassName('quantity')
    for (var i = 0; i < quantitys.length; i++) {
        var input = quantitys[i]
        input.addEventListener('change', quantityChanged)
    }
})

function removeCartItem(event) {
    var buttonClicked = event.target;
    var rowElement = buttonClicked.parentElement.parentElement;

    if(localStorage.getItem('items')){
        items = JSON.parse(localStorage.getItem('items'))

        for (let j = 0; j < items.length; j++){
            if (rowElement.id == items[j].name){
                items.splice(j, 1);
                console.log("item found" + j)
            }
        }

        console.log(items)
        localStorage.setItem('items',JSON.stringify(items))
        window.alert("Item Removed")

    }
    else{
        window.alert("Item Already removed")
    }
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    console.log("input changed")

    var priceElement = input.parentElement.nextElementSibling.firstChild;
    var price = +priceElement.innerHTML;
    price = parseFloat(price);
    var totalElement = priceElement.parentElement.nextElementSibling.firstChild;
    totalElement.innerHTML = (price*input.value).toFixed(2);

    var rowElement = input.parentElement.parentElement;

    if(localStorage.getItem('items')){
        items = JSON.parse(localStorage.getItem('items'))

        for (let j = 0; j < items.length; j++){
            if (rowElement.id == items[j].name){
                items[j].quantity = input.value;
            }
        }

        console.log(items);
        localStorage.setItem('items',JSON.stringify(items));
        window.alert("Item Updated");

    }
    else{
        window.alert("Item not avaialable Refresh!");
    }

    updateCartTotal();
}

function updateCartTotal(){
    var totalAmount = 0.0;
    if(localStorage.getItem('items')){
        items = JSON.parse(localStorage.getItem('items'))
        for (var i = 0; i < items.length; i++) {
            totalAmount += items[i].price * items[i].quantity;
        }

        $("#total-amount").html(totalAmount.toFixed(2));
    }
}

