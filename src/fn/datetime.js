/**
 * @file   Dates and time, uses daysjs for now.
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
        return dayjs(date).format("YYYY-MM-DD" + (dayOnly ? '' : ' HH:mm:ss'));
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
        return dayjs(d).daysInMonth();
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
      if ( undefined !== dayjs ){
        //return dayjs(r).format('L');
        return dayjs(r).calendar({
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

    formatDate(date, format)
    {
      return dayjs(date).format(format);
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
      if ( undefined !== dayjs ){
        //return dayjs(r).format('lll');
        return dayjs(r).calendar({
          sameDay: '[' + bbn._('Today') + '] HH:mm',
          nextDay: '[' + bbn._('Tomorrow') + '] HH:mm',
          nextWeek: 'ddd D HH:mm',
          lastDay: '[' + bbn._('Yesterday') + '] HH:mm',
          lastWeek: 'ddd D HH:mm',
          sameElse: 'DD/MM/YYYY HH:mm'
        });
        //return dayjs(r).format("DD/MM/YYYY HH:mm")
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
      if (undefined !== dayjs){
        return dayjs(r).calendar({
          sameElse: 'D/M/YY HH:mm'
        });
      }
      return r.toLocaleDateString();
    },

  });
})(bbn);
