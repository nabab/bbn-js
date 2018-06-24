/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  $.extend(bbn.fn, {

    /**     LOCALES     */

    money: function(val, novalue, currency, kilo, decimal, thousands, precision){
      if ( !decimal ){
        decimal = '.'
      }
      if ( !currency ){
        currency = ''
      }
      if ( !thousands ){
        thousands = ' '
      }
      if ( !precision ){
        precision = kilo ? 3 : 2;
      }
      if ( (isNaN(val) || !val) && novalue ){
        return novalue;
      }
      if ( isNaN(val) || !val ){
        return 0;
      }
      if ( kilo && val ){
        val = val / 1000;
        precision = 0;
        if ( currency ){
          currency = 'K' + currency;
        }
      }
      return parseFloat(val).toFixed(precision).replace(/./g, function(c, i, a) {
        if ( c === '.' ){
          return decimal;
        }
        return i && ((a.length - i) % 3 === 0) ? thousands + c : c;
      }) + ( currency ? ' ' + currency : '');
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
      let date = bbn.fn.date(v);
      if ( date ){
        return moment(date).format("YYYY-MM-DD" + (dayOnly ? '' : ' HH:mm:ss'));
      }
    },

    daysInMonth(v){
      let d = bbn.fn.date(v);
      if ( d ){
        return moment(d).daysInMonth();
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
        r = r.getHours() + ':' + r.getMinutes();
        if ( r === '0:00' ){
          r = bbn.lng.today;
        }
        return r;
      }
      if ( window.moment ){
        return moment(r).calendar();
      }
      return r.toLocaleDateString()
    },

  })

})(jQuery, bbn);