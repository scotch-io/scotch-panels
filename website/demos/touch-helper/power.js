$(function() {

    $('#scotch-panel').scotchPanel({

        touchSelector: '.toggle-on-touch-only, .toggle-on-both',
        clickSelector: '.toggle-on-click-only, .toggle-on-both',

        containerSelector: 'body',
        direction: 'right',
        duration: 300,
        transition: 'ease',
        distanceX: '70%',
        enableEscapeKey: true
    });

});