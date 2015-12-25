var swoop = swoop || {};
swoop.init = function() {
    swoop.backToTop();
    swoop.anchorEasing();
};

swoop.backToTop = function(){
    $('.back-to-top, .navbar-brand').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
};

swoop.anchorEasing = function(){
    $('#navbar').on('click', 'a[href*=#]', function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        $('.navbar-toggle').click();
        return false;
    });
    $('#talk-to-swoop').on('click', function(event){
        console.log('aw');
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

};

$(function(){
    swoop.init();
});