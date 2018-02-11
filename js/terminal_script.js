$(window).ready(function() {

  //minimize button
  $('#min').click(function() {
    $('.box').animate({
      'width': '0',
      'height': '0'
    }, 500);
    $('.btns').css({'display':'none'});
  });

  //maximize button
  var isClicked = false;
  $('#max').click(function() {
    if (isClicked == false) {
      isClicked = true;
        $('.box').animate({
          'width': '100%',
          'height': '100%',
        }, 300)
    } else {
      isClicked = false;
        $('.box').animate({
          'width': '90%',
          'height': '85%',
        }, 300)
    }
  });

  //reopen terminal
  $('.file').click(function() {
    $('.box').animate({
      'width': '90%',
      'height': '85%',
    }, 500);
    $('.btns').css({'display':'inline-block'});
  });

  //close button
  $('#close').click(function() {
    window.close();
  })
})
