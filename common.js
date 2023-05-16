  $(document).ready(function() {
    var m_gnb_open = $('#mob_gnb > #concealNav > ul > li').eq(0)
    $(m_gnb_open).children('ul').hide();
    $(m_gnb_open).click(function(){
      $(m_gnb_open).children('a').toggleClass("bg_gray").toggleClass("rotate_down")
      $(m_gnb_open).children('ul').toggle();
    });
    
    $(window).scroll(function(){
      if($(this).scrollTop() >= 500) {
        $('#gnb').addClass('scroll-gnb');
        $('#markNav').addClass('scroll-mob_gnb');
      }else{
        $('.scroll-gnb, .scroll-mob_gnb').stop().animate({top: '-100px'}, 300, function() {
          $('#gnb').css('top','').removeClass('scroll-gnb');
          $('#markNav').css('top','').removeClass('scroll-mob_gnb');
        });
      }
    })
    
    $('.dot').click(function(){
      var num = $(this).index();
      var trx = 'translateX(-'+(num*100)+'vw)'
      $('.slide-container').css('transform',trx)
      $('.dot').removeClass('active').eq(num).addClass('active');
    })

    $(window).on('resize', function(){
    if($(window).width() >= 767){
      $('.slide-container').css('transform','')
      $('.dot').removeClass('active').eq(0).addClass('active');
    };
  });

        $('.qna-section > ul > li > p').hide();
        $('.qna-section > ul > li > div').hide();
        $('.qna-section > ul > li > button').click(function(){
            $(this).siblings('p').toggle();
            $(this).siblings('div').toggle();
            $(this).toggleClass('qna-rotate_down');
        });

});