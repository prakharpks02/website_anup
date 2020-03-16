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


$(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 40,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});

  