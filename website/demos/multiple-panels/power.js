$(function() {

    $('.one-of-many').scotchPanel({
        clickSelector: '.toggle-panels',
        containerSelector: '.panel-container', // Selects the nearest matching container
        direction: 'right',
        duration: 300,
        transition: 'ease-in-out',
        enableEscapeKey: true
    });

});