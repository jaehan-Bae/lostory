$(function () {
  /* Header Scroll Change */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });

  // platform-slide
  $('.platform-btns span').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    $('.platform-slide').removeClass('active');
    $('#' + $(this).attr('data-alt')).addClass('active');
  });


  /* TypeIt - Welcome */
  $('#typing').typeIt({
    strings: ["Love story", "Lost story", "Lostory"],
    speed: 100,
    autoStart: true,
    breakLines: false,
    loop: true
  });

  // best-slick
  $('.best-slide').slick({
    centerMode: true,
    centerPadding: '1px',
    slidesToShow: 8,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: true
  });

  // event-tab
  $('.event-tab').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    $('.event-desc').removeClass('active');
    $('#' + $(this).attr('data-alt')).addClass('active');
  });

  // service Accordion
  $('.service-desc').eq(0).show()
  $('.service-title').click(function() {
    $(this).next().stop().slideDown();
    $(this).parent().siblings().children('.service-desc').stop().slideUp();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  });

});

// Window Open event 
function openWindow(event, width, height, url) {
  event.preventDefault();
  var leftPos = Math.floor((screen.width - width) / 2);
  var topPos = Math.floor((screen.height - height) / 2);
  var newWindow = window.open(url, '', 'width=' + width + ', height=' + height + ', top=' + topPos + ', left=' + leftPos);
  return false;
}


