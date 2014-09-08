$(function() {

    $('#scotch-panel').scotchPanel({

        clickSelector: '.toggle-panel, #unique-toggle',

        containerSelector: 'body',
        direction: 'right',
        duration: 300,
        transition: 'ease',
        distanceX: '70%',
        enableEscapeKey: true
    });

});