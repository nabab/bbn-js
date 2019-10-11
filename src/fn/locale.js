/**
 * Created by BBN on 10/02/2017.
 */
;((bbn) => {
  "use strict";

  Object.assign(bbn.fn, {

    
    /**
     * Formats the given value using the given params.
     * @method money
     * @param {String|Number} val
     * @param {Boolean} kilo
     * @param {String} currency  
     * @param {Boolean} noValue  
     * @return {String}
     * 
     */
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
        decimal = (decimal === undefined) && bbn.env.money && (bbn.env.money.decimal !== undefined) ? bbn.env.money.decimal : '.'
      }
      if ( !currency ){
        currency = (currency === undefined) && bbn.env.money && (bbn.env.money.currency !== undefined) ? bbn.env.money.currency : ''
      }
      if ( !thousands ){
        thousands = (thousands === undefined) && bbn.env.money && (bbn.env.money.thousands !== undefined) ? bbn.env.money.thousands : ' '
      }
      if ( !precision ){
        precision = (precision === undefined) && bbn.env.money && (bbn.env.money.precision !== undefined) ? bbn.env.money.precision : false
      }
      if ( !kilo ){
        kilo = (kilo === undefined) && bbn.env.money && (bbn.env.money.kilo !== undefined) ? bbn.env.money.kilo : false;
      }
      if ( !novalue ){
        novalue = (novalue === undefined) && bbn.env.money && (bbn.env.money.novalue !== undefined) ? bbn.env.money.novalue : false;
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
    /**
     * Formats the given value as a date.
     * @method date
     * @param {String|Number} v 
     * @fires bbn.fn.isDate
     * @return {Date}
     */
    date(v){
      let d = false,
          t = typeof(v);
      if ( v === undefined ) {
        return new Date();
      }
      if ( (t === 'number') || (bbn.fn.isNumber(v) && (v !== '')) ){
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
    /**
     * Returns the given date as a string using sql format.
     * @method dateSQL
     * @param {Date|String} v 
     * @param {Boolean} dayOnly 
     * @return {String}
     */
    dateSQL(v, dayOnly){
      let date = bbn.fn.date(v);
      if ( date ){
        return moment(date).format("YYYY-MM-DD" + (dayOnly ? '' : ' HH:mm:ss'));
      }
    },
    /**
     * Returns the number of days in the month of the given date.
     * @param {String|Date} v 
     * @return {Number}
     */
    daysInMonth(v){
      let d = bbn.fn.date(v);
      if ( d ){
        return moment(d).daysInMonth();
      }
      return false;
    },
    /**
     * @method getDay
     * @param {String|Date} v 
     * @return {Number|Boolean}
     */
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
        for (var i = biss; i <= y; i += 4 ){
          days++;
        }
        return days + Math.floor(t/(24*3600000));
      }
      return false;
    },
    /**
     * Returns a string with a language sensitive representation of the given date.
     * @method fdate
     * @param {String|Date} d 
     * @param wrong_result 
     * @return {String}
     */
    fdate(d, wrong_result){
      // Retro compatibility
      if ( wrong_result === true ){
        return bbn.fn.fdatetime(d);
      }
      let r = bbn.fn.date(d);
      if ( !bbn.fn.isDate(r) ){
        return wrong_result && bbn.fn.isString(wrong_result) ? wrong_result : '';
      }
      if ( undefined !== moment ){
        return moment(r).calendar(null, {
          sameDay: '[' + bbn._('Today') + ']',
          nextDay: '[' + bbn._('Tomorrow') + ']',
          nextWeek: 'ddd D',
          lastDay: '[' + bbn._('Yesterday') + ']',
          lastWeek: 'ddd D',
          sameElse: 'DD/MM/YYYY'
        });
      }
      return r.toLocaleDateString();
    },

    fdatetime(d, wrong_result){
      let r = bbn.fn.date(d);
      if ( !bbn.fn.isDate(r) ){
        return wrong_result && bbn.fn.isString(wrong_result) ? wrong_result : '';
      }
      if ( undefined !== moment ){
        return moment(r).calendar();
      }
      return r.toLocaleDateString();
    },

    ftime(d, wrong_result){
      let r = bbn.fn.date(d);
      if ( !bbn.fn.isDate(r) ){
        return wrong_result && bbn.fn.isString(wrong_result) ? wrong_result : '';
      }
      if ( undefined !== moment ){
        return moment(r).calendar({
          sameElse: 'D/M/YY HH:mm'
        });
      }
      return r.toLocaleDateString();
    }

  })

})(bbn);