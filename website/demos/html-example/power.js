$(function() {

    $('#scotch-panel').scotchPanel({

        type: 'html', // This is default anyways

        containerSelector: 'body',
        direction: 'top',
        duration: 300,
        transition: 'ease',
        clickSelector: '.toggle-panel',
        enableEscapeKey: true
    });

});