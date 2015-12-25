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
    $('a[href*=#]').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        $('.navbar-toggle').click()
    });
};

$(function(){
    swoop.init();
});