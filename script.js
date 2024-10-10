$(document).ready(function() {
    // Smooth scrolling saat klik link navigasi
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 500, 'linear');
    });

    // Menampilkan menu dropdown pada hover
    $('.dropdown').hover(function() {
        $(this).find('.dropdown-content').slideDown(200);
    }, function() {
        $(this).find('.dropdown-content').slideUp(200);
    });
});
