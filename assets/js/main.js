$(document).ready(function () {

    $('.carousel').carousel({
      interval: 4000
    })

    $('.nav a').on('click', function() {
        $('.nav a').removeClass('active');
        $(this).addClass('active');
        console.log('heard')
    });

 
});
