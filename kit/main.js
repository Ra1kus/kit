$(document).ready(function() {
    $('.block-1').on('click', function() {
        $('.modal-message').text('Правильно!!!');
        $('.modal, .modal-overlay').fadeIn(300);
    });

    $('.block-2').on('click', function() {
        $('.modal-message').text('Щас забаню...');
        $('.modal, .modal-overlay').fadeIn(300);
    });

    $('.block-3').on('click', function() {
        $('.modal-message').text('Мимо, попробуй еще раз!');
        $('.modal, .modal-overlay').fadeIn(300);
    });

    $('.block-4').on('click', function() {
        $('.modal-message').text('Мимо, попробуй еще раз!');
        $('.modal, .modal-overlay').fadeIn(300);
    });

    $('.modal-overlay, .close-modal').on('click', function() {
        $('.modal, .modal-overlay').fadeOut(300);
        return false
    });
});