$(function() {
    var scotchPanel = $('#scotch-panel').scotchPanel({
        containerSelector: 'body',
        direction: 'right',
        duration: 300,
        transition: 'ease',
        clickSelector: '.toggle-panel',
        distanceX: '70%',
        enableEscapeKey: true
    });

    $(window).resize(function() {
        if ($(window).width() >= 769 && $('.scotch-panel-canvas').hasClass('scotch-is-showing')) {
            scotchPanel.close();
        }
    });
});