$(window).scroll(function() {
    //hide/unhide top menus
    if ($(this).scrollTop() > 1999) { 
        $('.scroll-hide').css({
            'display': 'none'
        });
    } else { 
        $('.scroll-hide').css({
            'display': 'inline-block'
        });
    }
    //change bg color
    var effect = Math.min(0.3, $(this).scrollTop()/99999)
    $("body").css('background-color', 'rgba(255,0,0,alpha)'.replace('alpha',effect));
    $("body").css('opacity', 1 - effect);
});
