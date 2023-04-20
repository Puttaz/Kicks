$(document).ready(function(){
    $('.next').on('click', function(){
        var activeImage = $('.active');
        var nextImage = activeImage.next();

        if(nextImage.length){
            activeImage.removeClass('active').css('z-index',-10);
            nextImage.addClass('active').css('z-index',10);
        }
    })

    $('.prev').on('click', function(){
        var activeImage = $('.active');
        var prevImage = activeImage.prev();

        if(prevImage.length){
            activeImage.removeClass('active').css('z-index',-10);
            prevImage.addClass('active').css('z-index',10);
        }
    })
});
