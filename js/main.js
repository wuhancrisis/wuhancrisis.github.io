
$(window).scroll(function() {
    if ($(this).scrollTop() > 999) { //use `this`, not `document`
        $('.menu').css({
            'display': 'none'
        });
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() < 999) { //use `this`, not `document`
        $('.menu').css({
            'display': 'inline-block'
        });
    }
});

$(window).scroll(function() {
    var effect = Math.min(0.3, $(this).scrollTop()/99999)
    $("body").css('background-color', 'rgba(255,0,0,alpha)'.replace('alpha',effect));
    $("body").css('opacity', 1 - effect);
});
