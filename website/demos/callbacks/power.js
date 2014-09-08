$(function() {

    $('#scotch-panel').scotchPanel({

        beforePanelOpen: function() {
            alert('Before Panel Opened');
        },
        afterPanelOpen: function() {
            alert('After Panel Opened');
        },
        beforePanelClose: function() {
            alert('Before Panel Closed');
        },
        afterPanelClose: function() {
            alert('After Panel Opened');
        },

        containerSelector: 'body',
        direction: 'right',
        clickSelector: '.toggle-panel'
    });

});