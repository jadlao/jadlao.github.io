// Click and smooth scroll to id
$('a[href^="#"]').on('click', function(event){
    var target = $(this.getAttribute('href'));
    if(target.length){
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top 
        }, 1000);
    }
});

// Scroll to top arrow appears on scroll up and reaching bottom


// Velocity slide up animations
$('p, h3, h1').velocity('transition.slideUpBigIn', 2000);

// modal
