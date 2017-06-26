// Set Boolean
var arrowVisible = false;

$(window).scroll(function(){
    
    // Scroll bottom function
    $.fn.scrollBottom = function(){
    //console.log($(document).height() - this.scrollTop() - this.height());
    return $(document).height() - this.scrollTop() - this.height();
};
    
    // Arrow to top appears on reaching bottom of page    
    if($(this).scrollBottom() == 0 && !arrowVisible){
        //console.log('reached bottom');
        $('.btm-icons').velocity({
            bottom: '+0'
        });
        arrowVisible = true;
    }else if($(this).scrollBottom() > 100 && arrowVisible){
        //console.log(scrolled);
        $('.btm-icons').velocity({
            bottom: '-50px'
        });
        arrowVisible = false;
    }
});

// Smooth scroll function using Velocity JS
$.fn.scroll2 = function(speed){
    var destination = $(this).attr('href');
    
    $(this).on('click', function(e){
        console.log('e');
        e.preventDefault();
        $(destination).velocity('scroll',{
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
function pageAnimate(){
    $('#pt-main').find('.pt-page-1').addClass('pt-page-current pt-page-moveFromRight');
};

$('#work1').on('click', function(){
    pageAnimate();
});