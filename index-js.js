  $(document).ready(function() {

    $('#mob_gnb > #concealNav > ul > li:first-child ul').hide();
    $('#mob_gnb > #concealNav > ul > li:first-child').click(function(){
      $('#mob_gnb > #concealNav > ul > li:first-child > a').toggleClass("bg_gray")
      $('#mob_gnb > #concealNav > ul > li:first-child > a').toggleClass("rotate_down")
      $('#mob_gnb > #concealNav > ul > li:first-child ul').toggle();
    });

    $(window).scroll(function(){
      if($(this).scrollTop() >= 300) {
        $('#gnb').addClass('scroll-gnb');
        $('.scroll-gnb>#sign>a:nth-child(2)').removeClass('whiteLn_btn');
        $('.scroll-gnb>#sign>a:nth-child(3)').removeClass('white_btn');
        $('.scroll-gnb>#sign>a:nth-child(2)').addClass('purLn_btn');
        $('.scroll-gnb>#sign>a:nth-child(3)').addClass('purple_btn');
      }else{
        $('#sign>a:nth-child(2)').removeClass('purLn_btn');
        $('#sign>a:nth-child(3)').removeClass('purple_btn');
        $('#sign>a:nth-child(2)').addClass('whiteLn_btn');
        $('#sign>a:nth-child(3)').addClass('white_btn');
        $('#gnb').removeClass('scroll-gnb');
      }

      if($(this).scrollTop() >= 300) {
        $('#markNav').addClass('scroll-mob_gnb');
      }else{
        $('#markNav').removeClass('scroll-mob_gnb');
      }

      $('.dot1').click(function(){
        $('.slide-container').css('transform','translateX(0vw)')
        $('.dot1').addClass('active');
        $('.dot:not(.dot1)').removeClass('active');
      })
      $('.dot2').click(function(){
        $('.slide-container').css('transform','translateX(-100vw)')
        $('.dot2').addClass('active');
        $('.dot:not(.dot2)').removeClass('active');
      })
      $('.dot3').click(function(){
        $('.slide-container').css('transform','translateX(-200vw)')
        $('.dot3').addClass('active');
        $('.dot:not(.dot3)').removeClass('active');
      })
      $('.dot4').click(function(){
        $('.slide-container').css('transform','translateX(-300vw)')
        $('.dot4').addClass('active');
        $('.dot:not(.dot4)').removeClass('active');
      })
      if($(this).width() >=767 ){
        $('.slide-container').css('transform','translateX(0vw)');
        $('.dot1').addClass('active');
        $('.dot:not(.dot1)').removeClass('active');
      };

    });
  })