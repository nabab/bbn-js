/**
 * @file   Object functions.
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
     * Return an array of objects sorted in ascending or descending order according to the property we give as the second argument.
     * @method   order
     * @global
     *
     * @example
     * ```javascript
     * //[{field5:5, field6:6},{field1:1, field2:2},{field3:3, field4:4}];
     * bbn.fn.order([{field1:1, field2:2},{field3:3, field4:4},{field5:5, field6:6}],'field6','asc');
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
     * @method   compareValues
     * @todo     Add method description for compareValues
     * @global   
     * @memberof bbn.fn
     * @param    {Object} a    
     * @param    {Object} b    
     * @param    {String} prop 
     * @param    {String} dir  
     * @returns           
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
     * @method   unique
     * @todo     Add method description for unique
     * @global   
     * @memberof bbn.fn
     * @param    {Array} arr 
     * @returns          
     */
    unique(arr){
      return arr.filter(function(el, index, ar) {
        return index == ar.indexOf(el);
      });
    },

    /**
     * @method   getProperty
     * @todo     Add method description for getProperty
     * @global   
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
     * @method   multiorder
     * @todo     Add method description for multiorder
     * @global   
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
     * @method   move
     * @todo     Add method description for move
     * @global   
     * @memberof bbn.fn
     * @param    {Array}  arr       
     * @param    {Number} fromIndex 
     * @param    {Number} toIndex   
     * @returns           
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
     * @method   compare
     * @todo     Add method description for compare
     * @global   
     * @memberof bbn.fn
     * @param    {String|Number} v1   
     * @param    {String|Number} v2   
     * @param    {String}        mode 
     * @returns                  
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
     * @method   search
     * @todo     Add method description for search
     * @global   
     * @memberof bbn.fn
     * @param    {Array}         arr  
     * @param    {String}        prop 
     * @param    {String|Number} val  
     * @param    {String}        mode 
     * @returns                  
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
     * @method   count
     * @todo     Add method description for count
     * @global   
     * @memberof bbn.fn
     * @param    {Array}         arr  
     * @param    {String}        prop 
     * @param    {String|Number} val  
     * @param    {String}        mode 
     * @returns                  
     */
    count(arr, prop, val, mode){
      return bbn.fn.filter(arr, prop, val, mode, false).length || 0;
    },

    /**
     * @method   sum
     * @todo     Add method description for sum
     * @global   
     * @memberof bbn.fn
     * @param    {Array}           arr    
     * @param    {String}          prop   
     * @param    {Object|Function} filter 
     * @param    {String}          mode   
     * @returns                    
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
     * @method   compareConditions
     * @todo     Add method description for compareConditions
     * @global   
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
     * @method   filterToConditions
     * @todo     Add method description for filterToConditions
     * @global   
     * @memberof bbn.fn
     * @param    {Object} filter 
     * @param    {String} mode   
     * @returns           
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
     * @method   filter
     * @todo     Add method description for filter
     * @global   
     * @memberof bbn.fn
     * @param    {Array}                  arr  
     * @param    {String|Object|Function} prop 
     * @param    {Mixed}                  val  
     * @param    {String}                 mode 
     * @returns                           
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
     * @method   get_row
     * @todo     Add method description for get_row
     * @global   
     * @memberof bbn.fn
     * @param    {Array}         arr  
     * @param    {String}        prop 
     * @param    {String|Number} val  
     * @returns                  
     */
    get_row(arr, prop, val){
      var idx = bbn.fn.search(arr, prop, val);
      if ( idx > -1 ){
        return arr[idx];
      }
      return false;
    },

    /**
     * @method   get_field
     * @todo     Add method description for get_field
     * @global   
     * @memberof bbn.fn
     * @param    {Array}           The   
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
     * @method   countProperties
     * @todo     Add method description for countProperties
     * @global   
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
     * @method   numProperties
     * @todo     Add method description for numProperties
     * @global   
     * @memberof bbn.fn
     * @param    {Object}  
     * @returns           
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
     * @method   removePrivateProp
     * @todo     Add method description for removePrivateProp
     * @global   
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
     * @method   isSame
     * @todo     Add method description for isSame
     * @global   
     * @memberof bbn.fn
     * @param    {Object} obj1 
     * @param    {Object} obj2 
     * @returns           
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
     * @method   extend
     * @todo     Add method description for extend
     * @global   
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
     * @method   extendOut
     * @todo     Add method description for extendOut
     * @global   
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
     * @method   autoExtend
     * @todo     Add method description for autoExtend
     * @global   
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
     * @method   removeEmpty
     * @todo     Add method description for removeEmpty
     * @global   
     * @memberof bbn.fn
     * @param    {Array} arr 
     * @returns          
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
     * @method   arrayFromProp
     * @todo     Add method description for arrayFromProp
     * @global   
     * @memberof bbn.fn
     * @param    {Array}  arr  
     * @param    {String} prop 
     * @returns           
     */
    arrayFromProp(arr, prop){
      let r = [];
      bbn.fn.each(arr, (a, i) => {
        r.push(a[prop])
      });
      return r;
    },

    /**
     * @method   pickValue
     * @todo     Add method description for pickValue
     * @global   
     * @memberof bbn.fn
     * @param    {Array} arr 
     * @returns          
     */
    pickValue(arr){
      if ( Array.isArray(arr) && arr.length ){
        return arr[Math.floor(Math.random() * arr.length)]
      }
    },

    /**
     * @method   diffObj
     * @todo     Add method description for diffObj
     * @global   
     * @memberof bbn.fn
     * @param    {Object}  obj1      
     * @param    {Object}  obj2      
     * @param    {String}  unchanged 
     * @param    {Boolean} notRoot   
     * @returns  {*}       
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
     * @method   transform
     * @todo     Add method description for transform
     * @global   
     * @memberof bbn.fn
     * @param    {*} oldO 
     * @param    {*} newO 
     * @returns  {*} 
     */
    transform(oldO, newO){
      if (typeof oldO !== typeof newO){
        oldO = newO;
        return oldO;
      }
      else{
        let diff = bbn.fn.diffObj(oldO, newO);
        let isArray = bbn.isArray(oldO);
        bbn.fn.iterate(diff, (a, k) => {
          if (bbn.fn.isObject(a)){
            let keys = Object.keys(a);
            if ((keys.length === 3) && keys.includes('type') && keys.includes('type') && keys.includes('data')){
              switch ( a.type ){
                case 'updated':
                  break;
                case 'deleted':
                  break;
                case 'inserted':
                  break;
              }
            }
          }
        })
      }
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
     * @method   each
     * @todo     Add method description for each
     * @global   
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
     * @method   iterate
     * @todo     Add method description for iterate
     * @global   
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
     * @method   clone
     * @todo     Add method description for clone
     * @global   
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
     * @method   map
     * @todo     Add method description for map
     * @global   
     * @memberof bbn.fn
     * @param    {Array}    arr      
     * @param    {Function} fn       
     * @param    {Boolean}  deepProp 
     * @returns             
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
     * @method   toCSV
     * @todo     Add method description for toCSV
     * @global   
     * @memberof bbn.fn
     * @param    {Array}  arr   
     * @param    {String} [','] 
     * @param    {String} [';'] 
     * @param    {String} ['"'] 
     * @returns           
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
     * @method   shortenObj
     * @todo     Add method description for shortenObj
     * @global   
     * @memberof bbn.fn
     * @param    {*} obj 
     * @param    {*} max 
     * @returns  {*} 
     */
    shortenObj(obj, max){
      if (!max) {
        max = 100;
      }
      o = bbn.fn.clone(obj);
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
