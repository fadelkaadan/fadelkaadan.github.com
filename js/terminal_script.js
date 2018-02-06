$(window).ready(function() {
  $('#min').click(function() {
    for (var i = 0; i < 70; i++) {
      $('.box').animate({
        'width': '-=2%',
        'height': '-=2%',
        'top': '+=1%',
        'left': '+=1%'
      }, 5);
    }
    $('.btns').css({'display':'none'});
  });

  var isClicked = false;
  $('#max').click(function() {
    if (isClicked == false) {
      isClicked = true;
      for (var i = 0; i < 5; i++) {
        $('.box').animate({
          'width': '+=2%',
          'height': '+=2%',
          'margin': '-=1% -=1% 0 -=1%'
        }, 10)
      }
    } else {
      isClicked = false;
      for (var i = 0; i < 5; i++) {
        $('.box').animate({
          'width': '-=2%',
          'height': '-=2%',
          'margin': '+=1% +=1% 0 +=1%'
        }, 10)
      }
    }


  })
})
