$(document).ready(function() {
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 500, 'linear');
    });

    $('.dropdown').hover(function() {
        $(this).find('.dropdown-content').slideDown(200);
    }, function() {
        $(this).find('.dropdown-content').slideUp(200);
    });
});
