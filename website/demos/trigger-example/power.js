$(function() {

    $('#scotch-panel').scotchPanel({
        startOpened: true, // Required
        startOpenedDelay: 2000, // ms
        enableEscapeKey: true, // Allow the user to quickly shut this down if unwelcomed
        clickSelector: '.toggle-panel'
    });

});