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

    //jump
    var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if (supportsTouch = true) {
      $('.picAll').mouseenter(function() {
        $(this).animate({"top":"-5px"}, 150);
      });
      $('.picAll').mouseleave(function() {
        $(this).animate({"top":"5px"}, 150);
      });
    }

  //shuffle
  var first = $('.picThr');
  var second = $('.picTwo');
  var third = $('.picOne');
  var more = $('.picMore');
  var arr = [first, second, third, more];

  $('.picAll').click(function(){
      var temp;
      for (var i = 0; i < arr.length; i++) {
        if ($(this).is(arr[i])) {
           temp = arr[i].css('z-index');
           arr[i].slideUp("fast");
           arr[i].animate({"margin":"90px 0 0 35%", "z-index":"1"});
           arr[i].slideDown("fast");
          }
      }
      for (var i = 0; i < arr.length; i++) {
        if (!($(this).is(arr[i]))) {
          if (arr[i].css("z-index") < temp) {
            arr[i].animate({"margin":"-=20px 0 0 -=5%", "z-index":"+=1"});
          }
        }
      }
  });
  
  //under construction
  $('.const').delay(1500).fadeOut();
});
