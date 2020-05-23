

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});




// $('.hover_me').mouseenter(function(){
//    $('.hover_options').show(); 
// });
// $('.hover_me').mouseleave(function(){
//    $('.hover_options').hide(); 
// });


$('.hover_me').hover(
   function(){$('.hover_options').css('display', 'block')}
 );

 $('.navigation').hover(
   function(){$('.hover_options').css('display', 'none')}
 );