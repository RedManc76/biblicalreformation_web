

$(document).ready(function() {

    var scrollY = window.scrollY
    if(scrollY == 0){
        document.body.style.overflowY = 'hidden';
    }else{
        $("#cover").css({
            "mask-position": "100% 50%",
            "-webkit-mask-position": "100% 50%"
        });
        setTimeout(function() {
            $('.card_container').css('opacity', 1);
        }, 200);
    }

    $(window).scroll(function(e) {
        frames = 17;
        step = (($("body").height()) - window.innerHeight) / frames;
        scrollStep = parseInt(($(window).scrollTop()) / step);
        if (scrollStep < 0) scrollStep = 0
        maskPosition = 100 / frames * scrollStep;
    
        $("#cover").css({
            "mask-position": maskPosition + "% 50%",
            "-webkit-mask-position": maskPosition + "% 50%"
        });
    
        if (maskPosition == 100){
            setTimeout(function() {
                $('.card_container').css('opacity', 1);
            }, 200);
        }
    
        if (maskPosition != 100){
            $('.card_container').css('opacity', 0);
        }
    
    });

    setTimeout(function() {
        document.body.style.overflowY = 'auto';
    }, 2000);

    $('.has-animation').each(function(index) {
        $(this).delay($(this).data('delay')).queue(function(){
            $(this).addClass('animate-in');
        });
    });

});




