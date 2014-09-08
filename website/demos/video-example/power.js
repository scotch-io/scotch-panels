$(function() {

    $('#scotch-panel').scotchPanel({

        type: 'video',
        autoPlayVideo: true,
        youtubeID: 'ePbKGoIGAXY',
        youTubeTheme: 'light',

        containerSelector: 'body',
        direction: 'top',
        duration: 300,
        transition: 'ease',
        clickSelector: '.toggle-panel',
        enableEscapeKey: true
    });

});