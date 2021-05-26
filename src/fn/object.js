/**
 * @file   Objects and arrays operations.
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
     * Removes duplicate values from an array.
     * 
     * Takes an input array and returns a new array without duplicate values.
     *
     * @method   unique
     * @global
     * @example
     * ```javascript
     * bbn.fn.unique(["a", "b", "a", "b", "a", "b", "c", "c", "d"]);
     * // ["a", "b", "c", "d"]
     * ```
     * @memberof bbn.fn
     * @param    {Array} arr 
     * @returns  {Array}
     */
    unique(arr) {
      return arr.filter(function(el, index, ar) {
        return index === ar.indexOf(el);
      });
    },

    /**
     * Returns the value of the given property from the given object.
     * 
     * Looks for the given property in the given object, accepting dot (.) separator 
     * for deep property access, and returns its value if found and undefined otherwise.
     *
     * @method   getProperty
     * @global
     * @example
     * ```javascript
     * bbn.fn.getProperty({a: 1, b: 2}, 'b');
     * // 2
     * ```
     * @example
     * ```javascript
     * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.o.a');
     * // 33
     * ```
     * @example
     * ```javascript
     * bbn.fn.getProperty({a: 1, b: {o: {a: 33, h: 5}}}, 'b.h.a');
     * // undefined
     * ```
     * @memberof bbn.fn
     * @param    {Object} obj
     * @param    {String} prop
     * @returns  {*}      The property's value or undefined
     */
    getProperty(obj, prop) {
      if ( (typeof obj === 'object') && (typeof prop === 'string')){
        return prop.split('.').reduce((o, i) => {
          if (o && (o[i] !== undefined)) {
            return o[i];
          }
          return undefined;
        }, obj);
      }
    },

    /**
     * Sorts an array of objects based on the given property.
     * 
     * The resulting array is the same object, the order is based on _compareValues function.
     * 
     * @method   order
     * @global
     * @example
     * ```javascript
     * bbn.fn.order([
     *   {movie: "Brazil", year: 1985},
     *   {movie: "Donnie Darko", year: 2001},
     *   {movie: "Barry Lindon", year: 1976}
     * ], 'year', 'DESC')
     * // [
     * //   {movie: "Donnie Darko", year: 2001},
     * //   {movie: "Brazil", year: 1985},
     * //   {movie: "Barry Lindon", year: 1976}
     * // ]
     * ```
     * @memberof bbn.fn
     * @param    {Array}  arr       The array to order
     * @param    {String} prop      The property on which the order is based
     * @param    {String} [dir=asc] The direction of the order (desc or asc by default)
     * @returns  {Array} 
     */
    order(arr, prop, dir = 'asc'){
      if (arr) {
        return arr.sort(function(a, b){
          return bbn.fn._compareValues(a, b, prop, dir);
        });
      }
      return arr;
    },

    /**
     * Sorts an array of objects based on a set of properties.
     * 
     * The resulting array is the same object, the order is based on _compareValues function
     * applied for each given properties in orders argument.
     *
     * @method   multiorder
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {movie: "Brazil", year: 1985},
     *   {movie: "Donnie Darko", year: 2001},
     *   {movie: "Out of Africa", year: 1985},
     *   {movie: "Ran", year: 1985},
     *   {movie: "Back to the future", year: 1985},
     *   {movie: "Barry Lindon", year: 1976}
     * ];
     * bbn.fn.multiorder(ar, [
     *   {field: "year", dir: "desc"},
     *   {field: "movie", dir: "asc"}
     * ]);
     * // [
     * //   {movie: "Donnie Darko", year: 2001},
     * //   {movie: "Back to the future", year: 1985},
     * //   {movie: "Brazil", year: 1985},
     * //   {movie: "Out of Africa", year: 1985},
     * //   {movie: "Ran", year: 1985},
     * //   {movie: "Barry Lindon", year: 1976}
     * // ]
     * bbn.fn.multiorder(ar, {year: "desc", movie: "asc"});
     * // Same result with object shortcut
     * ```
     * @memberof bbn.fn
     * @param    {Array}        arr    The array to order
     * @param    {Array|Object} orders The properties and directions (asc, desc) to order by
     * @returns  {Array}        The same array (arr), ordered differently
     */
    multiorder(arr, orders){
      if ( !Array.isArray(orders) && (typeof orders === 'object') ){
        let tmp = [];

        for ( var n in orders ){
          tmp.push({field: n, dir: orders[n]});
        }
        orders = tmp;
      }
      let r = arr.slice();
      return r.sort((a, b) => {
        let res;
        for ( let order of orders ){
          res = bbn.fn._compareValues(a, b, order.field, order.dir);
          if ( res !== 0 ){
            return res;
          }
        }
        return 0;
      })
    },

    /**
     * Moves an element to a different position within the given array.
     *
     * The same array is returned, with its elements reordered according to the executed movement.
     *
     * @method   move
     * @global
     * @todo     Finish doc
     * @example
     * ```javascript
     * bbbn.fn.move([
     *   {movie: "Brazil", year: 1985},
     *   {movie: "Donnie Darko", year: 2001},
     *   {movie: "Out of Africa", year: 1985}
     * ], 1, 2);
     * // [
     * //   {movie: "Brazil", year: 1985},
     * //   {movie: "Out of Africa", year: 1985},
     * //   {movie: "Donnie Darko", year: 2001}
     * // ]
     * ```
     *  @example
     * ```javascript
     * bbn.fn.move([1, 2, 3, 4], 3, 0);
     * // [4, 1, 2, 3]
     * ```
     * @memberof bbn.fn
     * @param    {Array}  arr       The array
     * @param    {Number} fromIndex The index of the element to move
     * @param    {Number} toIndex   The future index of the element
     * @returns  {Array}  The same array, with elements repositionned.
     */
    move(arr, fromIndex, toIndex){
      if (toIndex >= arr.length) {
        let k = toIndex - arr.length;
        while ((k--) + 1) {
          arr.push(undefined);
        }
      }
      arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
      return arr;
    },

    /**
     * Performs a comparison between two values based on the given operator and returns a boolean.
     * 
     * It is internally used by all the filtering functions; the available operators are:  
     * - _===_, _=_, _equal_, _eq_, _is_, which stand for __===__  
     * - _!==_, _notequal_, _neq_, _isnot_, which stand for __!==__
     * - _!=_, _different_, which stand for __!=__
     * - _contains_, _contain_, _icontains_, _icontain_
     * - _starts_, _start_
     * - _startswith_, _startsi_, _starti_, _istarts_, _istart_
     * - _endswith_, _endsi_, _endi_, _iends_, _iend_
     * - _like_
     * - _gt_, _>_, which stand for __>__
     * - _lt_, _<_, which stand for __<__
     * - _gte_, _>=_, which stand for __>=__
     * - _lte_, _<=_, which stand for __<=__
     * - _isnull_, which stands for __=== null__
     * - _isnotnull_, which stands for __!== null__
     * - _isempty_, which stands for __=== ''__
     * - _isnotempty_, which stands for __!== ''__  
     *   
     * The defaut operator (if none is given) is __==__ .
     *
     * @method   compare
     * @global
     * @example
     * ```javascript
     * bbn.fn.compare('foo', 'bar', 'eq');
     * // false
     * ```
     * @example
     * ```javascript
     * bbn.fn.compare('foo', 'bar', 'neq');
     * // true
     * ```
     * @example
     * ```javascript
     * bbn.fn.compare(3, 1, '>');
     * // true
     * ```
     * @example
     * ```javascript
     * bbn.fn.compare("JavaScript", "script", 'contain');
     * // true
     * ```
     * @memberof bbn.fn
     * @param    {String|Number} v1
     * @param    {String|Number} v2
     * @param    {String}        operator
     * @returns  {Boolean}       True if the values' comparison complies with the operator, false otherwise
     */
    compare(v1, v2, operator){
      switch ( operator ){
        case "===":
        case "=":
        case "equal":
        case "eq":
        case "is":
          return v1 === v2;
        case "!==":
        case "notequal":
        case "neq":
        case "isnot":
          return v1 !== v2;
        case "!=":
        case "different":
          return v1 != v2;
        case "contains":
        case "contain":
        case "icontains":
        case "icontain":
          if ( bbn.fn.isEmpty(v1) || bbn.fn.isEmpty(v2) ){
            return false;
          }
          return bbn.fn.removeAccents(v1).toLowerCase().indexOf(bbn.fn.removeAccents(v2).toLowerCase()) !== -1;
        case "doesnotcontain":
        case "donotcontain":
            if ( bbn.fn.isNull(v1) || bbn.fn.isNull(v2) ){
              return true;
            }
          return bbn.fn.removeAccents(v1.toLowerCase()).indexOf(bbn.fn.removeAccents(v2.toLowerCase())) === -1;
        case "starts":
        case "start":
          if ( bbn.fn.isNull(v1) || bbn.fn.isNull(v2) ){
            return false;
          }
          if ( (typeof(v1) !== 'string') ){
            v1 = v1.toString() || '';
          }
          if ( (typeof(v2) !== 'string') ){
            v2 = v2.toString() || '';
          }
          return v1.indexOf(v2) === 0;
        case "startswith":
        case "startsi":
        case "starti":
        case "istarts":
        case "istart":
          if ( bbn.fn.isNull(v1) || bbn.fn.isNull(v2) ){
            return false;
          }
          return bbn.fn.removeAccents(v1).toLowerCase().indexOf(bbn.fn.removeAccents(v2).toLowerCase()) === 0;
        case "endswith":
        case "endsi":
        case "endi":
        case "iends":
        case "iend":
          if ( bbn.fn.isNull(v1) || bbn.fn.isNull(v2) ){
            return false;
          }
          return v1.lastIndexOf(v2) === v1.length - v2.length;
        case "like":
          if ( bbn.fn.isNull(v1) || bbn.fn.isNull(v2) ){
            return false;
          }
          return bbn.fn.removeAccents(v1).toLowerCase() === bbn.fn.removeAccents(v2).toLowerCase();
        case "gt":
        case ">":
          return v1 > v2;
        case "gte":
        case ">=":
          return v1 >= v2;
        case "lt":
        case "<":
          return v1 < v2;
        case "lte":
        case "<=":
          return v1 <= v2;
        case "isnull":
          return v1 === null;
        case "isnotnull":
          return v1 !== null;
        case "isempty":
          return v1 === '';
        case "isnotempty":
          return v1 !== '';
        case '==':
          if (bbn.fn.isObject(v1, v2)) {
            return bbn.fn.isSame(v1, v2);
          }
        default:
          return v1 == v2;
      }
    },

    /**
     * Retrieves the index of the array's first element corresponding to the given filter.
     *
     * Returns -1 if the element is not found. If the second parameter is an object or function 
     * for filtering as defined in bbn.fn.filter, the remaining parameters will be shifted to the
     * left, i.e. val becomes operator, and operator startFrom. And if operator is a number, its value will
     * be given to startFrom and operator will be undefined. The filter object can be complex with different
     * operators (as seen in bbn.fn.compare) and logics (AND/OR), and infinitely nested, of this form:
     * ```javascript
     * {
     *   logic: "AND",
     *   conditions: [
     *     {
     *       field: "prop1",
     *       operator: "eq",
     *       value: "value1"
     *     }, {
     *       logic: "OR",
     *       conditions: [
     *         {
     *            field: "prop2",
     *            operator: "eq",
     *            value: 1
     *         }. {
     *            field: "prop2",
     *            operator: "eq",
     *            value: 2
     *         }
     *       ]
     *     }
     *   ]
     * }
     * ```
     * This way of managing the arguments is used in all the filtering functions.
     *
     * @method   search
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.search(ar, "id", 256);
     * // 2
     * bbn.fn.search(ar, {director: "Steven Spielberg"});
     * // 0
     * bbn.fn.search(ar, {year: 1975, director: "Steven Spielberg"});
     * // 3
     * bbn.fn.search(ar, {director: "Steven Spielberg"}, 1);
     * // 3
     * // Complex filters
     * bbn.fn.search(ar, {
     *   logic: "AND",
     *   conditions: [
     *     {
     *       field: "director",
     *       operator: "eq",
     *       value: "Steven Spielberg"
     *     }, {
     *       logic: "OR",
     *       conditions: [
     *         {
     *            field: "year",
     *            operator: "eq",
     *            value: 1974
     *         }, {
     *            field: "year",
     *            operator: "eq",
     *            value: 1975
     *         }
     *       ]
     *     }
     *   ]
     * });
     * // 3
     * ```
     * @memberof bbn.fn
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @param    {Number}                   startFrom The index from which the search should start
     * @returns  {Number}                   The index if found, otherwise -1
     */
    search(arr, prop, val, operator, startFrom){
      if ( !bbn.fn.isArray(arr) ){
        throw new Error(bbn._("The first argument for a search should be an array") + " " + (typeof arr) + " " + bbn._("given"));
      }
      if ( !prop || !arr.length ){
        return -1;
      }
      let filter = {};
      let isFunction = false;
      if (bbn.fn.isString(prop)) {
        filter[prop] = val;
      }
      else {
        startFrom = operator;
        operator = val;
        if (bbn.fn.isObject(prop)) {
          filter = prop;
        }
        else if (bbn.fn.isFunction(prop)) {
          isFunction = true;
          filter = prop;
        }
      }
      if (isFunction || (bbn.fn.isObject(filter) && bbn.fn.numProperties(filter))) {
        if (bbn.fn.isNumber(operator)) {
          startFrom = operator;
          operator = undefined;
        }
        if (!bbn.fn.isNumber(startFrom)) {
          startFrom = 0;
        }
        if (isFunction) {
          for ( let i = startFrom; i < arr.length; i++ ){
            if ( filter(arr[i]) ){
              return i;
            }
          }
        }
        else {
          filter = bbn.fn.filterToConditions(filter);
          for ( let i = startFrom; i < arr.length; i++ ){
            if ( bbn.fn.compareConditions(arr[i], filter) ){
              return i;
            }
          }
        }
      }
      return -1;
    },

    /**
     * Counts the number of objects matching the given filter in the given array.
     * 
     * The arguments follow the same scheme as bbn.fn.search.
     *
     * @method   count
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.count(ar, "id", 256);
     * // 1
     * bbn.fn.count(ar, {director: "Steven Spielberg"});
     * // 2
     * bbn.fn.search(ar, "year", 1975, ">");
     * // 3
     * // Complex filters: all the movies from Spielberg between 1974 and 1980
     * bbn.fn.search(ar, {
     *   logic: "AND",
     *   conditions: [
     *     {
     *       field: "director",
     *       operator: "eq",
     *       value: "Steven Spielberg"
     *     }, {
     *       logic: "AND",
     *       conditions: [
     *         {
     *            field: "year",
     *            operator: ">=",
     *            value: 1974
     *         }, {
     *            field: "year",
     *            operator: "<=",
     *            value: 1980
     *         }
     *       ]
     *     }
     *   ]
     * });
     * // 1
     * ```
     * @memberof bbn.fn
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {Number}                   The number of items
     */
    count(arr, prop, val, operator){
      return bbn.fn.filter(arr, prop, val, operator, false).length || 0;
    },

    /**
     * Retrieves all elements of a hierarchical array corresponding to the filter.
     * 
     * The arguments follow the same scheme as bbn.fn.search.
     *
     * @method   findAll
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.count(ar, "id", 256);
     * // 1
     * bbn.fn.count(ar, {director: "Steven Spielberg"});
     * // 2
     * bbn.fn.search(ar, "year", 1975, ">");
     * // 3
     * // Complex filters: all the movies from Spielberg between 1974 and 1980
     * bbn.fn.search(ar, {
     *   logic: "AND",
     *   conditions: [
     *     {
     *       field: "director",
     *       operator: "eq",
     *       value: "Steven Spielberg"
     *     }, {
     *       logic: "AND",
     *       conditions: [
     *         {
     *            field: "year",
     *            operator: ">=",
     *            value: 1974
     *         }, {
     *            field: "year",
     *            operator: "<=",
     *            value: 1980
     *         }
     *       ]
     *     }
     *   ]
     * });
     * // 1
     * ```
     * @memberof bbn.fn
     * @todo Do the doc!
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {Number}                   The number of items
     */
    findAll(arr, filter, deepProperty, res = [])
    {
      let idx;
      let start = 0;
      while ((idx = bbn.fn.search(arr, filter, start)) > -1) {
        res.push(arr[idx]);
        start = idx + 1;
      }
      bbn.fn.each(arr, it => {
        if (bbn.fn.isArray(it[deepProperty])) {
          bbn.fn.findAll(it[deepProperty], filter, deepProperty, res);
        }
      });
      return res;
    },

    /**
     * Retrieves all elements of a hierarchical array corresponding to the filter.
     * 
     * The arguments follow the same scheme as bbn.fn.search.
     *
     * @method   findAll
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.count(ar, "id", 256);
     * // 1
     * bbn.fn.count(ar, {director: "Steven Spielberg"});
     * // 2
     * bbn.fn.search(ar, "year", 1975, ">");
     * // 3
     * // Complex filters: all the movies from Spielberg between 1974 and 1980
     * bbn.fn.search(ar, {
     *   logic: "AND",
     *   conditions: [
     *     {
     *       field: "director",
     *       operator: "eq",
     *       value: "Steven Spielberg"
     *     }, {
     *       logic: "AND",
     *       conditions: [
     *         {
     *            field: "year",
     *            operator: ">=",
     *            value: 1974
     *         }, {
     *            field: "year",
     *            operator: "<=",
     *            value: 1980
     *         }
     *       ]
     *     }
     *   ]
     * });
     * // 1
     * ```
     * @memberof bbn.fn
     * @todo Do the doc!
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {Number}                   The number of items
     */
    deepPath(arr, filter, deepProperty, res = [])
    {
      let idx;
      let start = 0;
      if ((idx = bbn.fn.search(arr, filter, start)) > -1) {
        res.push(idx);
        return res;
      }
      bbn.fn.each(arr, (it, i) => {
        if (bbn.fn.isArray(it[deepProperty])) {
          let r = res.slice();
          r.push(i);
          let tmp = bbn.fn.deepPath(it[deepProperty], filter, deepProperty, r);
          if (tmp !== false) {
            return tmp;
          }
        }
      });
      return false;
    },

    /**
     * Returns the sum of the given property or function for the array's elements matching the filter.
     * 
     * The filtering arguments follow the same scheme as bbn.fn.search.
     * 
     * @method   sum
     * @global
     * @example
     * ```javascript
     * let invited = [
     *   {name: "Robert De Niro", attendees: 2, confirmed: true},
     *   {name: "Al Pacino", attendees: 1, confirmed: false},
     *   {name: "James Caan", attendees: 4, confirmed: false},
     *   {name: "Harvey Keitel", attendees: 5, confirmed: true}
     * ];
     * // No filter
     * bbn.fn.sum(invited, "attendees");
     * // 12
     * // Filter
     * bbn.fn.sum(invited, "attendees", {confirmed: true});
     * // 7
     * ```
     * @example
     * ```javascript
     * let cart = [
     *    {article: "Toothpaste", price: 2.50, quantity: 1},
     *    {article: "Toothbrush", price: 6, quantity: 2},
     *    {article: "Banana", price: 0.50, quantity: 3},
     *    {article: "T-shirt", price: 14, quantity: 3}
     * ];
     * bbn.fn.sum(cart, a => a.price * a.quantity);
     * // 58
     * // Only the items with a quantity equal to 3
     * bbn.fn.sum(cart, a => a.price * a.quantity, {quantity: 3});
     * // 43.5
     * ```
     * @memberof bbn.fn
     * @param    {Array}                    arr        The subject array
     * @param    {(String|Function)}        numberProp The property's name for which the value should be added to the sum, or a function returning the number.
     * @param    {(String|Object|Function)} prop       A property's name or a filter object or function
     * @param    {*}                        val        The value with which comparing the given property
     * @param    {String}                   operator   The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {Number}                   The sum
     */
    sum(arr, numberProp, prop, val, operator){
      let r = 0;
      let isFunction = bbn.fn.isFunction(numberProp);
      bbn.fn.each(bbn.fn.filter(arr, prop, val, operator), (a) => {
        let tmp = isFunction ? numberProp(a) : a[numberProp];
        if (tmp) {
          r += (parseFloat(tmp) || 0);
        }
      });
      return r;
    },

    /**
     * Returns a new array with only the data matching the given filter.
     * 
     * The filtering arguments follow the same scheme as bbn.fn.search.
     * 
     * @method   filter
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.filter(ar, {director: "Steven Spielberg"});
     * // [
     * //   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     * //   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * // ]
     * bbn.fn.filter(ar, "director", "Steven Spielberg");
     * // Same result as the previous example
     * bbn.fn.filter(ar, {
     *   logic: "OR",
     *   conditions: [
     *     {
     *        field: "director",
     *        value: "Richard Donner"
     *     }, {
     *        field: "director",
     *        value: "George Lucas"
     *     }
     *   ]
     * );
     * // [
     * //   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     * //   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     * // ]
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {Array}                    A new filtered array
     */
    filter(arr, prop, val, operator) {
      if ( !bbn.fn.isArray(arr) ){
        throw new Error("Error in bbn.fn.filter: The first argument must be an array");
      }
      var filter = {},
          res = [],
          isFn = bbn.fn.isFunction(prop),
          isObj = bbn.fn.isObject(prop);
      if ( !prop || !arr.length ){
        return arr;
      }
      if ( arr.length ){
        if ( isObj || isFn ){
          operator = val;
          filter = prop;
        }
        else if ( typeof(prop) === 'string'){
          filter[prop] = val;
        }
        else{
          throw new Error("Search function error: The prop argument should be a string or an object");
        }
        if ( isFn ){
          bbn.fn.each(arr, (a, i) => {
            if ( filter(a, i) ){
              res.push(a);
            }
          })
        }
        else{
          filter = bbn.fn.filterToConditions(filter, operator);
          if ( filter.conditions && filter.logic ){
            bbn.fn.each(arr, (a) => {
              if ( bbn.fn.compareConditions(a, filter) ){
                res.push(a);
              }
            });
          }
        }
        return res;
      }
    },

    /**
     * Returns the first object matching the given filter in an array of objects.
     *
     * The filtering arguments follow the same scheme as bbn.fn.search.
     * 
     * @method    getRow
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.getRow(ar, {director: "Steven Spielberg"});
     * // {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     * bbn.fn.getRow(ar, "director", "Steven Spielberg");
     * // Same result as the previous example
     * bbn.fn.getRow(ar, {
     *   logic: "OR",
     *   conditions: [
     *     {
     *        field: "director",
     *        value: "Richard Donner"
     *     }, {
     *        field: "director",
     *        value: "George Lucas"
     *     }
     *   ]
     * );
     * // {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     * ```
     * @memberof bbn.fn
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @returns  {Object|Boolean}           The item if found, false otherwise
     */
    getRow(arr, prop, val, operator){
      var idx = bbn.fn.search(arr, prop, val, operator);
      if ( idx > -1 ){
        return arr[idx];
      }
      return false;
    },

    /**
     * Returns the value of the given field (property) from the first object matching the given filter in an array of objects.
     *
     * The filtering arguments follow the same scheme as bbn.fn.search.
     *
     * @method   getField
     * @global
     * @example
     * ```javascript
     * let ar = [
     *   {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589},
     *   {name: "Goonies", director: "Richard Donner", year: 1985, id: 689},
     *   {name: "Star wars", director: "George Lucas", year: 1977, id: 256},
     *   {name: "Jaws", director: "Steven Spielberg", year: 1975, id: 423}
     * ];
     * bbn.fn.getField(ar, "movie", {id: 256});
     * // Star wars
     * bbn.fn.getField(ar, "movie", "id", 689);
     * // Goonies
     * ```
     * @memberof bbn.fn
     * @param    {Array}                    arr       The subject array
     * @param    {(String|Object|Function)} prop      A property's name or a filter object or function
     * @param    {*}                        val       The value with which comparing the given property
     * @param    {String}                   operator  The operator to use for comparison with the value as used in bbn.fn.compare
     * @param    {String}                   field     The property from which the value is returned
     * @returns
     */
    getField(arr, field, prop, val, operator) {
      var r;
      if ( r = bbn.fn. getRow(arr, prop, val, operator) ){
        return r[field ? field : val] || false;
      }
      return false;
    },

    /**
     * Returns an object with the original objects' properties starting with an alphanumeric character.
     * 
     * It is presumed that external libraries, bbn variables use prefixes such as _ or $ for
     * naming private properties; this returns a new object purged from these properties.
     * 
     * @method   removePrivateProp
     * @global
     * @example
     * ```javascript
     * bbn.fn.removePrivateProp({
     *   _bbn_timestamp: 1587269593987,
     *   name: "Wonka",
     *   fname: "Willy"
     * });
     * // {name: "Wonka", fname: "Willy"}
     * ```
     * @memberof bbn.fn
     * @param    {Object}  obj  The original object
     * @param    {Boolean} deep If true the function will be reapplied on object properties
     * @returns  {Object}  A new object without only the _public_ properties.
     */
    removePrivateProp(obj, deep){
      var r = false;
      if ( typeof(obj) === "object" ){
        r = {};
        for ( var n in obj ){
          if (n.substr(0, 1).match(/^[A-z0-9]$/) && obj.hasOwnProperty(n)) {
            if ( deep && (typeof(obj[n]) === "object")){
              r[n] = bbn.fn.removePrivateProp(obj[n], true);
            }
            else{
              r[n] = obj[n];
            }
          }
        }
      }
      return r;
    },

    /**
     * Returns the number of properties contained in the object.
     * 
     * Only takes into account the own properties - not the inherited ones - and the non _private_ ones.
     *
     * @method   numProperties
     * @global
     * @example
     * ```javascript
     * bbn.fn.numProperties({author: "Chuck Palahniuk", "title": "Fight club"});
     * // 2
     * ```
     * @example
     * ```javascript
     * bbn.fn.numProperties({username: "chuck", "password": "soap", _bbn_timestamp: 1587323193751});
     * // 2
     * @example
     * ```javascript
     * let d = new Date();
     * bbn.fn.numProperties(d);
     * // 0
     * d.myProp = 1;
     * bbn.fn.numProperties(d);
     * // 1
     * ```
     * @memberof bbn.fn
     * @param    {Object} obj The object to analyze
     * @returns  {Number} The number of properties
     */
    numProperties(obj) {
      let i = 0;
      if (!obj || (typeof obj !== 'object')) {
        return i;
      }
      return Object.keys(bbn.fn.removePrivateProp(obj)).length;
    },

    /**
     * Checks whether the data contained in the given objects is identical.
     * 
     * The properties starting with a non alphanumerical character and the 
     * inherited ones are removed for the comparison, then the properties are 
     * compared individually without the order being taken into account.
     *
     * @method   isSame
     * @global
     * @example
     * ```javascript
     * bbn.fn.isSame(
     *   {name: "Wonka", fname: "Willy"},
     *   {fname: "Willy", name: "Wonka"}
     * );
     * // true
     * ```
     * @example
     * ```javascript
     * // Doesn't take into account properties starting with non-alphanumeric characters
     * bbn.fn.isSame(
     *   {name: "Wonka", fname: "Willy", _bbn_timestamp: 1587269593987},
     *   {fname: "Willy", name: "Wonka"}
     * );
     * // true
     * ```
     * @example
     * ```javascript
     * bbn.fn.isSame(
     *   {name: "Wonka", fname: "Willy", real: false},
     *   {fname: "Willy", name: "Wonka"}
     * );
     * // false
     * ```
     * @memberof bbn.fn
     * @param    {Object} obj1
     * @param    {Object} obj2
     * @returns  {Boolean}
     */
    isSame(obj1, obj2){
      if ( obj1 === obj2 ){
        return true;
      }
      if ( obj1 && obj2 && (typeof(obj1) === 'object') && (typeof(obj2) === 'object') ){
        let tmp1 = Object.keys(bbn.fn.removePrivateProp(obj1)).sort(),
            tmp2 = Object.keys(bbn.fn.removePrivateProp(obj2)).sort();
        // Case where the keys are different
        if ( JSON.stringify(tmp1) !== JSON.stringify(tmp2) ){
          return false;
        }
        let ok = true;
        bbn.fn.each(tmp1, a => {
          if (bbn.fn.isObject(obj1[a], obj2[a])) {
            if (!bbn.fn.isSame(obj1[a], obj2[a])) {
              ok = false;
              return false;
            }
          }
          /* else if (obj1[a] !== obj2[a]) {
            ok = false;
            return false;
          } */
          else if (bbn.fn.numProperties(bbn.fn.diffObj(obj1[a], obj2[a]))) {
            ok = false;
            return false;
          }
        });
        return ok;
      }
      return false;
    },

    /**
     * Converts the given object 'filter' to a valid format of condition.
     * 
     * The resulting format will comply with bbn.fn.compareConditions and also with 
     * bbn databases functions and complex filters applied to bbn-vue list components.
     *
     * @method   filterToConditions
     * @global
     * @example
     * ```javascript
     * bbn.fn.filterToConditions({num: 3});
     * // {
     * //   logic: "AND",
     * //   conditions: [{
     * //     field: "num",
     * //     operator: "=",
     * //     value: 3
     * //   }]
     * // }
     * ```
     * @example
     * ```javascript
     * bbn.fn.filterToConditions({num: 3}, '>');
     * // {
     * //   logic: "AND",
     * //   conditions: [{
     * //     field: "num",
     * //     operator: ">",
     * //     value: 3
     * //   }]
     * // }
     * ```
     * @memberof bbn.fn
     * @param    {Object} filter
     * @param    {String} operator
     * @returns  {Object} 
     */
    filterToConditions(filter, operator){
      if ( !bbn.fn.isObject(filter) ){
        throw new Error("Error in bbn.fn.filterToCondition: filter must be an object");
      }
      if ( !filter.conditions || !bbn.fn.isArray(filter.conditions) ){
        let tmp = [];
        bbn.fn.iterate(filter, (a, n) => {
          if ( bbn.fn.isObject(a) && (typeof a.conditions === 'object') ){
            tmp.push(bbn.fn.filterToConditions(a));
          }
          else{
            tmp.push({
              field: n,
              operator: operator || '=',
              value: a
            });
          }
        });
        filter = {
          conditions: tmp
        };
      }
      if ( !filter.logic ){
        filter.logic = 'AND';
      }
      return filter;
    },

    /**
     * Checks whether the given data object complies or not with the given filter.
     * 
     * The filter format must be full (i.e. with the properties logic and conditions) such as
     * seen in the function bbn.fn.search and can be generated by the function bbn.fn.filterToConditions.
     *
     * @method   compareConditions
     * @global
     * @example
     * ```javascript
     * let item = {name: "Raiders of the lost ark", director: "Steven Spielberg", year: 1981, id: 589};
     * bbn.fn.compareConditions(item, {
     *   logic: "AND",
     *   conditions: [
     *     {
     *        field: "director",
     *        value: "Steven Spielberg"
     *     }
     *   ]
     * });
     * // true
     * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({director: "Steven Soderberg"}));
     * // false
     * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({director: "Steven Spielberg"}));
     * // true
     * bbn.fn.compareConditions(item, bbn.fn.filterToConditions({year: 1980}, ">"));
     * // true
     * bbn.fn.compareConditions(item, {
     *   logic: "AND",
     *   conditions: [
     *     {
     *        field: "year",
     *        operator: "<",
     *        value: 1980
     *     }
     *   ]
     * });
     * // false
     * ```
     * @memberof bbn.fn
     * @param    {Object} data
     * @param    {Object} filter
     * @returns  {Boolean}
     */
    compareConditions(data, filter){
      if ( !filter.conditions || !filter.logic || !bbn.fn.isArray(filter.conditions) ){
        throw new Error("Error in bbn.fn.compareConditions: the filter should an abject with conditions and logic properties and conditions should be an array of objects");
      }
      let ok = filter.logic === 'AND' ? true : false;
      bbn.fn.each(filter.conditions, (a) => {
        let compare;
        if ( a.conditions && bbn.fn.isArray(a.conditions) ){
          compare = bbn.fn.compareConditions(data, a);
        }
        else{
          compare = bbn.fn.compare(bbn.fn.getProperty(data, a.field), a.value, a.operator);
        }
        if ( compare ){
          if ( filter.logic === 'OR' ){
            ok = true;
            return false;
          }
        }
        else if ( filter.logic === 'AND' ){
          ok = false;
          return false;
        }
      });
      return ok;
    },

    /**
     * Merges the contents of two or more objects together into the first object.
     * 
     * A boolean true argument can be done to operate a deep extend. In this case, 
     * the content of properties or subproperties arrays and objects will also be merged.
     *
     * @method   extend
     * @global
     * @example
     * ```javascript
     * bbn.fn.extend(
     *   {prop1: 10, prop2: 20},
     *   {prop1: 11, prop3: 21},
     *   {prop2: 22, prop4: false},
     *   {prop5: false, prop3: 45}
     * );
     * // {prop1: 11, prop2: 22, prop3: 45, prop4: false, prop5: false}
     * ```
     * @example
     * ```javascript
     * bbn.fn.extend(
     *   {
     *     prop1: [3, 5, 6],
     *     prop2: {
     *       subprop1: 87,
     *       subprop2: 100
     *     }
     *   }, {
     *     prop1: 11,
     *     prop3: [8, 12, {aProperty: 1, anotherProperty: true}, 26]
     *   }, {
     *     prop2: {
     *       subprop1: 90,
     *       subprop3: 25
     *     },
     *     prop4: false
     *   }, {
     *     prop5: false,
     *     prop3: [8, 45, {anotherProperty: false, andAnother: true}]
     *   }
     * );
     * // {
     * //   prop1: 11,
     * //   prop2: {subprop1: 90, subprop3: 25},
     * //   prop3: [8, 45, {anotherProperty: false, andAnother: true}],
     * //   prop4: false,
     * //   prop5: false
     * // }
     * ```
     * @example
     * ```javascript
     * // Deep
     * bbn.fn.extend(
     *   true, 
     *   {
     *     prop1: [3, 5, 6],
     *     prop2: {
     *       subprop1: 87,
     *       subprop2: 100
     *     }
     *   }, {
     *     prop1: 11,
     *     prop3: [8, 12, {aProperty: 1, anotherProperty: true}, 26]
     *   }, {
     *     prop2: {
     *       subprop1: 90,
     *       subprop3: 25
     *     },
     *     prop4: false
     *   }, {
     *     prop5: false,
     *     prop3: [8, 45, {anotherProperty: false, andAnother: true}]
     *   }
     * );
     * // {
     * //   prop1: 11,
     * //   prop2: {subprop1: 90, subprop3: 25},
     * //   prop3: [8, 45, {aProperty: 1, anotherProperty: false, andAnother: true}, 26],
     * //   prop4: false,
     * //   prop5: false
     * // }
     * ```
     * @memberof bbn.fn
     * @returns  {Object} The first object argument, merged with the other objects given
     */
    extend(){
      let deep = false;
      let args = [];
      for ( let i = 0; i < arguments.length; i++ ){
        if ( arguments[i] === true ){
          deep = true;
        }
        else if ( !arguments[i] ){
          continue;
        }
        else if ( typeof arguments[i] !== 'object' ){
          throw new Error(bbn._("Error in bbn.fn.extend: all arguments should be object, you have given ") + typeof(arguments[i]));
        }
        else{
          args.push(arguments[i]);
        }
      }
      if ( !args.length ){
        throw new Error("No argument given");
      }
      let out = args[0];
      for ( let i = 1; i < args.length; i++ ){
        bbn.fn.iterate(args[i], (a, key) => {
          if ( deep ){
            if ( bbn.fn.isArray(a) ){
              out[key] = bbn.fn.isArray(out[key]) ? out[key] : [];
              bbn.fn.each(a, (b, i) => {
                if ( b && (typeof b === 'object') ){
                  let tmp = out[key][i];
                  if (bbn.fn.isArray(b)) {
                    if (!bbn.fn.isArray(tmp)) {
                      tmp = [];
                    }
                  } 
                  else if (!bbn.fn.isObject(tmp)) {
                    tmp = {};
                  }
                  out[key][i] = bbn.fn.extend(true, tmp, b);
                }
                else{
                  out[key][i] = b;
                }
              });
            }
            else if ( bbn.fn.isObject(a) ){
              out[key] = bbn.fn.extend(true, out[key] && (typeof out[key] === 'object') ? out[key] : {}, a);
            }
            else{
              out[key] = a;
            }
          }
          else if ( out[key] !== a ){
            out[key] = a;
          }
        });
      }
      return out;
    },

    /**
     * Returns a new object made of the properties from all the given objects.
     * 
     * Compared to bbn.fn.extend this still treats the arguments from left to right 
     * but without overwriting existing properties, and returning a new object.
     *
     * @method   extendOut
     * @global
     * @example
     * ```javascript
     * //{field1: 1, field2: 2, field3: 3, items: {item: 0, item1: 1, item2: 2}, field4: 4}
     * bbn.fn.extendOut({field1: 1, field2: 2, field3: 3, items: {item: 0}}, {field4: 4, items: {item1: 1, item2: 2}});
     * ```
     * @memberof bbn.fn
     * @returns  {Object}
     */
    extendOut(){
      let r = {};
      for ( let i = 0; i < arguments.length; i++ ){
        if ( typeof(arguments[i]) !== 'object' ){
          throw new Error("Each argument for bbn.fn.extendOut must be an object, " + typeof(arguments[i]) + " given");
        }
        if ( Array.isArray(arguments[i]) ){
          throw new Error("You cannot extend arrays with bbn.fn.extendOut");
        }
        if ( i === 0 ){
          r = arguments[0];
        }
        else{
          for ( let n in arguments[i] ){
            if ( (typeof(r[n]) === 'object') &&
              (typeof(arguments[i][n]) === 'object') &&
              !bbn.fn.isFunction(r[n]) &&
              !Array.isArray(r[n]) &&
              !Array.isArray(arguments[i][n])
            ){
              bbn.fn.extendOut(r[n], arguments[i][n]);
            }
            else if ( r[n] === undefined){
              r[n] = arguments[i][n];
            }
          }
        }
      }
      return r;
    },

    /**
     * Extends the bbn object by passing the namespace and the object it will merge with.
     * 
     * This function is a self-centric shortcut for adding functions or proerties 
     * to the bbn object itself.
     * 
     * @method   autoExtend
     * @global
     * @example
     * ```javascript
     * bbn.fn.autoExtend("fn", {myOwnFunction: () => "Result of my own function"});
     * bbn.fn.myOwnFunction();
     * // Result of my own function
     * ```
     * @example
     * ```javascript
     * bbn.fn.autoExtend("env", {serverLanguage: "php"});
     * bbn.env.sercerLanguage
     * // php
     * ```
     * @example
     * ```javascript
     * bbn.fn.autoExtend("myProject", {name: "My Project"});
     * bbn.myProject.name
     * // Project
     * ```
     * @memberof bbn.fn
     * @param    {String}    namespace The bbn property, existing or not, in which the object will be merged
     * @param    {Object}    obj       The object to merge
     * @returns  {undefined} No return value
     */
    autoExtend(namespace, obj){
      if ( !bbn[namespace] ){
        bbn[namespace] = {};
        //$.extend(true, bbn[namespace], obj);
        bbn.fn.extend(bbn[namespace], obj);
      }
      else {
       // $.extend(true, bbn[namespace], obj);
        bbn.fn.extend(bbn[namespace], obj);
      }
    },

    /**
     * Returns a new array, having removed all elements deemed empty from the given array.
     * 
     * Removes all the elements which are empty, i.e. false, 0, null, '', NaN, or undefined.
     *
     * @method   removeEmpty
     * @global
     * @example
     * ```javascript
     * bbn.fn.removeEmpty([{prop1: 10, prop2: 20}, '', {}, null, 1, undefined, 0, false, 25]);
     * // [{prop1: 10, prop2: 20}, 1, 25]
     * ```
     * @memberof bbn.fn
     * @param    {Array} arr
     * @returns  {Array}
     */
    removeEmpty(arr){
      var tmp = [];
      if ( bbn.fn.isArray(arr) ){
        for ( let i = 0; i < arr.length; i++ ){
          let ok = false;
          if ( arr[i] ){
            if (bbn.fn.isArray(arr[i])) {
              if (arr[i].length) {
                ok = true;
              }
            }
            else if (bbn.fn.isObject(arr[i])) {
              if (bbn.fn.numProperties(arr[i])) {
                ok = true;
              }
            }
            else {
              ok = true;
            }
          }
          if (ok) {
            tmp.push(arr[i]);
          }
        }
      }
      return tmp;
    },

    /**
     * Creates and returns a new array made of the given property's values from the given array of objects.
     * 
     * The returned array will always have the same length of the given array, even if the property is not found.
     * 
     * @method   arrayFromProp
     * @global
     * @example
     * ```javascript
     * bbn.fn.arrayFromProp([
     *   {movie: "Brazil", year: 1985},
     *   {movie: "Donnie Darko", year: 2001},
     *   {movie: "Barry Lindon", year: 1976}
     * ], "year");
     * // [1985, 2001, 1976]
     * ```
     * @example
     * ```javascript
     * bbn.fn.arrayFromProp([
     *   {pupil: "Agnes Varda", grade: {year: "B", month: "A"}},
     *   {pupil: "Jacques Rivette"},
     *   {pupil: "Luc Besson", grade: {year: "C", month: "D"}},
     *   {pupil: "Nicole Garcia", grade: {year: "B", month: "B"}}
     * ], "grade.month");
     * // ["A", undefined, "D", "B"]
     * ```
     * @memberof bbn.fn
     * @param    {Array}  arr
     * @param    {String} prop
     * @returns  {Array}  The new array
     */
    arrayFromProp(arr, prop){
      let r = [];
      bbn.fn.each(arr, (a, i) => {
        r.push(bbn.fn.getProperty(a, prop))
      });
      return r;
    },

    /**
     * Returns a random item from the given array.
     * 
     * @method   pickValue
     * @global
     * @example
     * ```javascript
     * bbn.fn.pickValue([1, 2, 3, 4, 5]);
     * // 1
     * bbn.fn.pickValue([1, 2, 3, 4, 5]);
     * // 5
     * bbn.fn.pickValue([1, 2, 3, 4, 5]);
     * // 4
     * ```
     * @memberof bbn.fn
     * @param    {Array} arr The array to pick from
     * @returns  {*}     The random value
     */
    pickValue(arr){
      if ( Array.isArray(arr) && arr.length ){
        return arr[Math.floor(Math.random() * arr.length)]
      }
    },

    /**
     * Returns an object describing the differences for transforming the first given object into the second.
     * 
     * The returned data will use the objects properties as keys. If unchanged is set to true, all the 
     * properties will be returned, otherwise only the different ones. Each of these keys will have the 
     * following properties: 
     * - type: can be _modified_, _created_, _deleted_, and if unchanged is set to true _unchanged_
     * - data: the first object's property's value, or the second if type is _created_
     * - newData: the second object's property's value in case of type _updated_
     *
     * @method   diffObj
     * @global
     * @example
     * ```javascript
     * bbn.fn.diffObj(
     *   {
     *     name: "Thomas", 
     *     age: 45
     *   }, {
     *     name: "Eva",
     *     sex: "Female",
     *     retired: false
     *   }
     * );
     * // {
     * //   name: {
     * //     type: "updated",
     * //     data: "Thomas",
     * //     newData: "Eva"
     * //   },
     * //   age: {
     * //     type: "deleted",
     * //     data: 45
     * //   },
     * //   sex: {
     * //     type: "created",
     * //     data: "Female"
     * //   },
     * //   retired: {
     * //     type: "created",
     * //     data: false
     * //   }
     * // }
     * ```
     * @example
     * ```javascript
     * bbn.fn.diffObj(
     *   {pupil: "Agnes Varda", grade: {year: "B", month: "A"}},
     *   {pupil: "Luc Besson", grade: {year: "C", month: "D"}}
     * );
     * // {
     * //   "pupil": {
     * //     "type": "updated",
     * //     "data": "Agnes Varda",
     * //     "newData": "Luc Besson"
     * //   },
     * //   "grade": {
     * //     "year": {
     * //       "type": "updated",
     * //       "data": "B",
     * //       "newData": "C"
     * //     },
     * //     "month": {
     * //       "type": "updated",
     * //       "data": "A",
     * //       "newData": "D"
     * //     }
     * //   }
     * // }
     * ```
     * @memberof bbn.fn
     * @param    {Object}  obj1
     * @param    {Object}  obj2
     * @param    {String}  unchanged
     * @param    {Boolean} notRoot
     * @returns  {Object}
     */
    diffObj(obj1, obj2, unchanged, notRoot){
      let VALUE_CREATED = 'created',
          VALUE_UPDATED = 'updated',
          VALUE_DELETED = 'deleted',
          VALUE_UNCHANGED = 'unchanged',
          _compareValues = function(value1, value2) {
            if (value1 === value2) {
              return VALUE_UNCHANGED;
            }
            if (
              bbn.fn.isDate(value1) &&
              bbn.fn.isDate(value2) &&
              (value1.getTime() === value2.getTime())
            ){
              return VALUE_UNCHANGED;
            }
            if ('undefined' == typeof(value1)) {
              return VALUE_CREATED;
            }
            if ('undefined' == typeof(value2)) {
              return VALUE_DELETED;
            }
            return VALUE_UPDATED;
          };
      if ( notRoot === undefined ){
        notRoot = false;
      }

      let diff = {};
      if ( !bbn.fn.isFunction(obj1) && !bbn.fn.isFunction(obj1) ){
        if (bbn.fn.isValue(obj1) || bbn.fn.isValue(obj2) ){
          let res = _compareValues(obj1, obj2);
          if ( unchanged || (res !== VALUE_UNCHANGED) ){
            let ret = {
              type: _compareValues(obj1, obj2),
              data: (obj1 === undefined) ? obj2 : obj1
            };
            if ( obj1 !== undefined ){
              ret.newData = obj2;
            }
            return ret;
          }
          return false;
        }
        for ( let key in obj1 ){
          if ( bbn.fn.isFunction(obj1[key]) ){
            continue;
          }

          let value2 = undefined;
          if ( 'undefined' != typeof(obj2[key]) ){
            value2 = obj2[key];
          }
          let res = bbn.fn.diffObj(obj1[key], value2, unchanged, true);
          if ( res ){
            diff[key] = res;
          }
        }
        for ( let key in obj2 ){
          if ( bbn.fn.isFunction(obj2[key]) || ('undefined' != typeof(obj1[key])) ){
            continue;
          }
          let res = bbn.fn.diffObj(undefined, obj2[key], unchanged, true);
          if ( res ){
            diff[key] = res;
          }
        }

      }
      return !notRoot || unchanged || bbn.fn.numProperties(diff) ? diff : false;
    },

    /**
     * Executes the provided function on each element of the given array.
     * 
     * A minimum and a maximum value can be provided, within the boundaries of the 
     * array's indexes. Returning false will stop the loop.
     * 
     * @method   fori
     * @global   
     * @example
     * ```javascript
     * let res = 0;
     * bbn.fn.fori([4, 5, 5, 10, 1, 2], d => {
     *   res += d;
     * }, 3);
     * // res = 24
     * ```
     * @example
     * ```javascript
     * let res = 0;
     * bbn.fn.fori([4, 5, 5, 10, 1, 2], d => {
     *   if (res >= 20) {
     *     return false;
     *   }
     *   res += d;
     * }, 4, 1);
     * // res = 20
     * ```
     * @memberof bbn.fn
     * @param    {Array}     arr The array to loop on
     * @param    {Function}  fn  The function, gets the array's element and the index as arguments
     * @param    {Number}    max The index to which the loop will stop
     * @param    {Number}    min The index at which the loop will start
     * @returns  {undefined}
     */
    fori(arr, fn, max = arr.length - 1, min = 0) {
      if (bbn.fn.isArray(arr)) {
        let realMax = arr.length - 1;
        if (!bbn.fn.isNumber(max) || !(0 < max <= realMax)) {
          max = realMax;
        }
        if (!bbn.fn.isNumber(min) || !(0 <= min < realMax) || (min > max)) {
          min = 0;
        }
        for ( let i = min; i <= max; i++ ){
          if ( fn(arr[i], i) === false ){
            return;
          }
        }
      }
    },

    /**
     * Executes the provided function on each element of the given array, going backward.
     * 
     * A maximum and a minimum value can be provided, within the boundaries of the 
     * array's indexes. Returning false will stop the loop.
     * 
     * @method   forir
     * @global   
     * @example
     * ```javascript
     * let res = 0;
     * bbn.fn.forir([4, 5, 5, 10, 1, 2], d => {
     *   res += d;
     * }, 4, 2);
     * // res = 16
     * ```
     * @example
     * ```javascript
     * let res = 0;
     * bbn.fn.forir([4, 5, 5, 10, 1, 2], d => {
     *   if (res >= 20) {
     *     return false;
     *   }
     *   res += d;
     * });
     * // res = 23
     * ```
     * @memberof bbn.fn
     * @param    {Array}     arr The array to loop on
     * @param    {Function}  fn  The function, gets the array's element and the index as arguments
     * @param    {Number}    max The index to which the loop will stop
     * @param    {Number}    min The index at which the loop will start
     * @returns  {undefined}
     */
    forir(arr, fn, max = arr.length - 1, min = 0){
      if (bbn.fn.isArray(arr)) {
        let realMax = arr.length - 1;
        if (!bbn.fn.isNumber(max) || !(0 < max <= realMax)) {
          max = realMax;
        }
        if (!bbn.fn.isNumber(min) || !(0 <= min < realMax) || (min > max)) {
          min = 0;
        }
        for (let i = max; i >= min; i--) {
          if (fn(arr[i], i) === false) {
            return;
          }
        }
      }
    },

    /**
     * Executes the provided function on each element of the given array.
     * 
     * Returning false will stop the loop.
     *
     * @method   each
     * @global
     * @example
     * ```javascript
     * let res = 0;
     * bbn.fn.each([4, 5, 5, 10, 1, 2], d => {
     *   res += d;
     * });
     * // res = 27
     * ```
     * @example
     * ```javascript
     * let res = 0;
     * bbn.fn.each([4, 5, 5, 10, 1, 2], d => {
     *   if (res >= 20) {
     *     return false;
     *   }
     *   res += d;
     * });
     * // res = 24
     * ```
     * @memberof bbn.fn
     * @param    {Array}     arr The array to loop on
     * @param    {Function}  fn  The function, gets the array's element and the index as arguments
     * @returns  {undefined}
     */
    each(arr, fn){
      if ( bbn.fn.isIterable(arr) ){
        for ( let i = 0; i < arr.length; i++ ){
          if ( fn(arr[i], i) === false ){
            return;
          }
        }
        return;
      }
      return bbn.fn.iterate(arr, fn);
    },

    /**
     * Executes the provided function on each property of the given object.
     *
     * @method   iterate
     * @global
     * @example
     * ```javascript
     * //["value1", 2]
     * let arr = [];
     * bbn.fn.iterate({field1: "value1", field2: 2}, (val, idx) => {
     *   arr.push(value);
     * });
     * ```
     * @memberof bbn.fn
     * @param    {(Object|Number)} obj       The object to loop on
     * @param    {Function}        fn        The function, gets the array's element and the index as arguments
     * @param    {Boolean}         noPrivate If set to true the _private_ properties won't be included
     * @returns  {undefined}
     */
    iterate(obj, fn, noPrivate) {
      if ((obj !== null) && (typeof obj === 'object')) {
        let iter = Object.keys(noPrivate ? bbn.fn.removePrivateProp(obj) : obj);
        bbn.fn.each(iter, prop => {
          if (fn(obj[prop], prop) === false) {
            return false;
          }
        });
      }
      return;
    },

    /**
     * Creates and returns a perfect clone - but different - from the given object.
     *
     * @method   clone
     * @global
     * @example
     * ```javascript
     * let obj = {name: "Thomas"};
     * let objCopy = bbn.fn.clone(obj);
     * obj.name = "Julie";
     * // obj:     {name: "Julie"}
     * // objCopy: {name: "Thomas"}
     * ```
     * @memberof bbn.fn
     * @param    {Object} obj The source object
     * @returns  {Object} A new object
     */
    clone(obj){
      if ( bbn.fn.isArray(obj) ){
        return obj.slice().map((a) => {
          return typeof(a) === 'object' ? bbn.fn.clone(a) : a;
        });
      }
      if ( bbn.fn.isObject(obj) ){
        return bbn.fn.extend(true, {}, obj);
      }
      return obj;
    },

    /**
     * Returns a new array generated by the execution of a function for each item of the given array.
     * 
     * The deepProp argument is the name of property which should contain a nested array on which
     * the function should also be applied recursively.
     * 
     * @method   map
     * @global
     * @example
     * ```javascript
     * bbn.fn.map([1, 2, 3, 4], a => {
     *   return a + 1;
     * });
     * // [2, 3, 4, 5]
     * ```
     * @example
     * ```javascript
     * bbn.fn.map(
     *   [{
     *     name: "tools",
     *     items: [
     *       {
     *          name: "hammers"
     *       }, {
     *          name: "screwdrivers",
     *          items: [
     *            {name: "flat screwdrivers"},
     *            {name: "slotted screwdrivers"},
     *            {name: "Hex screwdrivers"},
     *          ]
     *       }
     *     ]
     *   }, {
     *     name: "Kitchenware"
     *   }],
     *   d => {
     *     d.warranty = d.name === "Hex screwdrivers" ? "10 years" : "1 year";
     *     return d;
     *   },
     *   "items"
     * );
     * // [
     * //    {
     * //       name: "tools",
     * //       warranty: "1 year",
     * //       items: [
     * //         {
     * //            name: "hammers",
     * //            warranty: "1 year",
     * //         }, {
     * //            name: "screwdrivers",
     * //            warranty: "1 year",
     * //            items: [
     * //              {name: "flat screwdrivers", warranty: "1 year"},
     * //              {name: "slotted screwdrivers", warranty: "1 year"},
     * //              {name: "Hex screwdrivers", warranty: "10 year"},
     * //            ]
     * //         }
     * //       ]
     * //    }, {
     * //       name: "Kitchenware",
     * //       warranty: "1 year"
     * //    }
     * // ]
     * ```
     * @memberof bbn.fn
     * @param    {Array}    arr
     * @param    {Function} fn
     * @param    {Boolean}  deepProp
     * @param    {Number}   level
     * @returns  {Array}
     */
    map(arr, fn, deepProp, level = 0){
      return arr.map((a, i) => {
        a = fn(a, i, level);
        if ( deepProp && a[deepProp] && bbn.fn.isArray(a[deepProp]) ){
          a[deepProp] = bbn.fn.map(a[deepProp], fn, deepProp, level + 1);
        }
        return a;
      });
    },

    /**
     * Parses XML and returns an object.
     * 
     * Picked from https://stackoverflow.com/questions/4200913/xml-to-javascript-object
     * 
     * @memberof bbn.fn
     * @param   {String} xml       The XML to be parsed
     * @param   {Array}  arrayTags An array of tag names which should always be returned as array (even if single)
     * @returns {Object}
     */
    fromXml(xml, arrayTags) {
      let dom = null;
      if (window.DOMParser) dom = (new DOMParser()).parseFromString(xml, "text/xml");
      else if (window.ActiveXObject) {
          dom = new ActiveXObject('Microsoft.XMLDOM');
          dom.async = false;
          if (!dom.loadXML(xml)) throw dom.parseError.reason + " " + dom.parseError.srcText;
      }
      else throw new Error("cannot parse xml string!");
  
      function parseNode(xmlNode, result) {
          if (xmlNode.nodeName == "#text") {
              let v = xmlNode.nodeValue;
              if (v.trim()) result['#text'] = v;
              return;
          }
  
          let jsonNode = {},
              existing = result[xmlNode.nodeName];
          if (existing) {
              if (!Array.isArray(existing)) result[xmlNode.nodeName] = [existing, jsonNode];
              else result[xmlNode.nodeName].push(jsonNode);
          }
          else {
              if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1) result[xmlNode.nodeName] = [jsonNode];
              else result[xmlNode.nodeName] = jsonNode;
          }
  
          if (xmlNode.attributes) for (let attribute of xmlNode.attributes) jsonNode[attribute.nodeName] = attribute.nodeValue;
  
          for (let node of xmlNode.childNodes) parseNode(node, jsonNode);
      }
  
      let result = {};
      for (let node of dom.childNodes) parseNode(node, result);
  
      return result;
    },

    /**
     * Returns a CSV string from the given array of arrays or objects.
     *
     * @method   toCSV
     * @global
     * @example
     * ```javascript
     * bbn.fn.toCSV([['a', 'b', 'c'], ['d', 'e', 'f']]);
     * // "a","b","c";
     * // "d","e","f"
     * ```
     * @example
     * ```javascript
     * bbn.fn.toCSV([{name: "Capuche", fname: "Marc-Antoine"}, {name: "Orfin", fname: "Louis"}]);
     * // "Capuche","Marc-Antoine";
     * // "Orfin","Louis"
     * ```
     * @memberof bbn.fn
     * @param    {Array}  arr        The array to convert
     * @param    {String} [valSep=,] The value separator character
     * @param    {String} [rowSep=;] The row separator character
     * @param    {String} [valEsc="] The string escaper character
     * @returns  {String} A CSV string
     */
    toCSV(arr, valSep = ',', rowSep = ';', valEsc = '"'){
      if ( !valSep ){
        valSep = ',';
      }
      if ( !valEsc ){
        valEsc = '"';
      }
      if ( !rowSep ){
        rowSep = ';';
      }
      let csvContent = '';
      let total = arr.length;
      bbn.fn.each(arr, (a, i) => {
        let num = bbn.fn.isArray(a) ? a.length : Object.values(a).length;
        let j = 0;
        bbn.fn.each(a, (b) => {
          if ( typeof b === 'string' ){
            csvContent += valEsc + bbn.fn.replaceAll(valEsc, '\\' + valEsc, b) + valEsc;
          }
          else if ( b === 0 ){
            csvContent += '0';
          }
          else if ( !b ){
            csvContent += valEsc + valEsc;
          }
          else{
            csvContent += b.toString ? b.toString() : valEsc + valEsc;
          }
          j++;
          if ( j < num ){
            csvContent += valSep;
          }
        });
        if ( i < total - 1 ){
          csvContent += rowSep + "\n";
        }
      })
      return csvContent;
    },

    /**
     * Shortens all the strings contained in the object properties or element in a array.
     * 
     * Modifies directly the given object by cuttin all its too long strings, and adding ellipsis (...) in this case.
     *
     * @method   shortenObj
     * @global
     * @example
     * ```javascript
     * bbn.fn.shortenObj({
     *   title: "Once upon a time in the west",
     *   synopsis: "There's a single piece of land around Flagstone with water on it, and rail baron Morton (Gabriele Ferzetti) aims to have it, knowing the new railroad will have to stop there. He sends his henchman Frank (Henry Fonda) to scare the land's owner, McBain (Frank Wolff), but Frank kills him instead and pins it on a known bandit, Cheyenne (Jason Robards). Meanwhile, a mysterious gunslinger with a score to settle (Charles Bronson) and McBain's new wife, Jill (Claudia Cardinale), arrive in town."
     * }, 50)
     * // {
     * //   "title": "Once upon a time in the west",
     * //   "synopsis": "There's a single piece of land around Flagstone wi..."
     * // }
     * ```
     * @memberof bbn.fn
     * @param    {(Object|Array)} obj
     * @param    {Number}         [max=100]
     * @returns  {(Object|Array)} The same object, modified
     */
    shortenObj(obj, max = 100){
      let o = bbn.fn.clone(obj);
      bbn.fn.each(o, (a, n) => {
        if (bbn.fn.isString(a) && (a.length > max)) {
          o[n] = bbn.fn.shorten(a, max);
        }
        else if (a && (typeof a === 'object')) {
          o[n] = bbn.fn.shortenObj(a);
        }
      });
      return o;
    },

    /**
     * Compares the given property in the given objects and returns -1, 1, or 0 depending on their difference.
     * 
     * This is only used as a sorting function by bbn.fn.order and bbn.fn.multiorder.
     *
     * @method   _compareValues
     * @global
     * @example
     * ```javascript
     * // Same value
     * bbn.fn._compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'value');
     * // 0
     * ```
     * @example
     * ```javascript
     * // First value smaller than second
     * bbn.fn._compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'year');
     * // -1
     * ```
     * @example
     * ```javascript
     * // First value greater than second
     * bbn.fn._compareValues({year: 2017, value: 2}, {year: 2016, value: 2}, 'year');
     * // 1
     * ```
     * @example
     * ```javascript
     * // First value is undefined
     * bbn.fn._compareValues({year: 2017}, {year: 2016, value: 2}, 'value');
     * // 1
     * ```
     * @memberof bbn.fn
     * @param    {Object} a    First object for comparison
     * @param    {Object} b    Second object for comparison
     * @param    {String} prop Property to compare
     * @param    {String} [dir=asc]  Direction of comparison (desc or asc by default)
     * @returns  {Number} Always either -1, 1, or 0
     */
    _compareValues(a, b, prop, dir = 'asc') {
      let va = bbn.fn.getProperty(a, prop),
          vb = bbn.fn.getProperty(b, prop),
          ta = (typeof (va)).toLowerCase(),
          tb = (typeof (vb)).toLowerCase();
      if ((dir !== 'asc') && bbn.fn.isString(dir) && (dir.toLowerCase() === 'desc')) {
        dir = 'desc';
      }
      if (ta !== tb) {
        va = ta;
        vb = tb;
      }
      else {
        switch (ta) {
          case 'string':
            va = bbn.fn.removeAccents(va).toLowerCase();
            vb = bbn.fn.removeAccents(vb).toLowerCase();
            break;
          case 'boolean':
            va = va ? 1 : 0;
            vb = vb ? 1 : 0;
            break;
          case 'object':
            if (bbn.fn.isDate(va)) {
              va = va.getTime();
              vb = bbn.fn.isDate(vb) ? vb.getTime() : 0;
            }
            break;
        }
      }
      if (va < vb) {
        return dir === 'desc' ? 1 : -1;
      }
      if (va > vb) {
        return dir === 'desc' ? -1 : 1;
      }
      return 0;
    },

  });
})(bbn);
