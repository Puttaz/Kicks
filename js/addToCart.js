$(document).ready(function(){
    var items = []

    $('#nike-pro').on('click',function(){
        console.log("clicked")
        if(localStorage.getItem('items')){
            items = JSON.parse(localStorage.getItem('items'))
            items.push({name:'Nike Pro',price: '59.99', img:'media/images/men6.jpg', quantity:'1'})
            localStorage.setItem('items',JSON.stringify(items))
           }
           else{
            items.push({name:'Nike Pro',price: '59.99', img:'media/images/men6.jpg',quantity:'1'})
            localStorage.setItem('items',JSON.stringify([{name:'Nike Pro',price: '59.99', img:'media/images/men6.jpg',quantity:'1'}]))
           }
    })

    $('#air-jordan').on('click',function(){
        console.log("clicked")
        if(localStorage.getItem('items')){
            items = JSON.parse(localStorage.getItem('items'))
            items.push({name:'Air Jordan',price: '49.99', img:'media/images/men3.jpg',quantity:'1'})
            localStorage.setItem('items',JSON.stringify(items))
           }
           else{
            items.push({name:'Air Jordan',price: '49.99', img:'media/images/men3.jpg',quantity:'1'})
            localStorage.setItem('items',JSON.stringify([{name:'Air Jordan',price: '49.99', img:'media/images/men3.jpg',quantity:'1'}]))
           }
    })

    $('#nike-blazers').on('click',function(){
        console.log("clicked")
        if(localStorage.getItem('items')){
            items = JSON.parse(localStorage.getItem('items'))
            items.push({name:'Nike Blazers',price: '99.99', img:'media/images/men5.jpg', quantity:'1'})
            localStorage.setItem('items',JSON.stringify(items))
           }
           else{
            items.push({name:'Nike Blazers',price: '99.99', img:'media/images/men5.jpg',quantity:'1'})
            localStorage.setItem('items',JSON.stringify([{name:'Nike Blazers',price: '99.99', img:'media/images/men5.jpg',quantity:'1'}]))
           }
    })

    $('#air-force-1').on('click',function(){
        console.log("clicked")
        if(localStorage.getItem('items')){
            items = JSON.parse(localStorage.getItem('items'))
            items.push({name:'Air Force 1',price: '129.99', img:'media/images/men4.jpg', quantity:'1'})
            localStorage.setItem('items',JSON.stringify(items))
           }
           else{
            items.push({name:'Air Force 1',price: '129.99', img:'media/images/men4.jpg',quantity:'1'})
            localStorage.setItem('items',JSON.stringify([{name:'Air Force 1',price: '129.99', img:'media/images/men4.jpg',quantity:'1'}]))
           }
    })
})