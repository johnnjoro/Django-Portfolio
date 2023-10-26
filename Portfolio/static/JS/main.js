$(document).ready(function () {

 $('.home').click(function(){ 
        $('html, body').animate({ 
             scrollTop: $(".site-main").offset().top 
        }, 2000); 
 }); 
 $('.about').click(function(){ 
        $('html, body').animate({ 
             scrollTop: $(".about-area").offset().top 
        }, 2000); 
 }); 

 $('.services').click(function(){ 
    $('html, body').animate({ 
         scrollTop: $(".services-area").offset().top 
    }, 2000); 
});

$('.contact').click(function(){ 
    $('html, body').animate({ 
         scrollTop: $(".contact-area").offset().top 
    }, 2000); 
}); 

//Sticky Navigation Menu

let nav_offset_top = $('.header_area').height() + 50;

function navbarFixed() {
    if ($('.header_area').length) {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $('.header_area .main-menu').addClass('navbar_fixed');
            } else {
                $('.header_area .main-menu').removeClass('navbar_fixed');
            }
        })
    }
}
navbarFixed();

});