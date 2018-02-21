$(function() {
  $('.navbar-close').on('click', function() {
    $('.nav').animate({
      left: "-420"
    });
    $('.overlay').css({'display':'fixed'});
  });
  $('.navbar-toggler').on('click', function() {
    $('.nav').animate({
      left: "0"
    });
    $('.overlay').css({'display':'none'});
  });

  //arrow down
  $('.arrowDown').on('click', function() {
    $('html,body').animate({
      scrollTop: $('.mainVsco').offset().top
    });
  });

  //slide projects
  var dotOne = $(".dot1");
  var dotTwo = $(".dot2");
  var dotThr = $(".dot3");
  var dotFour = $(".dot4");
  var dots = [dotOne, dotTwo, dotThr, dotFour];

  $('.toLeft').on('click', function(){
    for (var i = 0; i < dots.length; i++) {
      if ($(dots[i]).hasClass("active-dot")) {
        $(dots[i]).removeClass("active-dot");
        if (i == 0) {
            $(dots[dots.length - 1]).addClass("active-dot");
        } else {
          $(dots[i - 1]).addClass("active-dot");
        }
        break;
      }
    }
  });

  $('.toRight').on('click', function() {
    for (var i = 0; i < dots.length; i++) {
      if ($(dots[i]).hasClass("active-dot")) {
        $(dots[i]).removeClass("active-dot");
        if (i == dots.length - 1) {
            $(dots[0]).addClass("active-dot");
        } else {
          $(dots[i + 1]).addClass("active-dot");
        }
        break;
      }
    }
  })

  //jump
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch = true) {
    $('.picAll').mouseenter(function() {
      $(this).animate({"top":"-5px"}, 150);
    });
    $('.picAll').mouseleave(function() {
      $(this).animate({"top":"5px"}, 150);
    })
  }

  //shuffle
  var first = $('.picOne');
  var second = $('.picTwo');
  var third = $('.picThr');
  var more = $('.picMore');
  var arr = [first, second, third, more];

  $('.picAll').on('click', function() {
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
  for (var i = 0; i < 500; i++)
    $('#flash').fadeToggle(700);

  //under construction
  $('.const').delay(1000).fadeOut();
});
