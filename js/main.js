$(document).ready(function () {
//menu

    var menuDropClick = false
    var menuDropCount = $('.important-menu__drop-item__d-flex').length
    var menuDropIndexLast = -20
    var HeightScreen = $('body').width();
    $('.important-menu__drop-item__d-flex').on('click', function (e) {
        var menuIndexClick = $('.important-menu__drop-item__d-flex').index(this)

        for (var i = 0; i < menuDropCount; i++) {
            $('.important-menu__drop-down').eq(i).css('display', 'none')
            $('.important-menu__drop-item__d-flex').eq(i).css('margin-bottom', '0')
            $('.important-menu__drop-item__d-flex img').eq(i).css('transform', 'rotate(0)')

        }
        $('.important-menu__drop-down').eq(menuIndexClick).css('display', 'block')
        $('.important-menu__drop-item__d-flex').eq(menuIndexClick).css('margin-bottom', '10px')
        $('.important-menu__drop-item__d-flex img').eq(menuIndexClick).css('transform', 'rotate(180deg)')

        if (menuDropIndexLast === menuIndexClick && !menuDropClick) {
            $('.important-menu__drop-down').eq(menuDropIndexLast).css('display', 'none')
            $('.important-menu__drop-item__d-flex').eq(menuDropIndexLast).css('margin-bottom', '0')
            $('.important-menu__drop-item__d-flex img').eq(menuDropIndexLast).css('transform', 'rotate(0)')

            menuDropIndexLast = menuDropIndexLast + 1
            menuDropClick = !menuDropClick
        }
        menuDropIndexLast = menuIndexClick
        if (menuDropClick) {
            menuDropClick = !menuDropClick
            menuDropIndexLast = -50
        }
    });
    $('.important-bg,.important-menu-header__exit').on('click', function () {

        $('.important-bg').css('opacity', '0')
        $('.important-bg').css('pointer-events', 'none')
        $('.important-bg').css('left', '0')


        $('.important-menu').css('opacity', '0')
        $('.important-menu').css('left', -$('.important-menu').width())
        $('.important-menu').css('pointer-events', 'none')
        setTimeout(function () {
            $('body').css('overflow', 'auto')
            $('body').css('width', '100%')
        }, 300)
    });
    $('.menu-open').on('click', function () {

        $('body').css('overflow', 'hidden')
        $('body').css('width', HeightScreen);

        $('.important-menu').css('overflow', 'auto')
        $('.important-bg').css('opacity', '1')
        $('.important-bg').css('pointer-events', 'auto')
        $('.important-bg').css('left', '0')
        if ($(window).width() > 500) {
            $('.important-bg').css('width', '100vw')
        } else {
            $('.important-bg').css('width', '100vw')
            $('.important-menu').css('width', '85vw')
        }

        $('.important-menu').css('opacity', '1')
        $('.important-menu').css('left', '0')
        $('.important-menu').css('pointer-events', 'auto')

    });
//\\menu
});

$(window).bind('scroll',function(e){
    parallaxScroll();
});
parallaxScroll();
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    if ($('body').width() < 700){
        $('.weather-now__first-bg').css('background-size',  '300%');
    }
    else{
        $('.weather-now__first-bg').css('background-size',  '200%');
    }
    let scrollWind= (scrolled*.25 - 120)+'px'
    $('.weather-now__first-bg').css('background-position',  'center ' + scrollWind );
     scrollWind= -(scrolled*.25)+'px'
    $('.weather-now__first-bg').css('transform',  'translateY(calc(50% ' + scrollWind +' ))');
}