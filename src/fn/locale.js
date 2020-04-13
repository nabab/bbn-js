/**
 * @file   Locale functions.
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
     * @method   money
     * @todo     Add method description for money
     * @global   
     * @memberof bbn.fn
     * @param    {String|Number} val      
     * @param    {Boolean}       kilo     
     * @param    {String}        currency 
     * @param    {Boolean}       noValue  
     * @returns                  
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
     * @method   date
     * @todo     Add method description for date
     * @global   
     * @memberof bbn.fn
     * @fires    {*}             
     * @param    {String|Number} v 
     * @returns                  
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
     * @method   dateSQL
     * @todo     Add method description for dateSQL
     * @global   
     * @memberof bbn.fn
     * @param    {Date|String} v       
     * @param    {Boolean}     dayOnly 
     * @returns                
     */
    dateSQL(v, dayOnly){
      let date = bbn.fn.date(v);
      if ( date ){
        return moment(date).format("YYYY-MM-DD" + (dayOnly ? '' : ' HH:mm:ss'));
      }
    },

    /**
     * @method   daysInMonth
     * @todo     Add method description for daysInMonth
     * @global   
     * @memberof bbn.fn
     * @param    {String|Date} v 
     * @returns                
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
     * @param    wrong_result    
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
        return moment(r).format('L');
        /*
        return moment(r).calendar(null, {
          sameDay: '[' + bbn._('Today') + ']',
          nextDay: '[' + bbn._('Tomorrow') + ']',
          nextWeek: 'ddd D',
          lastDay: '[' + bbn._('Yesterday') + ']',
          lastWeek: 'ddd D',
          sameElse: 'DD/MM/YYYY'
        });
        */
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
        return moment(r).format('lll');
        /*
        return moment(r).calendar(null, {
          sameDay: '[' + bbn._('Today at') + '] HH:mm',
          nextDay: '[' + bbn._('Tomorrow at') + '] HH:mm',
          nextWeek: 'ddd D [' + bbn._('at') + '] HH:mm',
          lastDay: '[' + bbn._('Yesterday at') + '] HH:mm',
          lastWeek: 'ddd D [' + bbn._('at') + '] HH:mm',
          sameElse: 'DD/MM/YYYY HH:mm'
        });
        */
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
