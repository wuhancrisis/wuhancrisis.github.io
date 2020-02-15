$(window).scroll(function() {
    //hide/unhide top menus
    if ($(this).scrollTop() > 1999) { 
        $('.menu').css({
            'display': 'none'
        });
    } else { 
        $('.menu').css({
            'display': 'inline-block'
        });
    }
    //change bg color
    var effect = Math.min(0.3, $(this).scrollTop()/99999)
    $("body").css('background-color', 'rgba(255,0,0,alpha)'.replace('alpha',effect));
    $("body").css('opacity', 1 - effect);
});
