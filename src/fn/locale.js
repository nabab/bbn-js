/**
 * @file   Locale and formatting.
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
     * Returns the given value to money format basing on the given configuration.
     *
     * @method   money
     * @global
     *
     * @example
     * ``` javascript
     * // "5 856.0 $"
     * bbn.fn.money(5856, false, '$', false, '.' ,false, 1); 
     * ```
     *
     * @memberof bbn.fn
     * @param {String|Number} val The value.
     * @param {Boolean} kilo If the value has to be rendered in kilo.
     * @param {String} currency The currency.
     * @param {String} novalue The string to return if no valid value is given.
     * @param {String} decimal The character to use separate decimals.
     * @param {String} thousands The character to use to separate thounsands.
     * @param {Number} precision The number of decimals places.
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
     * Returns a date object from the given argument.
     *
     * @method   date
     * @global
     *
     * @example
     * ``` javascript
     * //Mon Feb 11 2019 12:00:00 GMT+0100 (Central European Standard Time)
     * bbn.fn.date('2019/02/11')
     * ```
     *
     * @memberof bbn.fn
     * @param    {String|Number} v
     * @returns  {date}
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
     * Returns a date with SQL format.
     *
     * @method   dateSQL
     * @global
     *
     * @example
     * ``` javascript
     * //"2020-04-16 16:15:23"
     * let date = new Date();
     * bbn.fn.dateSQL(date,false);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Date|String} v
     * @param    {Boolean}     dayOnly Whether or not include the time in the date
     * @returns  {String}
     */
    dateSQL(v, dayOnly){
      let date = bbn.fn.date(v);
      if ( date ){
        return moment(date).format("YYYY-MM-DD" + (dayOnly ? '' : ' HH:mm:ss'));
      }
    },

    /**
     * Returns the number of days of the month given in the date.
     * @method   daysInMonth
     * @global
     *
     * @example
     * ``` javascript
     * //30
     * bbn.fn.daysInMonth(new Date());
     * ```
     *
     * @memberof bbn.fn
     * @param    {String|Date} v
     * @returns  {Number}
     */
    daysInMonth(v){
      let d = bbn.fn.date(v);
      if ( d ){
        return moment(d).daysInMonth();
      }
      return false;
    },

    /**
     * @method   getDay
     * @ignore
     * @todo     Add method description for getDay
     * @global
     * @memberof bbn.fn
     * @param    {String|Date} v 
     * @returns                
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
     * @method   fdate
     * @todo     Add method description for fdate
     * @global   
     * @memberof bbn.fn
     * @param    {String|Date} d 
     * @param    {String}      wrong_result
     * @returns                
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
        //return moment(r).format('L');
        return moment(r).calendar({
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

    /**
     * @method   fdatetime
     * @todo     Add method description for fdatetime
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
    fdatetime(d, wrong_result){
      let r = bbn.fn.date(d);
      if ( !bbn.fn.isDate(r) ){
        return wrong_result && bbn.fn.isString(wrong_result) ? wrong_result : '';
      }
      if ( undefined !== moment ){
        //return moment(r).format('lll');
        return moment(r).calendar({
          sameDay: '[' + bbn._('Today') + '] HH:mm',
          nextDay: '[' + bbn._('Tomorrow') + '] HH:mm',
          nextWeek: 'ddd D HH:mm',
          lastDay: '[' + bbn._('Yesterday') + '] HH:mm',
          lastWeek: 'ddd D HH:mm',
          sameElse: 'DD/MM/YYYY HH:mm'
        });
        //return moment(r).format("DD/MM/YYYY HH:mm")
      }
      return r.toLocaleDateString();
    },

    /**
     * @method   ftime
     * @todo     Add method description for ftime
     * @global   
     * @memberof bbn.fn
     * @returns  {*} 
     */
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
    },

  });
})(bbn);
