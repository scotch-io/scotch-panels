$(function() {

    fillWindow('#call-to-action');

    $('.make-me-a-panel').scotchPanel();

    $('.button-panel').scotchPanel({
        containerSelector: 'button',
        direction: 'left',
        distanceX: '100%'
    });

    $('#nested-demo').scotchPanel({
        containerSelector: '#main-nav',
        clickSelector: '.toggle-nested-demo',
        touchSelector: '.toggle-nested-demo'
    });

    $('#direction-content-html-panel').scotchPanel({
        containerSelector: '#direction-content .content',
        direction: 'left',
        clickSelector: '#direction-content .arrows .left, .toggle-direction-content-html',
        touchSelector: '#direction-content .arrows .left, .toggle-direction-content-html'
    });
    $('#direction-content-iframe-panel').scotchPanel({
        containerSelector: '#direction-content .content',
        direction: 'top',
        type: 'iframe',
        iframeURL: 'http://scotch.io',
        clickSelector: '#direction-content .arrows .top, .toggle-direction-content-iframe',
        touchSelector: '#direction-content .arrows .top, .toggle-direction-content-iframe'
    });
    $('#direction-content-image-panel').scotchPanel({
        containerSelector: '#direction-content .content',
        direction: 'bottom',
        type: 'image',
        imageURL: 'http://scotch.io/wp-content/themes/scotch-twentyfive/img/about-holly.jpg',
        clickSelector: '#direction-content .arrows .bottom, .toggle-direction-content-image',
        touchSelector: '#direction-content .arrows .bottom, .toggle-direction-content-image'
    });
    $('#direction-content-video-panel').scotchPanel({
        containerSelector: '#direction-content .content',
        direction: 'right',
        type: 'video',
        youtubeID: 'ePbKGoIGAXY',
        clickSelector: '#direction-content .arrows .right, .toggle-direction-content-video',
        touchSelector: '#direction-content .arrows .right, .toggle-direction-content-video'
    });

    $('.content-helper-panel').scotchPanel({
        containerSelector: '.wrap',
        direction: 'left',
        distanceX: '40%'
    });

    $('.direction-example').scotchPanel({
        containerSelector: '.wrap'
    });

    $('.transition-example').scotchPanel({
        containerSelector: '.wrap',
        direction: 'left'
    });

    $('.type-example').scotchPanel({
        direction: 'right'
    });

    $('.duration-example').scotchPanel({
        containerSelector: '.wrap',
        direction: 'left',
        distanceX: '100%'
    });

    $('#call-to-action a.more').click(function() {
        $('html,body').animate({
            scrollTop: $('#licenses').offset().top - 150
        }, 500);

        return false;
    });


    $('.download-only').click(function() {
        window.location.href = 'https://github.com/scotch-io/scotch-panels/archive/master.zip';
    });

    $('.github-only').click(function() {
        window.location.href = 'https://github.com/scotch-io/scotch-panels';
    });

});


$(window).resize(function() {
    fillWindow('#call-to-action');
});


function fillWindow(element) {
    $(element).css('height', $(window).height() + 'px');
}