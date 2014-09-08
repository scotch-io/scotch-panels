$(function() {

    $('#scotch-panel').scotchPanel({

        type: 'iframe',
        iframeURL: 'http://scotch.io',

        containerSelector: 'body',
        direction: 'right',
        duration: 300,
        transition: 'ease',
        clickSelector: '.toggle-panel',
        distanceX: '85%',
        enableEscapeKey: true
    });

});