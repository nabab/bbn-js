/**
 * Created by BBN on 10/02/2017.
 */
;(($, bbn) => {
  "use strict";

  $.extend(bbn.fn, {

    /**     HISTORY    */

    /* The History object if history has been loaded */
    history: window.History === undefined ? false : window.History,

    replaceHistory(url, title, data){
      if ( bbn.fn.history ){
        if ( (typeof(url) === 'string') && (url.indexOf(bbn.env.root) === 0) ){
          url = url.substr(bbn.env.root.length);
        }
        let state = bbn.fn.history.getState();
        //bbn.fn.info("GET STATE");
        //bbn.fn.log(state);
        if ( !data ){
          data = {};
        }
        data.url = url || state.url.substr(bbn.env.root.length);
        bbn.fn.history.replaceState(state.data ? $.extend(state.data, data) : data, title || state.title, bbn.env.root + data.url);
      }
    },

    addHistoryScript(script){
      if ( bbn.fn.history !== undefined ){
        let state = bbn.fn.history.getState();
        if ( state.data.script ){
          state.data.script = () => {
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