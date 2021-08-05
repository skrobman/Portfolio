$(document).ready(function() {
    $('.header__burger').click(function(event) { 
      $('.header__burger,.header__list').toggleClass('active');
    });
});
  
/////////////////////////////////////////////
$('a').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo-65}, 800);
    }
});