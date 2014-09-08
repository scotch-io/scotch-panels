$(function() {

    $('.scotch-panel').scotchPanel({
        containerSelector: '.col-md-4',
        direction: 'top',
        duration: 1000,
        transition: 'ease',
        clickSelector: '.toggle-panel',
        forceMinHeight: true,
        enableEscapeKey: true
    });

});