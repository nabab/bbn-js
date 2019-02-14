/**
 * Created by BBN on 10/02/2017.
 */
;(($, bbn) => {
  "use strict";

  $.extend(bbn.fn, {

    /**     LOCALES     */

    money(val, kilo, currency, novalue, decimal, thousands, precision){
      /*
    money(val, kilo){
      let decimal = ',',
          currency = '€',
          thousands = ' ';
      if ( (isNaN(val) || !val) ){
        return '-';
      }
      if ( isNaN(val) || !val ){
        return 0;
      }
      if ( kilo && val ){
        val = val / 1000;
        if ( currency ){
          currency = 'K' + currency;
        }
      }
      return parseFloat(val).toFixed(0).replace(/./g, function(c, i, a) {
        if ( c === '.' ){
          return decimal;
        }
        return i && ((a.length - i) % 3 === 0) ? thousands + c : c;
      }) + ( currency ? ' ' + currency : '');
    },

       */
      if ( !decimal ){
        decimal = bbn.env.money && bbn.env.money.decimal && (decimal === undefined) ? bbn.env.money.decimal : '.'
      }
      if ( !currency ){
        currency = bbn.env.money && bbn.env.money.currency && (currency === undefined) ? bbn.env.money.currency : ''
      }
      if ( !thousands ){
        thousands = bbn.env.money && bbn.env.money.thousands && (thousands === undefined) ? bbn.env.money.thousands : ' '
      }
      if ( !precision ){
        precision = bbn.env.money && bbn.env.money.precision && (precision === undefined) ? bbn.env.money.precision : false
      }
      if ( !kilo ){
        kilo = bbn.env.money && bbn.env.money.kilo && (kilo === undefined) ? bbn.env.money.kilo : false;
      }
      if ( !novalue ){
        novalue = bbn.env.money && bbn.env.money.novalue && (novalue === undefined) ? bbn.env.money.novalue : false;
      }
      if ( !bbn.fn.isNumber(precision) ){
        precision = kilo ? 3 : 0;
      }
      if ( (isNaN(val) || !val) && novalue ){
        return novalue;
      }
      if ( isNaN(val) || !val ){
        return 0;
      }
      if ( kilo && val ){
        val = val / 1000;
        if ( currency ){
          currency = 'K' + currency;
        }
      }
      let v = parseFloat(val).toFixed(precision);
      let decimalPosition = 0;
      let decimalIdx = 10000;
      if ( v ){
        decimalIdx = v.indexOf('.');
        if ( decimalIdx <= 0 ){
          decimalIdx = 10000;
        }
        else{
          decimalPosition = v.length - decimalIdx;
        }
      }
      return v.replace(/./g, function(c, i, a) {
        if ( c === '.' ){
          return decimal;
        }
        return i && ((a.length - i - decimalPosition) % 3 === 0) && (i < decimalIdx) ? thousands + c : c;
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

    fdate(d, wrong_result){
      let r = bbn.fn.date(d);
      if ( !bbn.fn.isDate(r) ){
        return wrong_result && !bbn.fn.isNumber(wrong_result) ? wrong_result : '';
      }
      if ( r.isSame && r.isSame(new Date()) ){
        r = r.getHours() + ':' + r.getMinutes();
        if ( r === '0:00' ){
          r = bbn.lng.today;
        }
        return r;
      }
      if ( window.moment ){
        return moment(r).format("DD/MM/YYYY");
      }
      return r.toLocaleDateString()
    },

  })

})(jQuery, bbn);