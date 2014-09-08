$(function() {

    // Minified from https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
    var docCookies={getItem:function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,o,n,t,c,r){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(n)switch(n.constructor){case Number:s=1/0===n?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:s="; expires="+n;break;case Date:s="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+s+(c?"; domain="+c:"")+(t?"; path="+t:"")+(r?"; secure":""),!0},removeItem:function(e,o,n){return e&&this.hasItem(e)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(o?"; path="+o:""),!0):!1},hasItem:function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),o=0;o<e.length;o++)e[o]=decodeURIComponent(e[o]);return e}};

    // Check if Cookie Exists
    if (docCookies.getItem('has_seen_video') != 1) {

        // Init Scotch Panel
        $('#scotch-panel').scotchPanel({
            type: 'video',
            youtubeID: 'ePbKGoIGAXY',
            minHeight: '500px',
            startOpened: true,
            startOpenedDelay: 2000,
            enableEscapeKey: true,
            clickSelector: '.toggle-panel',
            beforePanelOpen: function() {
                // Set Cookie! (This only works if ran from a server. So if you have file:// in your URL, it's not going to work for you.)
                docCookies.setItem('has_seen_video', 1);
            }
        });

    }

});