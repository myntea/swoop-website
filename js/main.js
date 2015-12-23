var swoop = swoop || {};
swoop.init = function() {
    swoop.backToTop();
};

swoop.backToTop = function(){
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
};

$(function(){
    swoop.init();
});