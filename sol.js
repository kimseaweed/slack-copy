$(document).ready(function(){

    $('.qna-section > ul > li > p').hide();
    $('.qna-section > ul > li > button').click(function(){
        $(this).siblings('p').toggle();
        $(this).toggleClass('qna-rotate_down');
    });
})