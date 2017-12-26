// Set Boolean
var arrowVisible = false;

$(window).scroll(function() {

  // Scroll bottom function
  $.fn.scrollBottom = function() {
    //console.log($(document).height() - this.scrollTop() - this.height());
    return $(document).height() - this.scrollTop() - this.height();
  };

  // Arrow to top appears on reaching bottom of page
  if ($(this).scrollBottom() == 0 && !arrowVisible) {
    //console.log('reached bottom');
    $('.btm-icons').velocity({
      bottom: '+0'
    });
    arrowVisible = true;
  } else if ($(this).scrollBottom() > 100 && arrowVisible) {
    //console.log(scrolled);
    $('.btm-icons').velocity({
      bottom: '-50px'
    });
    arrowVisible = false;
  }
});

// Smooth scroll function using Velocity JS
$.fn.scroll2 = function(speed) {
  var destination = $(this).attr('href');

  $(this).on('click', function(e) {
    e.preventDefault();
    $(destination).velocity('scroll', {
      duration: speed || 1000,
      easing: 'ease-in-out-sine'
    });
  })
}

// Enable smooth scroll
$('#scrollToWork').scroll2();
$('#scrollToAbout').scroll2();
$('#scrollToTop').scroll2();

// Portfolio item transitions
function pageAnimate(item) {
  $('.container-fluid').hide();
  $('#pt-main').show().appendTo('body');
  var current = $('#pt-main');
  switch (item) {
    case 1:
      current.find('.pt-page-1').addClass('pt-page-current slidein-from-right');
      break;
    case 2:
      current.find('.pt-page-2').addClass('pt-page-current slidein-from-right');
      break;
    case 3:
      current.find('.pt-page-3').addClass('pt-page-current slidein-from-right');
      break;
    case 4:
      current.find('.pt-page-4').addClass('pt-page-current slidein-from-right');
      break;
    case 5:
      current.find('.pt-page-5').addClass('pt-page-current slidein-from-right');
      break;
    case 6:
      current.find('.pt-page-6').addClass('pt-page-current slidein-from-right');
      break;
    case 7:
      current.find('.pt-page-7').addClass('pt-page-current slidein-from-right');
      break;
    case 8:
      current.find('.pt-page-8').addClass('pt-page-current slidein-from-right');
      break;
    case 10:
      current.find('.pt-page-10').addClass('pt-page-current slidein-from-right');
      current.css('background', '#eee');
      break;
  }
};

// On click, exit portfolio item
function pageClose(item) {
  var curr = $('#pt-main');
  switch (item) {
    case 1:
      curr.find('.pt-page-1').removeClass('pt-page-current slidein-from-right');
      break;
    case 2:
      curr.find('.pt-page-2').removeClass('pt-page-current slidein-from-right');
      break;
    case 3:
      curr.find('.pt-page-3').removeClass('pt-page-current slidein-from-right');
      break;
    case 4:
      curr.find('.pt-page-4').removeClass('pt-page-current slidein-from-right');
      break;
    case 5:
      curr.find('.pt-page-5').removeClass('pt-page-current slidein-from-right');
      break;
    case 6:
      curr.find('.pt-page-6').removeClass('pt-page-current slidein-from-right');
      break;
    case 7:
      curr.find('.pt-page-7').removeClass('pt-page-current slidein-from-right');
      break;
    case 8:
      curr.find('.pt-page-8').removeClass('pt-page-current slidein-from-right');
      break;
    case 10:
      curr.find('.pt-page-10').removeClass('pt-page-current slidein-from-right');
      break;
  }
  $('.container-fluid').fadeIn();
  $('#pt-main').hide();
}