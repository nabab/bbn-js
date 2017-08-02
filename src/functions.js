/**
 * Created by BBN on 10/02/2017.
 */
;(function($){
  "use strict";
  /*global window */
  /*global jQuery */
  /*global bbn */

  // allows for selection of elements with data attributes
  $.extend($.expr[":"], {
    data: ($.expr.createPseudo)
      ? $.expr.createPseudo(function (dataName){
        return function (elem){
          return !!$.data(elem, dataName);
        };
      })
      : function (elem, i, match){
        // support: jQuery < 1.8
        return !!$.data(elem, match[3]);
      }
  });


  $.fn.extend({
    bbn: function (fnName, params){
      var args = [];
      for ( var i = 0; i < arguments.length; i++ ){
        args.push(arguments[i]);
      }
      if ( bbn && bbn.fn && $.isFunction(bbn.fn[fnName]) ){
        return this.each(function (){
          var args2 = args.slice();
          args2.splice(0, 1, $(this));
          bbn.fn[fnName].apply(bbn, args2);
        });
      }
    }
  });

  if ( $.fn.reverse === undefined ){
    $.fn.reverse = [].reverse;//save a new function from Array.reverse
  }

})(jQuery);