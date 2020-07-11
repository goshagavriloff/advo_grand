/*https://www.youtube.com/watch?v=JbXLkhIfSTQ*/
/*https://github.com/OwlCarousel2/OwlCarousel2/tree/develop/docs/assets/owlcarousel*/
$(document).ready(function(){
  $('.owl-carousel#service').owlCarousel({
    margin:10,
    loop:false,
    autoWidth:true,
    responsive:{
      0:{
        items:1,
      },
      485:{
        items:2,
      },
      728:{
        items:3,
      },
      960:{
        items:4,
      },
      1200:{
        items:4,
      },
    }
});
  $('.owl-carousel#service').on('mousewheel','owl-stage',(e)=>{
    if (e.deltaY>0) {
      $('.owl-carousel').trigger('next.owl');
    } else {
      $('.owl-carousel').trigger('prev.owl');
    }
    e.preventDefault();
  });






  $('.owl-carousel#reports').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:3,
    autoplay : true,
    center: true,
    video:true,
    nav: true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true">←</i>','<i class="fa fa-angle-right" aria-hidden="true">→</i>'],

  });


  $('.owl-carousel#sponsors').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:3,
    autoplay : true,
    nav: true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true">←</i>','<i class="fa fa-angle-right" aria-hidden="true">→</i>'],

  });


});
