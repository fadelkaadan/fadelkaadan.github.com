$(function() {
  var isClosed = true;
  var toggler = $('.navbar-toggler');
  for (var i = 0; i < 2; i++)
    toggler.fadeToggle(700);

  toggler.on('click touch', function() {
    toggler.fadeOut(50);
    if (isClosed) {
      isClosed = false;
      $('.nav').animate({
        left: "0"
      }, 400);
    } else {
      isClosed = true;
      $('.nav').animate({
        left: "-100%"
      }, 200);
    }
    toggler.fadeIn(1000);
  });

  //arrow down
  setInterval(() => $('.arrowDown').fadeToggle(1000), 1000);

  $('.arrowDown').on('click touch', function() {
    $('html,body').animate({
      scrollTop: $('.mainVsco').offset().top
    });
  });

  //slide projects

  var $slider = $('.skills');
  var $group = $('.slide__group');
  var $slides = $('.slide')
  var buttonArray = [];
  var currentIndex = 0;

  $.each($slides, function(index) {
    var $button = $('<button type="button" class="slide__btn">&bull;</button>');
    if (index === currentIndex) {
      $button.addClass('slide__btn--active');
    }
    $button.on('click touch', function() {
      move(index);
    }).appendTo('.slide__btns');
    buttonArray.push($button);
  })

  function move(newIndex) {
    if (newIndex === currentIndex) {
      return;
    }
    var animateLeft, slideLeft;

    buttonArray[currentIndex].removeClass('slide__btn--active');
    buttonArray[newIndex].addClass('slide__btn--active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css({ left: slideLeft, display: 'block' });
    $group.animate({ left: animateLeft }, 100, function() {
      $slides.eq(currentIndex).css({ display: 'none' });
      $slides.eq(newIndex).css({ left: 0 })
      $group.css({ left: 0 });
      currentIndex = newIndex;
    });
  }

  var $slideBtns = $('.slide__btn');

  $('.toLeft').on('click touch', function(){
    if (currentIndex == 0) {
      move($slideBtns.length - 1);
    } else {
      move(currentIndex - 1);
    }
  })

  $('.toRight').on('click touch', function() {
    if (currentIndex == $slideBtns.length - 1) {
      move(0);
    } else {
      move(currentIndex + 1);
    }
  })

  //jump
  $('.picAll').mouseenter(function() {
    $(this).animate({"top":"-5px"}, 150);
  });
  $('.picAll').mouseleave(function() {
    $(this).animate({"top":"5px"}, 50);
  })

  //shuffle
  var first = $('.picOne');
  var second = $('.picTwo');
  var third = $('.picThr');
  var more = $('.picMore');
  var arr = [first, second, third, more];

  $('.picAll').on('click touch', function() {
    if ($('.picAll').is(':animated')) {
      return;
    }
    for (var i = 0; i < arr.length; i++) {
      if ($(this).is(arr[i])) {
        arr[i].slideUp(50);
        for (var j = 0; j < arr.length - i; j++) {
          arr[j + i] = arr[j + i + 1]
        }
        arr[arr.length - 1] = $(this);

        arr[0].animate({"margin":"35px 0 0 20%", "z-index":"4"}, 100);
        arr[1].animate({"margin":"55px 0 0 25%", "z-index":"3"}, 100);
        arr[2].animate({"margin":"75px 0 0 30%", "z-index":"2"}, 100);
        arr[3].animate({"margin":"90px 0 0 35%", "z-index":"1"}, 100);

        arr[i].slideDown(200);
      }
    }
  });

  //flash the dash in the terminal card
  setInterval(() => $('#flash').fadeToggle(700), 500);

  //under construction
  $('.const').delay(3000).fadeOut();
});
