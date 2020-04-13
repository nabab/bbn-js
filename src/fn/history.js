/**
 * @file   History related functions.
 * @author BBN Solutions <info@bbn.solutions>
 * @since  12/04/2020
 */

;((bbn) => {
  "use strict";

  /**
   * @var {Object} _private Misc variable for internal use
   */
  let _private = {};

  Object.assign(bbn.fn, {
    /**
     * @method   history
     * @todo     Add method description for history
     * @global   
     * @memberof bbn.fn
     * @returns   
     */
    history(){
      return window.history || false;
    },

    /**
     * @method   replaceHistory
     * @todo     Add method description for replaceHistory
     * @global   
     * @memberof bbn.fn
     * @param    {String} url   
     * @param    {String} title 
     * @param    {Object} data  
     * @returns  {*}      
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
     * @method   addHistoryScript
     * @todo     Add method description for addHistoryScript
     * @global   
     * @memberof bbn.fn
     * @param    {Function} script 
     * @returns  {*}        
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
    },

  });
})(bbn);
