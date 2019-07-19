/**
 * Created by BBN on 10/02/2017.
 */
;((bbn) => {
  "use strict";

  Object.assign(bbn.fn, {

    /**     HISTORY    */

    /**
     * Returns the window history object if history has been loaded .
     * @method history
     * @return {Object|Boolean}
     */
    history(){
      return window.history || false;
    },
    /**
     * Replaces the history state with a new one.
     * @method replaceHistory
     * @param {String} url 
     * @param {String} title 
     * @param {Object} data 
     */
    replaceHistory(url, title, data){
      let h = bbn.fn.history();
      if ( h ){
        if ( (typeof(url) === 'string') && (url.indexOf(bbn.env.root) === 0) ){
          url = url.substr(bbn.env.root.length);
        }
        let state = bbn.fn.clone(h.state || {});
        //bbn.fn.info("GET STATE");
        //bbn.fn.log(state);
        if ( !data ){
          data = {};
        }
        data.url = url || state.url.substr(bbn.env.root.length);
        if ( data ){
          if ( state.data ){
            bbn.fn.extend(state.data, data);
          }
          else{
            state.data = data;
          }
        }
       // bbn.fn.history.replaceState(state.data ? $.extend(state.data, data) : data, title || state.title, bbn.env.root + data.url);


        h.replaceState(state, title || state.title, bbn.env.root + data.url);
      }
    },
    /**
     * Adds a script to the history.state.data
     * @method addHistoryScript
     * @param {Function} script 
     */
    addHistoryScript(script){
      let h = bbn.fn.history();
      if (h) {
        let state = bbn.fn.clone(h.state);
        let o = {};
        if (state.data && state.data.script) {
          o.script = () => {
            state.data.script();
            if (typeof script === 'function') {
              script();
            }
          };
        }
        else if (typeof script === 'function') {
          state.data.script = script;
        }
        bbn.fn.replaceHistory(state.url, state.title, state.data);
      }
    }
  });
})(bbn);