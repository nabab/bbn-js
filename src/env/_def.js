/**
 * Created by BBN on 10/02/2017.
 */
;(function(window, $){
  "use strict";

  var $window = $(window);
  bbn.env = {
    siteTitle: $("title:first").text(),
    /* This variable should be set to true in debugging mode only */
    logging: false,
    /* Address of the CDN (where this file should be hosted) */
    cdn: 'http://cdn.app-ui.com/',
    /* Default language */
    lang: 'en',
    body: $(document.body),
    win: $window,
    host: window.location.protocol + '//' + window.location.hostname,
    url: window.location.href,
    old_path: null,
    /* True when non asynchronous Ajax loads */
    loading: false,
    /* Window width */
    width: $window.width(),
    /* Window height */
    height: $window.height(),
    /* Element currently focused (jQuery object) */
    focused: false,
    /* Last time user has been active */
    last_focus: new Date(),
    /* Sleep mode (tab or window unfocused */
    sleep: false,
    /* bbn.env.loaders is an array of MD5 of data and url preventing the same call to be made at the same time */
    loaders: [],
    /* bbn.env.params is an array of each element of the path */
    resizeTimer: false,
    params: [],
    isInit: false,
    loggingLevel: 5,
    ignoreUnload: false
  };

})(window, jQuery);