$(window).ready(function() {
  $('.navbar-close').click(function(){
    $('.nav').animate({
      left: "-420"
    });
    $('.overlay').css({'display':'fixed'});
  });
  $('.navbar-toggler').click(function(){
    $('.nav').animate({
      left: "0"
    });
    $('.overlay').css({'display':'none'});
  });

  //arrow down
  $('.arrowDown').click(function(){
    $('html,body').animate({
      scrollTop: $('.mainVsco').offset().top
    });
  });

  //slide projects
  var dots = [$(".dot1"), $(".dot2"), $(".dot3"), $(".dot4")];

  $('.toLeft').click(function(){
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

  $('.toRight').click(function() {
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
  var first = $('.picThr');
  var second = $('.picTwo');
  var third = $('.picOne');
  var more = $('.picMore');
  var arr = [first, second, third, more];

  $('.picAll').click(function(){
  for (var i = 0; i < arr.length; i++) {
    if ($(this).is(arr[i])) {
       arr[i].slideUp(300);
        var temp = arr[i];
        for (var j = 0; j < arr.length - i; j++) {
          arr[j + i] = arr[j + i + 1]
        }
        arr[arr.length - 1] = temp;

        arr[0].animate({"margin":"35px 0 0 20%", "z-index":"4"}, 100);
        arr[1].animate({"margin":"55px 0 0 25%", "z-index":"3"}, 100);
        arr[2].animate({"margin":"75px 0 0 30%", "z-index":"2"}, 100);
        arr[3].animate({"margin":"90px 0 0 35%", "z-index":"1"}, 100);

        arr[i].slideDown(50);
      }
  }
  });

  //flash the dash in the terminal storyCard
  var i = 0;
  while(i < 1000) {
    $('#flash').delay(500).fadeOut();
    $('#flash').delay(500).fadeIn();
    i++;
  }

  //under construction
  $('.const').delay(1000).fadeOut();
});
