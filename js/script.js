// Hide arrow to top on page load
$('.arrow-to-top').hide();

// Scroll to top arrow appears on scroll up and reaching bottom


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

// Modal transitioning from right side of viewport
