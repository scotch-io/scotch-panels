$(function() {

    $('#scotch-panel').scotchPanel({

        easingPluginTransition: 'easeInCirc',
        useCSS: false,
        useEasingPlugin: false, // http://gsgd.co.uk/sandbox/jquery/easing/ only for browser support

        containerSelector: 'body',
        direction: 'right',
        duration: 300,
        transition: 'ease',
        clickSelector: '.toggle-panel',
        distanceX: '70%',
        enableEscapeKey: true
    });

});