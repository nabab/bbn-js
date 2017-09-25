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

    date(v){
      let d = false,
          t = typeof(v);
      if ( t === 'number' ){
        if ( v < 10000000000 ){
          v = v * 1000;
        }
        return (new Date(v));
      }
      if ( t === 'string' ){
        if ( v.length === 10 ){
          return (new Date(
            parseInt(v.substr(0, 4)),
            parseInt(v.substr(5, 2)) - 1,
            parseInt(v.substr(8, 2)),
            12
          ));
        }
        else if ( v.length === 19 ){
          return (new Date(
            parseInt(v.substr(0, 4)),
            parseInt(v.substr(5, 2)) - 1,
            parseInt(v.substr(8, 2)),
            parseInt(v.substr(11, 2)),
            parseInt(v.substr(14, 2)),
            parseInt(v.substr(17, 2))
          ));
        }
      }
      else if ( bbn.fn.isDate(v) ){
        return v;
      }
      return d;
    },

    dateSQL(v, dayOnly){

    },

    daysInMonth(v){
      let d = bbn.fn.date(v);
      if ( d ){
        return new Date(d.getFullYear(), d.getMonth() + 1, 0)
        let n = new Date(d.getFullYear(), d.getMonth()+1, 0, 0)
      }
      return false;
    },

    getDay(v){
      const biss = 1972;
      let d = bbn.fn.date(v);
      if ( d ){
        let t    = d.getTime(),
            y    = d.getYear(),
            m    = d.getMonth(),
            days = (y - 1970) * 365;
        if ( m < 2 ){
          y--;
        }
        for ( i = biss; i <= y; i += 4 ){
          days++;
        }
        return days + Math.floor(t/(24*3600000));
      }
      return false;
    },

    fdate: function(d, wrong_result){
      let r = bbn.fn.date(d);
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