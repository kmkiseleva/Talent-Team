$(function() {
    $('.reviews__slider').owlCarousel({
       loop:true,
       margin:10,
       nav:true,
       dots: false,
       navText: ['<img src="img/arrow_inactive.svg">','<img src="img/arrow_active.svg">'],
       responsive:{
           0:{
               items:1
           },
           600:{
               items:2
           },
           1000:{
               items:3
           }
       }
   });
 });

$(function() {
   $('.customers__slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText: ['<img src="img/arrow_normal-l.svg">','<img src="img/arrow_normal-r.svg">'],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
});