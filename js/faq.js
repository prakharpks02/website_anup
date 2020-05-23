

$('.pluses-list .item-name').click(function () {
    $(this).next().slideToggle(200).parent().toggleClass('active');
    $('.pluses-list .item-name').not(this).next().slideUp(200).parent().removeClass('active');
      });