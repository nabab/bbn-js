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
     * Returns an array of objects sorted in ascending or descending order according to the property we give as the second argument.
     * @method   order
     * @global
     *
     * @example
     * ```javascript
     * // [
     * //   {movie: "Donnie Darko", year: 2001},
     * //   {movie: "Brazil", year: 1985},
     * //   {movie: "Barry Lindon", year: 1976}
     * // ]
     * bbn.fn.order([
     *   {movie: "Brazil", year: 1985},
     *   {movie: "Donnie Darko", year: 2001},
     *   {movie: "Barry Lindon", year: 1976}
     * ], 'year', 'DESC')
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}  arr.
     * @param    {String} prop.
     * @param    {String} dir.
     * @returns  {Array}
     */
    order(arr, prop, dir){
      if ( arr ){
        let r = typeof(arr.toJSON) === 'function' ? arr.toJSON() : arr.slice();
        dir = (typeof(dir) === 'string') && (dir.toLowerCase() === 'desc') ? 'desc' : 'asc';
        return r.sort(function(a, b){
          return bbn.fn.compareValues(a, b, prop, dir);
        });
      }
      return arr;
    },

    /**
     * Compares the given objects on a given property and returns -1, 1, or 0 depending on their difference.
     *
     * @method   compareValues
     * @global
     *
     * @example
     * ```javascript
     * // Same value
     * // 0
     * bbn.fn.compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'value');
     * ```
     *
     * @example
     * ```javascript
     * // First value smaller than second
     * // -1
     * bbn.fn.compareValues({year: 2015, value: 2}, {year: 2016, value: 2}, 'year');
     * ```
     *
     * @example
     * ```javascript
     * // First value greater than second
     * // 1
     * bbn.fn.compareValues({year: 2017, value: 2}, {year: 2016, value: 2}, 'year');
     * ```
     * 
     * @example
     * ```javascript
     * // First value is undefined
     * // 1
     * bbn.fn.compareValues({year: 2017}, {year: 2016, value: 2}, 'value');
     * ```
     * @memberof bbn.fn
     * @param    {Object} a
     * @param    {Object} b
     * @param    {String} prop
     * @param    {String} dir
     * @returns  {Number}
     */
    compareValues(a, b, prop, dir){
      let va = bbn.fn.getProperty(a, prop),
          vb = bbn.fn.getProperty(b, prop),
          ta = (typeof (va)).toLowerCase(),
          tb = (typeof (vb)).toLowerCase();
      if ( dir && (typeof(dir) === 'string') && (dir.toLowerCase() === 'desc') ){
        dir = 'desc';
      }
      if ( ta !== tb ){
        va = ta;
        vb = tb;
      }
      else{
        switch ( ta ){
          case 'string':
            va = bbn.fn.removeAccents(va).toLowerCase();
            vb = bbn.fn.removeAccents(vb).toLowerCase();
            break;
          case 'boolean':
            va = va ? 1 : 0;
            vb = vb ? 1 : 0;
            break;
          case 'object':
            if ( bbn.fn.isDate(va) ){
              va = va.getTime();
              vb = bbn.fn.isDate(vb) ? vb.getTime() : 0;
            }
            break;
        }
      }
      if ( va < vb ){
        return dir === 'desc' ? 1 : -1;
      }
      if ( va > vb ){
        return dir === 'desc' ? -1 : 1;
      }
      return 0;
    },

    /**
     * Returns an array containing the unique values in the given array.
     *
     * @method   unique
     * @global
     *
     * @example
     * ```javascript
     * // ["a", "b", "c", "d"]
     * bbn.fn.unique(["a", "b", "a", "b", "a", "b", "c", "c", "d"]);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array} arr
     * @returns  {Array}
     */
    unique(arr){
      return arr.filter(function(el, index, ar) {
        return index === ar.indexOf(el);
      });
    },

    /**
     * Returns the value that contains the property of the object passed as an argument.
     *
     * @method   getProperty
     * @global
     *
     * @example
     * ```javascript
     * //1
     * bbn.fn.getProperty({field: 1, field2: 2}, 'field');
     * ```
     *
     * @memberof bbn.fn
     * @param    {Object} obj
     * @param    {String} prop
     * @returns  {*}
     */
    getProperty(obj, prop){
      if ( (typeof obj === 'object') && (typeof prop === 'string')){
        return prop.split('.').reduce((o, i) => o[i], obj);
      }
    },

    /**
     * Returns an array of objects sorted in ascending or descending order based on the object we pass as the second parameter,
     * the latter must be composed with the property of the object to which you want to order in the array and the type of order.
     *
     * @method   multiorder
     * @global
     *
     * @example
     * ```javascript
     * //[{field1: 1, field2: 2}, {field5: 5, field6: 6}, {field3: 3, field4: 4}]
     * bbn.fn.multiorder([{field1: 1, field2: 2}, {field3: 3, field4: 4}, {field5: 5, field6: 6}], {field3: 'desc'});
     * ```
     *
     * @example
     * ```javascript
     * //[{field3: 3, field4: 4}, {field1: 1, field2: 2}, {field5: 5, field6: 6}]
     * bbn.fn.multiorder([{field1: 1, field2: 2}, {field3: 3, field4: 4}, {field5: 5, field6: 6}], {field3: 'asc'});
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array} arr
     * @param    {Array} orders
     * @returns
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
          res = bbn.fn.compareValues(a, b, order.field, order.dir);
          if ( res !== 0 ){
            return res;
          }
        }
        return 0;
      })
    },

    /**
     * @method   orderLike
     * @todo     Add method description for orderLike
     * @global   
     * @memberof bbn.fn
     * @param    {Array}   to_order 
     * @param    {Array}   based_on 
     * @param    {String}  prop     
     * @param    {Boolean} exclude  
     * @returns            
     */
    orderLike(to_order, based_on, prop, exclude){
      if ( Array.isArray(to_order) && Array.isArray(based_on) && to_order.length ){
        let r = [],
            done = [],
            isObj = typeof(to_order[0]) === 'object';
        for ( let a of based_on ){
          let idx;
          if ( isObj ){
            idx = bbn.fn.search(to_order, prop, a);
          }
          else{
            idx = to_order.indexOf(a);
          }
          if ( idx > -1 ){
            r.push(to_order[idx]);
            done.push(a);
          }
        }
        if ( !exclude && (based_on.length !== to_order.length) ){
          for ( let a of to_order ){
            /*if ( $.inArray(isObj ? a[prop] : a, done) > -1 ){
              r.push(a);
            }*/
            if ( done.includes(isObj ? a[prop] : a) ){
              r.push(a);
            }
          }
        }
        return r;
      }
    },

    /**
     * Allows the movement of the elements of an array.
     *
     * All of this is possible by giving the array you want to reorder as the first argument,
     * the node you want to move and the third is where you want to position it.
     *
     * @method   move
     * @global
     *
     * @example
     * ```javascript
     * //['field1', 'field3', 'field2', 'field4']
     * bbbn.fn.move(['field1', 'field2', 'field3', 'field4'], 1, 2);
     * ```
     *
     *  @example
     * ```javascript
     * //['field4', 'field1', 'field2', 'field3"]
     * bbn.fn.move(['field1', 'field2','field3', 'field4'], 3, 0);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}  arr
     * @param    {Number} fromIndex
     * @param    {Number} toIndex
     * @returns  {Array}
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
     * Performs a comparison between two values ​​passing as the third argument the type of comparison to be performed,
     * using the terms.
     *
     * @method   compare
     * @global
     *
     * @example
     * ```javascript
     * //false
     * bbn.fn.compare('field1', 'field2', 'eq');
     * ```
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.compare('field1', 'field2', 'neq');
     * ```
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.compare(3, 1, '>');
     * ```
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.compare(123, 3, 'contain');
     * ```
     *
     * @memberof bbn.fn
     * @param    {String|Number} v1
     * @param    {String|Number} v2
     * @param    {String}        mode
     * @returns  {Boolean}
     */
    compare(v1, v2, mode){
      switch ( mode ){
        case "===":
        case "=":
        case "equal":
        case "eq":
        case "is":
          return v1 === v2;
        case "!==":
        case "notequal":
        case "neq":
        case "isnotequal":
          return v1 !== v2;
        case "!=":
        case "different":
          return v1 != v2;
        case "contains":
        case "contain":
        case "icontains":
        case "icontain":
          if ( bbn.fn.isNull(v1) || bbn.fn.isNull(v2) ){
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
          if ( (typeof(v1) !== 'string') ){
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
        default:
          return v1 == v2;
      }
    },

    /**
     * Search for the element of an array of objects by providing arguments in addition to the array to search for the property and the value that contains it.
     *
     * If it finds it, it returns the index where the object is positioned in the array;
     * if it does not find what it requested then it will return -1.
     *
     * @method   search
     * @global
     *
     * @example
     * ```javascript
     * //2
     * bbn.fn.search([{field1: 1, field2: 2}, {field3: 3, field4 : 4}, {field5: 5, field6: 6}], 'field5', 5);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}         arr
     * @param    {String}        prop
     * @param    {String|Number} val
     * @param    {String}        mode
     * @returns  {Number}  array index of the object found, otherwise -1
     */
    search(arr, prop, val, mode, startFrom){
      if ( !bbn.fn.isArray(arr) ){
        bbn.fn.log(arguments);
        throw new Error("Error in bbn.fn.search: The first argument must be an array");
      }
      var filter = {},
          isFn = bbn.fn.isFunction(prop),
          isObj = bbn.fn.isObject(prop);
      if ( !prop || !arr.length ){
        return -1;
      }
      if ( isObj || isFn ){
        let tmp = mode;
        mode = val;
        filter = prop;
        startFrom = tmp;
      }
      else if ( typeof(prop) === 'string'){
        filter[prop] = val;
      }
      else{
        throw new Error("Search function error: The prop argument should be a string or an object");
      }
      if ( typeof(startFrom) !== 'number' ){
        startFrom = 0;
      }
      else if ( (startFrom < 0) || (startFrom >= arr.length - 1) ){
        return -1;
      }
      if ( isFn ){
        for ( let i = startFrom; i < arr.length; i++ ){
          if ( filter(arr[i]) ){
            return i;
          }
        }
      }
      else{
        filter = bbn.fn.filterToConditions(filter);
        for ( let i = startFrom; i < arr.length; i++ ){
          if ( bbn.fn.compareConditions(arr[i], filter) ){
            return i;
          }
        }
      }
      return -1;
    },

    /**
     * Count how many objects contained in the array have the same property and value.
     *
     * @method   count
     * @global
     *
     * @example
     * ```javascript
     * //1
     * bbn.fn.count([{field1: 3, field2: 2}, {field3: 3, field4: 4}, {field1: 3, field4: 4}], 'field1', 3);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}         arr
     * @param    {String}        prop
     * @param    {String|Number} val
     * @param    {String}        mode
     * @returns  {Number}
     */
    count(arr, prop, val, mode){
      return bbn.fn.filter(arr, prop, val, mode, false).length || 0;
    },

    /**
     * Returns the sum of the values ​​contained
     * in the various objects that have the property given in the second argument.
     *
     * @method   sum
     * @global
     *
     * @example
     * ```javascript
     * //4
     * bbn.fn.sum([{field1: 1}, {field2: 2}, {field1: 3}], 'field1');
     * ```
     *
     * @example
     * ```javascript
     * //7
     * bbn.fn.sum([{field1: 1}, {field2: 2}, {field1: 3}, {field1: 6}], 'field1', v => {
     *   return v.field1 != 3;
     * });
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}           arr
     * @param    {String}          prop
     * @param    {Object|Function} filter
     * @param    {String}          mode
     * @returns  {Number}
     */
    sum(arr, prop, filter, mode){
      let r = 0;
      bbn.fn.each(bbn.fn.filter(arr, filter, mode), (a) => {
        if ( a[prop] ){
          r += (parseFloat(a[prop]) || 0);
        }
      });
      return r;
    },

    /**
     * Apply the conditions defined in the filter by querying the specified data object.
     *
     * @method   compareConditions
     * @global
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.compareConditions({field1: 5, field2: 'value2'}, {
     *  conditions: [{field: 'field1', operator: '<=', value: 8}],
     *  logic:'AND'
     * });
     * ```
     *
     * @memberof bbn.fn
     * @param    {Object} data
     * @param    {Object} filter
     * @returns
     */
    compareConditions(data, filter){
      if ( !filter.conditions || !filter.logic || !bbn.fn.isArray(filter.conditions) ){
        throw new Error("Error in bbn.fn.compareConditions: the filter should an abject with conditions and logic properties and conditions should be an array of objects");
      }
      let ok = filter.logic === 'AND' ? true : false;
      bbn.fn.iterate(filter.conditions, (a) => {
        let compare;
        if ( a.conditions && a.filter && bbn.fn.isArray(a.conditions) ){
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
     * Converts the given object 'filter' to a valid format of condition.
     *
     * @method   filterToConditions
     * @global
     *
     * @example
     * ```javascript
     * //{conditions:[{field: "value", operator: ">", value: 3}], logic: "AND"}
     * bbn.fn.filterToConditions({value:3},'>');
     * ```
     *
     * @memberof bbn.fn
     * @param    {Object} filter
     * @param    {String} mode
     * @returns  {Object}
     */
    filterToConditions(filter, mode){
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
              operator: mode || '=',
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
     * Returns a filtered array, based on the function given as the second argument.
     * @method   filter
     * @global
     *
     * @example
     * ```javascript
     * //[{field1: 3, field2: 4}]
     * bbn.fn.filter([{field1: 1, field2: 2}, {field1: 2, field2: 3}, {field1: 3, field2: 4}], obj => {
     *   return obj.field1 === 3;
     * });
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}                  arr
     * @param    {String|Object|Function} prop
     * @param    {Mixed}                  val
     * @param    {String}                 mode
     * @returns  {Array}
     */
    filter(arr, prop, val, mode){
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
          mode = val;
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
          filter = bbn.fn.filterToConditions(filter, mode);
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
     * Returns if the object sought is contained in the array finds it.
     *
     * @method   get_row
     * @global
     *
     * @example
     * ```javascript
     * //{field1: 2, field2: 3}
     * bbn.fn.get_row([{field1: 1, field2: 2}, {field1: 2, field2: 3}, {field1: 3, field2: 4}], 'field1', 2);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}         arr
     * @param    {String}        prop
     * @param    {String|Number} val
     * @returns  {Object|Boolean}
     */
    get_row(arr, prop, val){
      var idx = bbn.fn.search(arr, prop, val);
      if ( idx > -1 ){
        return arr[idx];
      }
      return false;
    },

    /**
     * Allows to take the value of an object property within an array.
     *
     * It occurs by providing arguments in addition to the array from which to search for a property and the value contained in the object to which we want to take the value of another property,
     * defined in the last argument of the function.
     *
     * @method   get_field
     * @global
     *
     * @example
     * ```javascript
     * //2
     * bbn.fn.get_field([{field: 1, field2: 2}, {field: 2, field2: 3}, {field: 3, field2: 4}], 'field', 1, 'field2');
     * ```
     *
     * @example
     * ```javascript
     * //4
     * bbn.fn.get_field([{field: 1, field2: 2}, {field :2, field2: 3}, {field:3, field2: 4}], 'field', 3, 'field2');
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}           arr
     * @param    {String|Function} prop
     * @param    {Number|String}   val
     * @param    {String}          prop2
     * @returns
     */
    get_field(arr, prop, val, prop2){
      var r;
      if ( r = bbn.fn.get_row(arr, prop, val) ){
        return r[prop2 ? prop2 : val] || false;
      }
      return false;
    },

    /**
     * Returns the number of properties contained in the object.
     *
     * @method   countProperties
     * @global
     *
     * @example
     * ```javascript
     * //2
     * bbn.fn.countProperties({field:1, field2: 2});
     * ```
     *
     * @memberof bbn.fn
     * @param    {Object} obj
     * @returns
     */
    countProperties(obj){
      if ( (typeof(obj)).toLowerCase() === 'object' ){
        var i = 0;
        for ( var n in obj ){
          i++;
        }
        return i;
      }
      return false;
    },

    /**
     * Returns the number of properties contained in the object.
     *
     * @method   numProperties
     * @global
     *
     * @example
     * ```javascript
     * //2
     * bbn.fn.numProperties({field: 1, field2: 2});
     * ```
     *
     * @memberof bbn.fn
     * @param    {Object}
     * @returns  {Number}
     */
    numProperties(obj){
      if ( typeof(obj) !== 'object' ){
        return false;
      }
      var i = 0;
      for ( var n in obj ){
        i++;
      }
      return i;
    },

    /**
     * Removes private properties from the given object.
     * @method   removePrivateProp
     * @global
     *
     * @example
     * ```javascript
     * //{field:1, field1:'value1'}
     * bbn.fn.removePrivateProp({field: 1, field1: 'value1', _field2: 'value2'});
     * ```
     *
     * @memberof bbn.fn
     * @param    {Object}  obj
     * @param    {Boolean} deep
     * @returns
     */
    removePrivateProp(obj, deep){
      var r = false;
      if ( typeof(obj) === "object" ){
        r = {};
        for ( var n in obj ){
          if ( (n.indexOf('_') !== 0) || (n.indexOf('$') !== 0) ){
            if ( deep && (typeof(obj[n]) === "object") ){
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
     * Checks if the two objects inserted with the arguments are identical in working order.
     *
     * @method   isSame
     * @global
     *
     * @example
     * ```javascript
     * //true
     * bbn.fn.isSame({field: 1, field2: 2}, {field: 1, field2: 2});
     * ```
     * @example
     * ```javascript
     * //false
     * bbn.fn.isSame({field: 1, field2: 2}, {field: 1, field2: 3});
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
        if ( JSON.stringify(tmp1) !== JSON.stringify(tmp2) ){
          return false;
        }
        let ok = true;
        bbn.fn.each(tmp1, (a ,i) => {
          if ( !bbn.fn.isSame(obj1[a], obj2[a]) ){
            ok = false;
            return false;
          }
        });
        return ok;
      }
      return false;
    },

    /**
     * returns a single element by extending two or more elements.
     * If at the end we pass the value true as an argument it will make the extension in depth
     *
     * @method   extend
     * @global
     *
     * @example
     * ```javascript
     * //{field1: 1, field2: 2, field3: 3}
     * bbn.fn.extend({field1: 1}, {field2: 2}, {field3: 3});
     * ```
     *
     * @memberof bbn.fn
     * @returns
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
      let out = args[0] || {};
      for ( let i = 1; i < args.length; i++ ){
        bbn.fn.iterate(args[i], (a, key) => {
          if ( deep ){
            if ( bbn.fn.isArray(a) ){
              out[key] = [];
              bbn.fn.each(a, (b, i) => {
                if ( b && (typeof b === 'object') ){
                  out[key].push(bbn.fn.extend(true, bbn.fn.isArray(b) ? [] : {}, b));
                }
                else{
                  out[key].push(b);
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
     *  Merges the contents of two or more objects together into the first object.
     *  Doesn't overwrite the property if defined in the two objects given.
     *
     * @method   extendOut
     * @global
     *
     * @example
     * ```javascript
     * //{field1: 1, field2: 2, field3: 3, items: {item: 0, item1: 1, item2: 2}, field4: 4}
     * bbn.fn.extendOut({field1: 1, field2: 2, field3: 3, items: {item: 0}}, {field4: 4, items: {item1: 1, item2: 2}});
     * ```
     *
     * @memberof bbn.fn
     * @returns
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
     * Auto extends the bbn object by passing the namespace and the object it will contain.
     * @method   autoExtend
     * @global
     *
     *  @example
     * ```javascript
     * //bbn.test : {field: 'value'}
     * bbn.fn.autoExtend('test', {field: 'value'});
     * ```
     *
     * @memberof bbn.fn
     * @param    {String} namespace
     * @param    {Object} obj
     * @returns
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
     * Returns the filtered array, removing all elements deemed empty
     *
     * @method   removeEmpty
     * @global
     *
     * @example
     * ```javascript
     * //[{field: 1, field2: 2}, {field: 2, field2: 3}, {field: 3, field2 : 4}]
     * bbn.fn.removeEmpty([{field: 1, field2: 2}, '', {field: 2, field2: 3}, '',  {field:3, field2:  4}, 0, false]);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array} arr
     * @returns  {Array}
     */
    removeEmpty(arr){
      var tmp = [];
      if ( bbn.fn.isArray(arr) ){
        for ( var i = 0; i < arr.length; i++ ){
          if ( arr[i] ){
            tmp.push(arr[i]);
          }
        }
      }
      return tmp;
    },

    /**
     * Returns an array of the same size made of the given property's values.
     * @method   arrayFromProp
     * @global
     *
     * @example
     * ```javascript
     * // [1985, 2001, 1976]
     * bbn.fn.arrayFromProp([
     *   {movie: "Brazil", year: 1985},
     *   {movie: "Donnie Darko", year: 2001},
     *   {movie: "Barry Lindon", year: 1976}
     * ], 'year');
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}  arr
     * @param    {String} prop
     * @returns  {Array}
     */
    arrayFromProp(arr, prop){
      let r = [];
      bbn.fn.each(arr, (a, i) => {
        r.push(a[prop])
      });
      return r;
    },

    /**
     * Returns a random item from the given array.
     * @method   pickValue
     * @global
     *
     * @example
     * ```javascript
     * //"field2"
     * bbn.fn.pickValue(['field1', 'field2', 'field3']);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array} arr
     * @returns  {*}
     */
    pickValue(arr){
      if ( Array.isArray(arr) && arr.length ){
        return arr[Math.floor(Math.random() * arr.length)]
      }
    },

    /**
     * Returns an object containing the differences between the given objects.
     *
     * @method   diffObj
     * @global
     *
     * @example
     * ```javascript
     * //{field2: {type: 'updated', data: 2, newData: 3}, field3: {type: 'created', data: false}}
     * bbn.fn.diffObj({field: 'value1', field2: 2}, {field: 'value1', field2: 3, field3: false});
     * ```
     *
     * @example
     * ```javascript
     * //{field: {type: 'unchanged', data: 'value1', newData: 'value1'}, field2: {type: 'updated', data: 2, newData: 3}, field3: {type: 'created', data: false}}
     * bbn.fn.diffObj({field: 'value1', field2: 2}, {field: 'value1', field2: 3, field3: false}, 'unchanged');
     * ```
     *
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
          compareValues = function(value1, value2) {
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
          let res = compareValues(obj1, obj2);
          if ( unchanged || (res !== VALUE_UNCHANGED) ){
            let ret = {
              type: compareValues(obj1, obj2),
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
     * @method   fori
     * @todo     Add method description for fori
     * @global   
     * @memberof bbn.fn
     * @param    {Function} fn  
     * @param    {Array}    arr 
     * @param    {Number}   max 
     * @param    {Number}   min 
     * @returns  {*}        
     */
    fori(fn, arr, max, min){
      if ( bbn.fn.isArray(arr) && max ){
        if ( !min || (min > max) ){
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
     * @method   forir
     * @todo     Add method description for forir
     * @global   
     * @memberof bbn.fn
     * @param    {Function} fn  
     * @param    {Array}    arr 
     * @param    {Number}   max 
     * @param    {Number}   min 
     * @returns  {*}        
     */
    forir(fn, arr, max, min){
      if ( bbn.fn.isArray(arr) && max ){
        if ( !min || (min > max) ){
          min = 0;
        }
        for ( let i = max; i >= min; i-- ){
          if ( fn(arr[i], i) === false ){
            return;
          }
        }
      }
    },

    /**
     * Performs an iterative loop of an array or object given to it as a first argument and as a second argument a function that accepts 2 arguments,
     * value and index.
     *
     * @method   each
     * @global
     *
     * @example
     * ```javascript
     * //4
     * let num = 0;
     * bbn.fn.each([{field1: 1, field2: 2}, {field3: 3, field4: 4}, {field5: 5, field6: 6}], (val,idx) => {
     *   if ( val.field3 !== undefined ){
     *     num = val.field3 + idx;
     *   }
     * })
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}    arr
     * @param    {Function} fn
     * @returns  {*}
     */
    each(arr, fn){
      if ( bbn.fn.isArray(arr) ){
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
     * Scroll through the properties of an object by executing a function for each corresponding element.
     *
     * @method   iterate
     * @global
     *
     * @example
     * ```javascript
     * //["value1", 2]
     * let arr = [];
     * bbn.fn.iterate({field1: "value1", field2: 2}, (val, idx) => {
     *   arr.push(value);
     * });
     * ```
     *
     * @memberof bbn.fn
     * @param    {Object|Number} obj
     * @param    {Function}      fn
     * @returns  {*}
     */
    iterate(obj, fn){
      if ( (obj !== null) && (typeof obj === 'object') ){
        for ( let n in obj ){
          if ( !bbn.fn.isFunction(obj.hasOwnProperty) || obj.hasOwnProperty(n) ){
            if ( fn(obj[n], n) === false ){
              return obj;
            }
          }
        }
      }
      else if ((typeof(obj) === 'number') && (obj > 0)) {
        for (let i = 0; i < obj; i++){
          if ( fn(i) === false ){
            return i;
          }
        }
      }
      return obj;
    },

    /**
     * Returns the clone argument removing the observability.
     *
     * @method   clone
     * @global
     *
     * @example
     * ```javascript
     * //{field: 1}
     * bbn.fn.clone({field: 1});
     * ```
     *
     * @memberof bbn.fn
     * @param    {mixed} obj
     * @returns
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
     * @method   map
     * @global
     *
     * @example
     * ```javascript
     * //[2, 3, 4, 5]
     * bbn.fn.map([1, 2, 3, 4], a => {
     *   return a++;
     *   return a;
     * });
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}    arr
     * @param    {Function} fn
     * @param    {Boolean}  deepProp
     * @returns  {Array}
     */
    map(arr, fn, deepProp){
      return arr.map((a, i) => {
        a = fn(a, i);
        if ( deepProp && a[deepProp] && bbn.fn.isArray(a[deepProp]) ){
          a[deepProp] = bbn.fn.map(a[deepProp], fn, deepProp);
        }
        return a;
      });
    },

    /**
     * Returns a string exportable into a csv from the given array.
     *
     * @method   toCSV
     * @global
     *
     * @example
     * ```javascript
     * // ""a","b","c"";
     * bbn.fn.toCSV([['a', 'b', 'c']]);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Array}  arr
     * @param    {String} [',']
     * @param    {String} [';']
     * @param    {String} ['"']
     * @returns  {String}
     */
    toCSV(arr, valSep, rowSep, valEsc){
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
     * Allows the abbreviation of all the strings contained in the object properties or element in a array.
     *
     * @method   shortenObj
     * @global
     *
     * @example
     * ```javascript
     * //{field: "v...", field2: 2, field3: "v...", field4: 4, field5: 5}
     * bbn.fn.shortenObj({field: 'value1', field2: 2, field3: 'value3', field4: 4, field5: 5}, 1);
     * ```
     *
     * @example
     * ```javascript
     * //["va...", 2, "va...", 4, 5]
     * bbn.fn.shortenObj(['value1', 2, 'value3', 4, 5], 2);
     * ```
     *
     * @memberof bbn.fn
     * @param    {Object|Array} obj
     * @param    {Number} max
     * @returns  {Object|Array}
     */
    shortenObj(obj, max){
      if (!max) {
        max = 100;
      }
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

  });
})(bbn);
