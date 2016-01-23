var swoop = swoop || {};
swoop.init = function() {
    swoop.backToTop();
    swoop.anchorEasing();
    swoop.colorizeDot();
};

swoop.backToTop = function(){
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
};

swoop.anchorEasing = function(){
    $('.navbar-right a[href*=#]').click(function(event){
        var url = "#" + $.attr(this, 'href').substring($.attr(this, 'href').indexOf("#")+1);
        $('html, body').animate({
            scrollTop: $( url ).offset().top
        }, 500);
        $('.navbar-toggle').click();
        return false;
    });
    $('#talk-to-swoop').on('click', function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
};

swoop.navActive = function(){
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 0) {
            $("section:not([id*='testimonials']):not([id*='companies']").each(function(i) {
                if ($(this).position().top <= windscroll ) {
                    $('nav a.active').removeClass('active');
                    $('nav a').not('.blog').eq(i).addClass('active');
                }
            });

        } else {
            $('nav a.active').removeClass('active');
            $('nav a:first').addClass('active');
        }

    }).scroll();
};

swoop.colorizeDot = function(){
    $("strong:contains('co.lateral')").each(function (){
        $(this).html($(this).text().replace('.', "<span class='dot'>.</span>"));
    });
};

$(function(){
    swoop.init();
});