/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  $.extend(bbn.fn, {

    /**     HISTORY    */

    /* The History object if history has been loaded */
    history: window.History === undefined ? false : window.History,

    replaceHistory: function(url, title, data){
      if ( bbn.fn.history !== undefined ){
        if ( (typeof(url) === 'string') && (url.indexOf(bbn.env.root) === 0) ){
          url = url.substr(bbn.env.root.length);
        }
        var state = bbn.fn.history.getState();
        if ( !data ){
          data = {};
        }
        data.url = url || state.url.substr(bbn.env.root.length);
        bbn.fn.history.replaceState(state.data ? $.extend(state.data, data) : data, title || state.title, bbn.env.root + data.url);
      }
    },

    addHistoryScript: function(script){
      if ( bbn.fn.history !== undefined ){
        var state = bbn.fn.history.getState();
        if ( state.data.script ){
          state.data.script = function(){
            state.data.script();
            script();
          };
        }
        else{
          state.data.script = script;
        }
        bbn.fn.replaceHistory(state.url, state.title, state.data);
      }
    }

  })

})(jQuery, bbn);