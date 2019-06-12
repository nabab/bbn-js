/**
 * Created by BBN on 10/02/2017.
 */
;((bbn) => {
  "use strict";

  bbn.fn = {

    /**     DEFAULT CUSTOMIZABLE FUNCTIONS    */

    /* Predefined callback functions for bbn.fn.link function */
    defaultAjaxErrorFunction(jqXHR, textStatus, errorThrown){
      bbn.fn.log(textStatus, errorThrown);
    },

    defaultAjaxAbortFunction(message, url){
      bbn.fn.log(message);
    },

    defaultPreLinkFunction(url, ele){
      return true;
    },

    defaultLinkFunction(responseObj, ele){
      return true;
    },

    defaultPostLinkFunction(r){
      return true;
    },

    defaultStartLoadingFunction(url, data){
      return true;
    },

    defaultEndLoadingFunction(url, data, res){
      return true;
    },

    defaultHistoryFunction(obj){
      return true;
    },

    defaultResizeFunction(){
      return true;
    },

    defaultAlertFunction(text, title){
      alert(text);
      return true;
    },

    defaultConfirmFunction(text, yesFn, noFn){
      let ok = 0;
      if ( confirm(text) ){
        if ( bbn.fn.isFunction(yesFn) ){
          yesFn();
          ok = 1;
        }
      }
      if ( !ok && bbn.fn.isFunction(noFn) ){
        noFn();
      }
    }
  };

})(bbn);