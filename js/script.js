jQuery(document).ready(function(){


   jQuery('li.desplegable').hover(function(){
        jQuery(this).toggleClass('abrir');


    });

    jQuery('.ir-arriba').click(function(){
        jQuery('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    jQuery(window).scroll(function(){
        if( jQuery(this).scrollTop() > 200 ){
            jQuery('.ir-arriba').slideDown(900);
        } else {
            jQuery('.ir-arriba').slideUp(300);
        }
    });





});


