$('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   nav:true,
   dots:false,
   autoplay:true,
   autoplayTimeout:3000,
   stagePadding:50,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:3
       },
       1000:{
           items:5
       }
   }
})


// script.js FOR BACK TO TOP BUTTON 
$(document).ready(function() {
   // Show or hide the button based on scroll position
   $(window).scroll(function() {
       if ($(this).scrollTop() > 100) {
           $('#back-to-top').fadeIn();
       } else {
           $('#back-to-top').fadeOut();
       }
   });

   // Scroll to the top when the button is clicked
   $('#back-to-top').click(function() {
       $('html, body').animate({ scrollTop: 0 }, 800);
       return false;
   });
});

