module.exports = {
  /**
   * Intended to check if the argument provided is an e-mail address written correctly
   *
   * @method   isEmail
   * @global
   *
   * @example
   * ```javascript
   * //false
   * bbn.fn.isEmail('test@testorg');
   * ```
   *
   * @example
   * ```javascript
   * //true
   * bbn.fn.isEmail('test@test.org');
   * ```
   * @memberof bbn.fn
   * @param    {String} st
   * @returns  {Boolean}
   */
  isEmail(st) {
    if (!this.isString(st)) {
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
   * //true
   * bbn.fn.isColor("#FF0000")
   * ```
   *
   * @example
   * ```javascript
   * //true
   * bbn.fn.isColor("rgb 255, 0, 0");
   * ```
   *
   * @example
   * ```javascript
   * //true
   * bbn.fn.isColor("red");
   * ```
   * @memberof bbn.fn
   * @param    {String} st
   * @returns  {Boolean}
   */
  isColor(st) {
    if (!this.isString(st)) {
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
   * // true
   * bbn.fn.isIterable([1, 2])
   * // false
   * bbn.fn.isIterable({a: 1, b: 2})
   * // false
   * bbn.fn.isIterable(25)
   * // true
   * bbn.fn.isIterable(document.body.querySelectorAll('.container > div'))
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
    if ((typeof (st) === 'number') && (st >= 0)) {
      return true;
    }
    return this.isValidDimension(st);
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
    if ((typeof (st) === 'string') &&
      (st.length > 0) && (
        (st.indexOf('calc') === 0) ||
        (!isNaN(st.substr(0, 1))))) {
      let el = document.createElement('div');
      el.style.width = st;
      let res = !!el.style.width.length;
      el.remove();
      return res;
    }
    return false;
  },


  /**
   * Returns true if the given value is a valid name for a function without checking in reserved words, false otherwise
   * @method   isValidName
   * @global
   * @example
   * ```javascript
   * bbn.fn.isValidName('$myFunc_tion')
   * // true
   * ```
   * @example
   * ```javascript
   * bbn.fn.isValidName('7Y')
   * // false
   * ```
   * 
   * @example
   * ```javascript
   * bbn.fn.isValidName('function')
   * // true
   * ```
   * 
   * @memberof bbn.fn
   * @param    {String} st
   * @returns {Boolean}
   */
  isValidName(st) {
    if (!st) {
      return false;
    }

    for (let arg of arguments) {
      if (!bbn.fn.isString(arg) || !/^[$A-Z_][0-9A-Z_$]*$/i.test(arg)) {
        return false;
      }
    }

    return true;
  },


  /**
   * Checks if the argument is empty or not.
   * @method   isEmpty
   * @global
   *
   * @example
   * ```javascript
   * //true
   * bbn.fn.isEmpty({});
   * ```
   * @example
   * ```javascript
   * //false
   * bbn.fn.isEmpty({test : 1});
   * ```
   * @example
   * ```javascript
   * //true
   * bbn.fn.isEmpty([]);
   * ```
   * @example
   * ```javascript
   * //false
   * bbn.fn.isEmpty(['test']);
   * ```
   * @example
   * ```javascript
   * //true
   * bbn.fn.isEmpty('');
   * ```
   * @example
   * ```javascript
   * //true
   * bbn.fn.isEmpty('test');
   * ```
   * @memberof bbn.fn
   * @param    {Object|Array|String}
   * @returns  {Boolean}
   */
  isEmpty(obj) {
    if (!obj) {
      return true;
    }
    if (this.isArray(obj)) {
      return obj.length ? false : true;
    }
    if (typeof (obj) === 'object') {
      for (var prop in obj) {
        return false;
      }
      return true;
    }
    return false;
  },

  /**
   * Returns true if the given argument is a function.
   * @global
   * @example
   * ```javascript
   * //true
   * bbn.fn.isFunction(() => {
   *  alert('Hello world');
   * });
   * ```
   * @method   isFunction
   * @memberof bbn.fn
   * @returns  {Boolean}
   */
  isFunction() {
    if (!arguments.length) return false;
    for (let a of arguments) {
      if ({}.toString.apply(a) !== '[object Function]') {
        return false
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
    for (let a of arguments) {
      if ({}.toString.apply(a) !== '[object Blob]') {
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
   * //true
   * bbn.fn.isNumber(5);
   * ```
   * @example
   * ```javascript
   * //true
   * bbn.fn.isNumber(0.5);
   * ```
   * @memberof bbn.fn
   * @returns  {Boolean}
   */
  isNumber() {
    if (!arguments.length) return false;
    for (let a of arguments) {
      if (['boolean', 'object'].includes(typeof a) || isNaN(a)) {
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
   * //true
   * bbn.fn.isString('bbn');
   * ```
   * @memberof bbn.fn
   * @returns  {Boolean}
   */
  isString() {
    if (!arguments.length) return false;
    for (let a of arguments) {
      if (typeof a !== 'string') {
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
   * //true
   * bbn.fn.isArray([5,2,6]);
   * ```
   * @memberof bbn.fn
   * @returns  {Boolean}
   */
  isArray() {
    if (!arguments.length) return false;
    for (let a of arguments) {
      if ({}.toString.apply(a) !== '[object Array]') {
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
   * //true
   * let date = new Date();
   * bbn.fn.isDate(date);
   * ```
   * @example
   * ```javascript
   * //false
   * bbn.fn.isDate('16/04/2020');
   * ```
   * @memberof bbn.fn
   * @returns  {Boolean}
   */
  isDate() {
    if (!arguments.length) return false;
    for (let a of arguments) {
      if ({}.toString.apply(a) !== '[object Date]') {
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
    for (let a of arguments) {
      if (
        (typeof a !== 'string') ||
        !a.match(/^([1-2]\d{3})-((0[0-9])|(1[12]))-(([0-2][0-9])|(3[01]))(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/)
      ) {
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
   * //true
   * bbn.fn.isObject({name: 'cami', age: 7});
   * ```
   * @example
   * ```javascript
   * //false
   * bbn.fn.isObject([{name: 'cami', age: 7}]);
   * ```
   * @memberof bbn.fn
   * @returns  {Boolean}
   */
  isObject() {
    if (!arguments.length) return false;
    for (let a of arguments) {
      if ({}.toString.apply(a) !== '[object Object]') {
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
   * //true
   * bbn.fn.isNull(myData);
   * ```
   * @memberof bbn.fn
   * @returns  {Boolean}
   */
  isNull() {
    if (!arguments.length) return false;
    for (let a of arguments) {
      if ({}.toString.apply(a) !== '[object Null]') {
        return false
      }
    }
    return true;
  },

  /**
   * Returns true if the given argument is not null or type object or array.
   * @method   isValue
   * @example
   * ```javascript
   * //true
   * bbn.fn.isValue('myString');
   * ```
   * @example
   * ```javascript
   * //true
   * bbn.fn.isValue(6);
   * ```
   * @example
   * ```javascript
   * //false
   * bbn.fn.isValue([80,10,22]);
   * ```
   * @global
   * @memberof bbn.fn
   * @returns  {Boolean}
   */
  isValue() {
    if (!arguments.length) return false;
    for (let a of arguments) {
      if ((typeof a === 'object') && !this.isNull(a)) {
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
   * //true
   * bbn.fn.isDom('<div>myDiv</div>');
   * ```
   * @global
   * @memberof bbn.fn
   * @returns  {Boolean}
   */
  isDom() {
    if (!arguments.length) return false;
    for (let a of arguments) {
      if (!(a instanceof HTMLElement)) {
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
   * //true
   * let myCanvas = document.createElement('canvas');
   * bbn.fn.isCanvas(myCanvas);
   * ```
   * @memberof bbn.fn
   * @returns  {Boolean}
   */
  isCanvas() {
    if (!arguments.length) return false;
    for (let a of arguments) {
      if (!(a instanceof HTMLCanvasElement)) {
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
   * //true
   * let myObj =  new Vue({
   *                //options
   *              });
   * bbn.fn.isVue(myObj);
   * ```
   * @memberof bbn.fn
   * @returns  {Boolean}
   */
  isVue() {
    if (!arguments.length) return false;
    for (let a of arguments) {
      if (!(a instanceof Vue)) {
        return false
      }
    }
    return true;
  },

  /**
   * Returns true if the given argument is a percentage.
   * @method   isPercent
   * @global
   * @example
   * ```javascript
   * //true
   * bbn.fn.isPercent('5%');
   * ```
   * @memberof bbn.fn
   * @returns  {Boolean}
   */
  isPercent() {
    if (!arguments.length) return false;
    for (let a of arguments) {
      if ((typeof a !== 'string') || !a.match(/^\d+(?:\.\d+)?%$/)) {
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
  isURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
  },
};