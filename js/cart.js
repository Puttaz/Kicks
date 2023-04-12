$(document).ready(function(){
    reload();
})

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
        str += '<div class ="cart-items">' +
          '<h3>' + items[i].name +'</h3>'+
          '<img src = ' + items[i].img + '>' +
          '<input id="'+items[i].name+'-quantity" type="number" value = '+items[i].quantity+'></input>'+
          '<p>Price : ' + items[i].price +  '</p>'+
          '<p>Item Total : ' + items[i].price * items[i].quantity+  '</p>'+
          '<button id="'+items[i].name+'-btn" >Remove</button>'+
          '</div>';

          $('#'+quantityId).bind('keyup mouseup', function () {
            for (var i = 0; i < items.length; i++) {
                if(items[i].name = items[i].name){
                    items[i].quantity = $('#'+quantityId).value;
                    reload();
                }
                }       
            });
        $('#'+quantityId).on('click',function(){
            items = items.splice(i, 1);
            localStorage.setItem('items',JSON.stringify(items));
            reload();
        });
      }

      $(".cart").append(str);
}