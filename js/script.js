$(function() {
  
    $('.works-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        navText: ['<img src="img/arrow-back.svg">', '<img src="img/arrow-next.svg">'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            750:{
                items:2,
                nav:true,
                loop:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            },
        }
    })
   
});