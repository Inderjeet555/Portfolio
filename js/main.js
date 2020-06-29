$(document).ready(function(){
    let btn =    $('.project-area .button-group button');


    btn.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });
        return false;
    });    


    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled: true}
        // other options
      });


    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autopplay:true,
        dots:true,
        responsive:{
            0:{
            items:1
            },
            544:{
            items:2
            }
        }
    });

    let topnavHeight = $('.header-area').height() + 50;

    function navBarFixed(){
        if($('.header-area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= topnavHeight){
                    $('.header-area .main-menu').addClass('navbar-fixed');
                }else{
                    $('.header-area .main-menu').removeClass('navbar-fixed');
                }
            });
        }
    }

    navBarFixed();

});