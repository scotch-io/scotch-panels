$(function() {


    /*==================================
    =            LEFT SLIDE            =
    ==================================*/
    var leftPanel = $('.left-panel').scotchPanel({
        type: 'image',
        containerSelector: '#slider',
        duration: 500,
        transition: 'ease',
        distanceX: '100%',
        direction: 'left'
    });
    $('.open-left-panel').click(function() {
        leftPanel.open();
        return false;
    });
    $('.close-left-panel').click(function() {
        leftPanel.close();
        return false;
    });


    /*===================================
    =            RIGHT SLIDE            =
    ===================================*/
    var rightPanel = $('.right-panel').scotchPanel({
        type: 'image',
        containerSelector: '#slider',
        duration: 500,
        transition: 'ease',
        distanceX: '100%',
        direction: 'right'
    });
    $('.open-right-panel').click(function() {
        rightPanel.open();
        return false;
    });
    $('.close-right-panel').click(function() {
        rightPanel.close();
        return false;
    });

});