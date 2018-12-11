/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  bbn.fn = {

    /**     DEFAULT CUSTOMIZABLE FUNCTIONS    */

    /* Predefined callback functions for bbn.fn.link function */
    defaultAjaxErrorFunction: function(jqXHR, textStatus, errorThrown){
      bbn.fn.log(textStatus);
    },

    defaultPreLinkFunction: function(url, ele){
      //bbn.fn.log(r);
      return true;
    },

    defaultLinkFunction: function(responseObj, ele){
      //bbn.fn.log(r);
      return true;
    },

    defaultPostLinkFunction: function(r){
      //bbn.fn.log(r);
      return true;
    },

    defaultStartLoadingFunction: function (url, id, data ){
      //bbn.fn.log(id, url, data);
      return true;
    },

    defaultEndLoadingFunction: function (url, id, data, res ){
      //bbn.fn.log(uniq, url, data);
      return true;
    },

    defaultHistoryFunction: function(obj){
      //bbn.fn.log(obj);
      return true;
    },

    defaultResizeFunction: function(){
      //bbn.fn.log(r);
      return true;
    },

    defaultAlertFunction: function(text, title){
      alert(text);
      return true;
    },
  };

})(jQuery, bbn);