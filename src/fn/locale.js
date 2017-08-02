/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  $.extend(bbn.fn, {

    /**     LOCALES     */

    money: function(m){
      if ( window.kendo !== undefined ){
        return kendo.toString(parseInt(m), "n0");
      }
      else{

      }
    },

    fdate: function(d, wrong_result){
      var r;
      if ( (typeof(d) === 'string') && (d.length > 5) && (d.substring(d.length-5, d.length-4) === '.') ){
        d = Math.floor(d);
      }
      if ( (typeof(d) === 'number') && (d > 0) ){
        if ( d < 10000000000 ){
          d = d*1000;
        }
        r = new Date(d);
      }
      if ( window.kendo !== undefined ){
        try {
          r = kendo.parseDate(d);
        }
        catch (err ){
          r = d;
        }
      }
      else{

      }
      if ( !r ){
        return wrong_result && !$.isNumeric(wrong_result) ? wrong_result : '';
      }
      if ( wrong_result === 1 ){
        return
      }
      if ( r.isSame && r.isSame(new Date()) ){
        r = kendo.toString(r, 'H:mm');
        if ( r === '0:00' ){
          r = bbn.lng.today;
        }
        return r;
      }
      else{
        return kendo.toString(r, 'd');
      }
    },

  })

})(jQuery, bbn);