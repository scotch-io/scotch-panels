$(function() {

    $('#scotch-panel').scotchPanel({
        startOpened: true, // Required
        startOpenedDelay: 1000, // ms
        closeAfter: 5000, // Make user watch for 5 seconds
        enableEscapeKey: true, // Allow the user to quickly shut this down if unwelcomed
        clickSelector: '.toggle-panel'
    });

});