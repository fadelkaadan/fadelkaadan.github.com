$(window).ready(function() {
    $('.navbar-close').click(function(){
      $('.nav').animate({
      left: "-420"
      });
    });
    $('.navbar-toggler').click(function(){
      $('.nav').animate({
      left: "0"
      });
    });

    //arrowDown
    $('.arrowDown').click(function(){
      $('html,body').animate({
     scrollTop: $('.mainVsco').offset().top
      });
    });

    //age
    var today = new Date();
    var year = today.getFullYear();
    var age = year - 1995;

    //shuffle
    $('.picThr').click(function(){
      $('.picThr').slideUp("fast");
      $('.picThr').animate({"margin":"90px 0 0 35%", "z-index":"1"});
      $('.picThr').slideDown("fast");
      $('.picTwo').animate({"margin":"35px 0 0 20%", "z-index":"4"});
      $('.picOne').animate({"margin":"55px 0 0 25%", "z-index":"3"});
      $('.picMore').animate({"margin":"75px 0 0 30%", "z-index":"2"});
  });
    $('.picTwo').click(function(){
      $('.picTwo').slideUp("fast");
      $('.picTwo').animate({"margin":"90px 0 0 35%", "z-index":"1"});
      $('.picTwo').slideDown("fast");
      $('.picOne').animate({"margin":"35px 0 0 20%", "z-index":"4"});
      $('.picThr').animate({"margin":"75px 0 0 30%", "z-index":"2"});
      $('.picMore').animate({"margin":"55px 0 0 25%", "z-index":"3"});
  });
    $('.picOne').click(function(){
      $('.picOne').slideUp("fast");
      $('.picOne').animate({"margin":"90px 0 0 35%", "z-index":"1"});
      $('.picOne').slideDown("fast");
      $('.picThr').animate({"margin":"55px 0 0 25%", "z-index":"3"});
      $('.picTwo').animate({"margin":"75px 0 0 30%", "z-index":"2"});
      $('.picMore').animate({"margin":"35px 0 0 20%", "z-index":"4"});
  });
  $('.picMore').click(function(){
    $('.picMore').slideUp("fast");
    $('.picMore').animate({"margin":"90px 0 0 35%", "z-index":"1"});
    $('.picMore').slideDown("fast");
    $('.picThr').animate({"margin":"35px 0 0 20%", "z-index":"4"});
    $('.picTwo').animate({"margin":"55px 0 0 25%", "z-index":"3"});
    $('.picOne').animate({"margin":"75px 0 0 30%", "z-index":"2"});
});

$(window).scroll(function(){
  if ( $('body').scrollTop() > ($('.baby').position().top ) ) {
   $('.baby').animate({"font-size":"1.3em"},1000);
  }
  if ( $('body').scrollTop() > ($('.school').position().top - 80) ) {
   $('.school').animate({"font-size":"1.3em"},1000);
  }
  if ( $('body').scrollTop() > ($('.uni').position().top - 80) ) {
   $('.uni').animate({"font-size":"1.3em"},1000);
  }
  if ( $('body').scrollTop() > ($('.germany').position().top - 80) ) {
   $('.germany').animate({"font-size":"1.3em"},1000);
  }
  if ( $('body').scrollTop() > ($('.german').position().top - 80) ) {
   $('.german').animate({"font-size":"1.3em"},1000);
  }
  if ( $('body').scrollTop() > ($('.programming').position().top - 250) ) {
   $('.programming').animate({"font-size":"1.3em"},1000);
  }
});

//scrollping classes


//if ( $('body').scrollTop() > $('.mainOne').position().top ) {
//    $('.const').toggleClass('testOne');
//}

  //welcome
  //$('.welcome').animate({"left":"20%"},"slow").fadeIn('slow').fadeOut('slow');

  //under construction
  $('.const').delay(1500).fadeOut();
});
