$(function() {

    $('.photo-panel').scotchPanel({

        type: 'image',

        containerSelector: '.person', // Selects the nearest matching .person container
        direction: 'top',
        duration: 300,
        transition: 'ease',
        enableEscapeKey: true
    });

});