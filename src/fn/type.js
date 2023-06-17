/**
 * @file   Type check functions.
 * @author BBN Solutions <info@bbn.solutions>
 * @since  09/06/2020
 */

;((bbn) => {
  "use strict";

  /**
   * @var {Object} _private Misc variable for internal use
   */
  let _private = {};

  Object.assign(bbn.fn, {
    /**
     * Intended to check if the argument provided is an e-mail address written correctly
     *
     * @method   isEmail
     * @global
     *
     * @example
     * ```javascript
     * bbn.fn.isEmail('test@testorg');
     * //false
     * ```
     *
     * @example
     * ```javascript
     * bbn.fn.isEmail('test@test.org');
     * //true
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {Boolean}
     */
    isEmail(st){
      if (!bbn.fn.isString(st)) {
        return false;
      }
      let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(st);
    },

    /**
     * Intended to check if the argument provided is a color.
     *
     * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
     *
     * @method   isColor
     * @global
     *
     * @example
     * ```javascript
     * bbn.fn.isColor("#FF0000")
     * //true
     * ```
     *
     * @example
     * ```javascript
     * bbn.fn.isColor("rgb 255, 0, 0");
     * //true
     * ```
     *
     * @example
     * ```javascript
     * bbn.fn.isColor("red");
     * //true
     * ```
     * @memberof bbn.fn
     * @param    {String} st
     * @returns  {Boolean}
     */
    isColor(st){
      if (!bbn.fn.isString(st)) {
        return false;
      }
      var reg = new RegExp('^(#[a-f0-9]{6}|#[a-f0-9]{3}|rgb *\( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *\)|rgba *\( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *\)|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua)$', 'i');
      return reg.test(st);
    },

    /**
     * Returns true if the given object can be iterated as an array (numerically).
     *
     * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
     *
     * @method   isIterable
     * @global
     * @memberof bbn.fn
     *
     * @example
     * ```javascript
     * bbn.fn.isIterable([1, 2])
     * // true
     * bbn.fn.isIterable({a: 1, b: 2})
     * // false
     * bbn.fn.isIterable(25)
     * // false
     * bbn.fn.isIterable(document.body.querySelectorAll('.container > div'))
     * // true
     * ```
     *
     * @param    {String} st
     *
     * @returns  {Boolean}
     */
    isIterable(v) {
      return v && (typeof v === 'object') && (Symbol.iterator in Object(v));
    },

    /**
     * Returns true if the given value is a valid CSS dimension string or a number, false otherwise.
     *
     * @method   isDimension
     * @global
     * @memberof bbn.fn
     * @param    {String} st
     * @returns
     */
    isDimension(st) {
      if ((typeof(st) === 'number') && (st >= 0)) {
        return true;
      }
      return bbn.fn.isValidDimension(st);
    },

    /**
     * Returns true if the given value is a valid CSS dimension string, false otherwise.
     *
     * @method   isValidDimension
     * @global
     * @memberof bbn.fn
     * @param    {String} st
     * @returns
     */
    isValidDimension(st) {
      if ( (typeof(st) === 'string') &&
        (st.length > 0) && (
          (st.indexOf('calc') === 0 ) ||
          (!isNaN(bbn.fn.substr(st, 0,1))) ) ){
        let el = document.createElement('div');
        el.style.width = st;
        let res = !!el.style.width.length;
        el.remove();
        return res;
      }
      return false;
    },

    /**
     * Checks if the argument is empty or not.
     * @method   isEmpty
     * @global
     *
     * @example
     * ```javascript
     * bbn.fn.isEmpty({});
     * //true
     * ```
     * @example
     * ```javascript
     * bbn.fn.isEmpty({test : 1});
     * //false
     * ```
     * @example
     * ```javascript
     * bbn.fn.isEmpty([]);
     * //true
     * ```
     * @example
     * ```javascript
     * bbn.fn.isEmpty(['test']);
     * //false
     * ```
     * @example
     * ```javascript
     * bbn.fn.isEmpty('');
     * //true
     * ```
     * @example
     * ```javascript
     * bbn.fn.isEmpty('test');
     * //false
     * ```
     * @memberof bbn.fn
     * @param    {*} obj
     * @returns  {Boolean}
     */
    isEmpty(obj) {
      if ( !obj ){
        return true;
      }
      if (bbn.fn.isArray(obj)) {
        return obj.length ? false : true;
      }
      if ( typeof(obj) === 'object' ){
        if (bbn.fn.numProperties(obj)) {
          return false;
        }
        return true;
      }
      return false;
    },

    /**
     * Returns true if the given argument is a promise.
     * @global
     * @example
     * ```javascript
     * bbn.fn.isPromise(bbn.fn.post('myUrl'));
     * // true
     * bbn.fn.isPromise(setTimeout(() => {}))
     * // false
     * bbn.fn.isPromise(myVueObject.$nextTick());
     * // true
     * ```
     * @method   isFunction
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isPromise() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Promise]' ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is a function.
     * @global
     * @example
     * ```javascript
     * bbn.fn.isFunction(() => {
     *  alert('Hello world');
     * });
     * //true
     * ```
     * @method   isFunction
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isFunction() {
      if (!arguments.length) return false;

      for ( let obj of arguments ) {
        if (!(obj && obj.constructor && obj.call && obj.apply)) {
          return false;
        }
      }
      return true;
    },

    /**
     * @method   isBlob
     * @todo     Add method description for isFunction
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isBlob() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Blob]' ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is a number
     * @method   isNumber
     * @global
     * @example
     * ```javascript
     * bbn.fn.isNumber(5);
     * //true
     * ```
     * @example
     * ```javascript
     * bbn.fn.isNumber(0.5);
     * //true
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
     isNumber() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( ['boolean', 'object'].includes(typeof a) || (a === '') ||isNaN(a)){
          return false;
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is an integer
     * @method   isInt
     * @global
     * @example
     * ```javascript
     * bbn.fn.isInt(5);
     * // true
     * bbn.fn.isInt(0.5);
     * // false
     * bbn.fn.isInt("hello");
     * // false
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
     isInt() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if (!Number.isInteger(a)){
          return false;
        }
      }

      return true;
    },

    /**
     * Returns true if the given argument is a string;
     * @method   isString
     * @global
     * @example
     * ```javascript
     * bbn.fn.isString('bbn');
     * //true
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
     isString() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ({}.toString.apply(a) !== '[object String]'){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is a symbol;
     * @method   isSymbol
     * @global
     * @example
     * ```javascript
     * const sb = Symbol();
     * bbn.fn.isSymbol(sb);
     * //true
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
     isSymbol() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ({}.toString.apply(a) !== '[object Symbol]'){
          return false
        }
      }

      return true;
    },

    /**
     * Returns true if the given argument is a boolean
     * @method   isBoolean
     * @global
     * @example
     * ```javascript
     * const sb = true;
     * bbn.fn.isBoolean(sb); // true
     * const sb = 1;
     * bbn.fn.isBoolean(sb); // false
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
     isBoolean() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if (![true, false].includes(a)) {
          return false
        }
      }

      return true;
    },

    /**
     * Returns true if the given argument is array.
     * @method   isArray
     * @global
     * @example
     * ```javascript
     * bbn.fn.isArray([5,2,6]);
     * //true
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isArray() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if (!Array.isArray(a)){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is a date object.
     * @method   isDate
     * @global
     * @example
     * ```javascript
     * let date = new Date();
     * bbn.fn.isDate(date);
     * //true
     * ```
     * @example
     * ```javascript
     * bbn.fn.isDate('16/04/2020');
     * //false
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isDate() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Date]' ){
          return false
        }
      }
      return true;
    },

    /**
     * @ignore
     * @method   isSQLDate
     * @todo     Add method description for isSQLDate
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isSQLDate() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if (
          (typeof a !== 'string') ||
          !a.match(/^([1-2]\d{3})-((0[0-9])|(1[12]))-(([0-2][0-9])|(3[01]))(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/)
        ){
          return false;
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is an object.
     * @method   isObject
     * @global
     * @example
     * ```javascript
     * bbn.fn.isObject({name: 'cami', age: 7});
     * //true
     * ```
     * @example
     * ```javascript
     * bbn.fn.isObject([{name: 'cami', age: 7}]);
     * //false
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isObject() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Object]' ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is an event.
     * @method   isEvent
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
     isEvent() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if (!(a instanceof Event)){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is null;
     * @method   isNull
     * @global
     * @example
     * ```javascript
     * bbn.fn.isNull(myData);
     * //true
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isNull() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( {}.toString.apply(a) !== '[object Null]' ){
          return false
        }
      }
      return true;
    },


    /**
     * Returns true if the given arguments are primitive;
     * @method   isPrimitive
     * @global
     * @example
     * ```javascript
     * bbn.fn.isPrimitive('myString', 6, true);
     * //true
     * bbn.fn.isPrimitive([80,10,22]);
     * //false
     * bbn.fn.isPrimitive({});
     * //false
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isPrimitive() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if (a !== Object(a)){
          return false;
        }
      }

      return true;
    },


    /**
     * Returns true if the given argument is not null or type object or array.
     * @method   isValue
     * @deprecated
     * @see bbn.fn.isPrimitive
     * @example
     * ```javascript
     * bbn.fn.isValue('myString');
     * //true
     * ```
     * @example
     * ```javascript
     * bbn.fn.isValue(6);
     * //true
     * ```
     * @example
     * ```javascript
     * bbn.fn.isValue([80,10,22]);
     * //false
     * ```
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isValue() {
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( (typeof a === 'object') && !bbn.fn.isNull(a) ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is a dom element;
     * @method   isDom
     * @example
     * ```javascript
     * bbn.fn.isDom(document.body.childNodes[0]);
     * //true
     * ```
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isDom(){
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( !(a instanceof HTMLElement) ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argument is a dom comment;
     * @method   isComment
     * @example
     * ```javascript
     * bbn.fn.isComment(node.childNodes[0]);
     * //true
     * ```
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isComment(){
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( !(a instanceof Comment) ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argumen is a Canvas.
     *
     * @method   isCanvas
     * @global
     * @example
     * ```javascript
     * let myCanvas = document.createElement('canvas');
     * bbn.fn.isCanvas(myCanvas);
     * //true
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isCanvas(){
      if (!arguments.length) return false;
      for ( let a of arguments ){
        if ( !(a instanceof HTMLCanvasElement) ){
          return false
        }
      }
      return true;
    },

    /**
     * Returns true if the given argumen is a VueJS object.
     *
     * @method   isVue
     * @global
     * @example
     * ```javascript
     * let myObj =  new Vue({});
     * bbn.fn.isVue(myObj);
     * //true
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isVue(){
      if (!arguments.length) {
        return false;
      }

      if (Object.hasOwn(bbn, 'vue')) {
        if (bbn.vue.app) {
          for ( let a of arguments ){
            if (!a || (typeof a.render !== 'function')) {
              return false;
            }
          }
        }
        else {
          for ( let a of arguments ){
            if ( !(a instanceof Vue) ){
              return false;
            }
          }
        }
      }

      if (Object.hasOwn(bbn, 'wc')) {
        return bbn.wc.isComponent(...arguments);
      }

      return true;
    },

    /**
     * Returns true if the given argument is a percentage.
     * @method   isPercent
     * @global
     * @example
     * ```javascript
     * bbn.fn.isPercent('5%');
     * //true
     * ```
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isPercent(){
      if ( !arguments.length ) return false;
      for ( let a of arguments ){
        if ( (typeof a !== 'string') || !a.match(/^\d+(?:\.\d+)?%$/) ){
          return false;
        }
      }
      return true;
    },

    /**
     * @method   isURL
     * @ignore
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isURL(str){
      return bbn.var.regexp.url.test(str);
    },
    /**
     * @method   isIP
     * @ignore
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isIP(st){
      if (bbn.fn.isString(st)) {
        return bbn.var.regexp.ip.test(st);
      }
    },
    /**
     * @method   isHostname
     * @ignore
     * @global
     * @memberof bbn.fn
     * @returns  {Boolean}
     */
    isHostname(st) {
      if (bbn.fn.isString(st)) {
        if (bbn.fn.isIP(st)) {
          return true;
        }
        return bbn.var.regexp.hostname.test(st);
      }
    }
  });
})(bbn);
