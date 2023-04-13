$(document).ready(function(){
    var items = []
    if(localStorage.getItem('items')){
        console.log("items found")
        items = JSON.parse(localStorage.getItem('items'))
    }

    var str = '';
    for (var i = 0; i < items.length; i++) {
        var quantityId = items[i].name+'-quantity';
        var removeId = +items[i].name+'-btn';
        str += '<tr class="item" id="'+items[i].name+'">' +
          '<td><h3>' + items[i].name +'</h3></td>'+
          '<td><img src = ' + items[i].img + '></td>' +
          '<td><input class="quantity" type="number" value = '+items[i].quantity+'></input></td>'+
          '<td><p>' + items[i].price +  '</p></td>'+
          '<td><p>' + items[i].price * items[i].quantity+  '</p></td>'+
          '<td><button class="remove-btn">Remove</button></td>'+
          '</tr>';
    }
    $(".cart").append(str);

    var removeBtns = document.getElementsByClassName('remove-btn')
    for (var i = 0; i < removeBtns.length; i++) {
        var button = removeBtns[i]
        button.addEventListener('click', removeCartItem)
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
                // cart.splice(cart[j],1);
            }
        }

        console.log(items)

        // let index = cart.indexOf(rowElement.id)
        // if (index > -1) {
        //     items = items.splice(index, 1);
        // }
        localStorage.setItem('items',JSON.stringify(items))
        window.alert("Item Removed")

    }
    else{
        window.alert("Item Already removed")
    }
    buttonClicked.parentElement.parentElement.remove()
    //updateCartTotal()
}

var reload = function(){
    var items = []
    if(localStorage.getItem('items')){
        console.log("items found")
        items = JSON.parse(localStorage.getItem('items'))
    }

    var str = '';
    for (var i = 0; i < items.length; i++) {
        var quantityId = items[i].name+'-quantity';
        var removeId = +items[i].name+'-btn';
        str += '<tr>' +
          '<td><h3>' + items[i].name +'</h3></td>'+
          '<td><img src = ' + items[i].img + '></td>' +
          '<td><input id="'+items[i].name+'-quantity" type="number" value = '+items[i].quantity+'></input></td>'+
          '<td><p>' + items[i].price +  '</p></td>'+
          '<td><p>' + items[i].price * items[i].quantity+  '</p></td>'+
          '<td><button id="'+items[i].name+'-btn" >Remove</button></td>'+
          '</tr>';

        //   $('#'+quantityId).bind('keyup mouseup', function () {
        //     for (var i = 0; i < items.length; i++) {
        //         if(items[i].name = items[i].name){
        //             items[i].quantity = $('#'+quantityId).value;
        //             reload();
        //         }
        //         }       
        //     });
        // $('#'+quantityId).on('click',function(){
        //     items = items.splice(i, 1);
        //     localStorage.setItem('items',JSON.stringify(items));
        //     reload();
        // });
    }
    // str+='</div>';

    $(".cart").append(str);
}