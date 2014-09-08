$(function() {

    var scotchPanel = $('#scotch-panel').scotchPanel({
        containerSelector: 'body',
        direction: 'right',
        duration: 300,
        transition: 'ease',
        distanceX: '70%',
        enableEscapeKey: true
    });

    $('.toggle-panel').click(function() {
        scotchPanel.toggle();
        return false;
    });

});