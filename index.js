$(function () {
    
AOS.init();
   

// Navbar color-change
$(document).ready(function(){
    $(window).scroll(function() {
      if ($(document).scrollTop() > 140) { 
        $(".navbar-IndexHtml").css("background-color", "#f8f8f8" , 'transition' , '1.5s' );
        $(".nav-link").css("color", "black" , 'transition' , '0.5s' );
        $("#logo-img").css("color", "black" , 'transition' , '0.5s' );

      } else {
        $(".navbar-IndexHtml").css("background-color", "transparent"); 
        $(".nav-link").css("color", "white" , 'transition' , '0.5s' )
      }
    });
  });


  // Home page IPAD IMAGE SCROLLING

  $('#down').click(function () {
    $('.inner-img img').animate({
        top: '-=200px'
    }, 'slow');
});

$('#up').click(function () {
    $('.inner-img img').animate({
        top: '+=200px'
    }, 'slow');
});

/* SLIDE ON CLICK */ 



})