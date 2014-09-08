$(function() {

    $('#scotch-panel').scotchPanel({

        hoverSelector: '.toggle-panel-on-hover',

        clickSelector: '.toggle-panel',
        containerSelector: 'body',
        direction: 'right',
        duration: 300,
        transition: 'ease',
        distanceX: '200px',
        enableEscapeKey: true
    });

});