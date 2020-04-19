/**
 * Created by BBN on 10/02/2017.
 */
(() => {
  "use strict";
  /*global window */
  /*global jQuery */
  /*global bbn */

  if ('jQuery' in window) {
    jQuery.fn.extend({
      bbn: function (fnName, params){
        var args = [];
        for ( var i = 0; i < arguments.length; i++ ){
          args.push(arguments[i]);
        }
        if ( bbn && bbn.fn && bbn.fn.isFunction(bbn.fn[fnName]) ){
          return this.each(function (){
            var args2 = args.slice();
            args2.splice(0, 1, jQuery(this));
            bbn.fn[fnName].apply(bbn, args2);
          });
        }
      }
    });
    if ( jQuery.fn.reverse === undefined ){
      jQuery.fn.reverse = [].reverse;//save a new function from Array.reverse
    }
  }
})();