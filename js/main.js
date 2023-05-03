
// функция показа хедера при скролле вниз добаление класса
$(document).scroll(()=>{
    if($(document).width() < 1024){
        return false;
    }

    if($(document).scrollTop() > $('.full-page').height() / 7){
            $('header').addClass("fixed");
    }else{
        $('header').removeClass("fixed");
    }
})



// функция перехода страницы на вверх
$(".up-btn").on('click',()=>{
    $("html, body").animate({
        scrollTop: 0
    },'slow');
})


// функция вывода доп меню

$("#show-menu").on('click',()=>{
    $('#hidden-menu').animate({
        "right": 0,
         opacity: 1
    },800),
    $('body').animate({
        opacity: 0.4
    },800)
})


// функция скрытия доп меню

$(".close").on('click',()=>{
    $('#hidden-menu').animate({
        "right": -300
    },500)
    $('body').animate({
        opacity: 1
    },800)
})

// функция слайдера карусель фото

$(document).ready(function(){

    $('#slider').slick({
        dots: false,
        prevArrow: '<div class="arrow-prev"><i class="fa-solid fa-arrow-left"></i></div>',
        nextArrow: '<div class="arrow-next"><i class="fa-solid fa-arrow-right"></i></div>',
        infinite: true,
        slidesToShow: 3,
        slidersToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
    })

});


