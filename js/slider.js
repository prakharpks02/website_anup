const pages = document.querySelectorAll('.page')
const pageCount = pages.length+1
pages.forEach( (page, i, pages) => {
  page.style.zIndex = pageCount - i
  page.onclick = event => {
    console.log(page.classList)
    if(page.classList.contains('active')) {
      page.classList.replace('active', 'flipped')
      page.style.zIndex = i + 1
      if((i+1) < pageCount) {
        pages[i+1].classList.add('active')
        pages[i+1].classList.remove('flipped')
        pages[i+1].style.zIndex = pageCount - (i+1)
      }
      for(let j = i+2; j < pageCount; j++) {
        pages[j].classList.remove('active')
        pages[j].classList.remove('flipped')
        pages[j].style.zIndex = pageCount - j
      }
      for(let j = 0; j < i+1 ; j++) {
        pages[j].classList.remove('active')
        pages[j].classList.add('flipped')
        pages[j].style.zIndex = j + 1
      }
    } else if(page.classList.contains('flipped')) {
      page.classList.replace('flipped', 'active')
      page.style.zIndex = pageCount - i
      for(let j = i+1; j < pageCount; j++) {
        pages[j].classList.remove('active')
        pages[j].classList.remove('flipped')
        pages[j].style.zIndex = pageCount - j
      }
      for(let j = 0; j < i ; j++) {
        pages[j].classList.remove('active')
        pages[j].classList.add('flipped')
        pages[j].style.zIndex = j + 1
      }
    }
  }
})




// MOBILE VIEW



t = 53;
p = 0;
pm = $('.cards_inner__card').length;

$('.cards_inner__card').mousedown(function(){
  var ct = $(this).css('transform');
  var cts = ct.split(',')
  ctse = (cts[cts.length - 2] + 'px')
})

function on(){
  $('.cards_inner__card').draggable({
    start: function( event, ui ) {
      startPosition = ui.position.left;
    },
    drag:function(e, ui){
      if(ui.position.left > startPosition){
        ui.position.left = startPosition;
      }
      if(ui.position.left < -250){
        ui.position.left = -250;
      }
      x = ui.position.left;
      $(this).css('transform',' rotate(' + x/36 + 'deg)')
    },
    revert:function(valid) {
      if(x > 60 || x < - 60) {
        el = $(this)
        setTimeout(function(){
          el_class = el.attr('class').split(' ');
          el_class_end = el_class[1]
          el.addClass('invalid')
          if(p < 3){
            $('.points').find('.active').removeClass('active').next().addClass('active') 
            p++
          } else {
            $('.points').find('.active').removeClass('active')
            $('.points').find('.first').addClass('active') 
            p=0
          }
        },10)
        setTimeout(function(){
          $('.cards_inner__card').each(function(){
            $(this).addClass('animate');
            var ct = $(this).css('transform');
            var cts = ct.split(',')
            ctse = (parseInt(cts[cts.length - 2]) + 60 + 'px')
            $(this).css('transform','translateZ(' + ctse + ')');
          });
          $('.cards_inner .wrap').prepend('<div class="cards_inner__card ' + el_class_end + ' card_in"><div class="logo"></div></div>')
          el.remove();
          $('.cards_inner__card').removeClass('animate');
          on();
        },160);
        setTimeout(function(){
          $('.card_in').removeClass('card_in')
        },500);
      } else {
        $(this).css('transform','rotate(0deg)')
        return !valid;
      }
    },
    axis:'x',
    containment:'.cards_inner'
  });
  $('.cards_inner__card:nth-of-type(1)').draggable( 'disable' )
  $('.cards_inner__card:nth-of-type(2)').draggable( 'disable' )
  $('.cards_inner__card:nth-of-type(3)').draggable( 'disable' )
  $('.cards_inner__card:nth-of-type(4)').draggable( 'enable' )
}
on();
