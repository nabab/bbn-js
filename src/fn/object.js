/**
 * Created by BBN on 10/02/2017.
 */
// jshint esversion: 6
;((bbn) => {
  "use strict";

  /**     OBJECTS AND ARRAYS    */

  Object.assign(bbn.fn, {

    /**
     * Orders objects in the array based on the given property.
     *
     * ```javascript
     * var myArray = [{age:25, name:'adrian', surname:'cooper'}, {age:54, name:'jennifer', surname:'brown'}, {age:22, name:'thomas', surname:'smith'}];
     * bbn.fn.order(myArray, 'age', 'desc');
     * // array [{age:54, name:'jennifer', surname:'brown'}, {age:25, name:'adrian', surname:'cooper'}, {age:22, name:'thomas', surname:'smith'}]
     * ```
     *
     * @param array arr. An array of objects
     * @param string prop. The property to order
     * @param string dir 'asc' or 'desc'
     * @returns {Array.<T>}
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

    unique(arr){
      return arr.filter(function(el, index, ar) {
        return index == ar.indexOf(el);
      });
    },

    getProperty(obj, prop){
      if ( (typeof obj === 'object') && (typeof prop === 'string')){
        return prop.split('.').reduce((o, i) => o[i], obj);
      }
    },

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
          return bbn.fn.removeAccents(v1).toLowerCase().indexOf(bbn.fn.removeAccents(v2).toLowerCase()) !== -1;
        case "doesnotcontain":
        case "donotcontain":
          return bbn.fn.removeAccents(v1.toLowerCase()).indexOf(bbn.fn.removeAccents(v2.toLowerCase())) === -1;
        case "starts":
        case "start":
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
          return bbn.fn.removeAccents(v1).toLowerCase().indexOf(bbn.fn.removeAccents(v2).toLowerCase()) === 0;
        case "endswith":
        case "endsi":
        case "endi":
        case "iends":
        case "iend":
          return v1.lastIndexOf(v2) === v1.length - v2.length;
        case "like":
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
     * @todo starsi doesn't work
     * Returns the index of a row in the array of objects arr where the prop is equal to val.
     * Now prop can also be an object with several properties to search against. If there are more than 1 results returns only the first.
     *
     * ```javascript
     * var myArray = [{age:25,name:'adrian', surname:'cooper'}, {age:54,name:'jennifer', surname:'brown'}, {age:22,name:'thomas', surname:'smith'}];
     * bbn.fn.search(myArray, 'name', 'a', 'starts');
     * // (int) 0
     * bbn.fn.search(myArray, 'name', 'nn', 'contains');
     * // (int) 1
     * bbn.fn.search(myArray, 'age', '22', '===');
     * //  (int) 2
     * ```
     *
     * @param array arr The array of objects
     * @param string prop The property of the given val
     * @param mixed string | int The value to search for
     * @param mode The mode '===', 'contains', 'starts', 'startsi'
     * @returns int The index of the row
     */
    search(arr, prop, val, mode, startFrom){
      if ( !bbn.fn.isArray(arr) ){
        throw new Error("Error in bbn.fn.filter: The first argument must be an array");
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

    count(arr, prop, val, mode){
      return bbn.fn.filter(arr, prop, val, mode, false).length || 0;
    },

    sum(arr, prop, filter, mode){
      let r = 0;
      bbn.fn.each(bbn.fn.filter(arr, filter, mode), (a) => {
        if ( a[prop] ){
          r += (parseFloat(a[prop]) || 0);
        }
      });
      return r;
    },

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

    // Filters an array based on object properties
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
          bbn.fn.each(arr, (a) => {
            if ( filter(a) ){
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
     * Returns an object from an array of objects arr where the prop is equal to val.
     *
     * ```javascript
     * var myArray = [{age:25, name:'adrian', surname:'cooper'}, {age:54, name:'jennifer', surname:'brown'}, {age:22, name:'thomas', surname:'smith'}];
     * bbn.fn.get_row(myArray, 'name', 'thomas');
     * // (Object ){age: 22, name: "thomas", surname: "smith"}
     * ```
     *
     * @param array arr The array of objects
     * @param string prop The property to search for
     * @param mixed string | int val
     * @returns obj {*} | false
     */
    get_row(arr, prop, val){
      var idx = bbn.fn.search(arr, prop, val);
      if ( idx > -1 ){
        return arr[idx];
      }
      return false;
    },

    /**
     * Returns a given property from the row of an array of objects arr where the prop is equal to 'val'.
     *
     * ```javascript
     * var myArray = [{age:25, name:'adrian', surname:'cooper'}, {age:54, name:'jennifer', surname:'brown'}, {age:22, name:'thomas', surname:'smith'}];
     * bbn.fn.get_field(myArray, 'name','thomas','surname');
     * // (string) 'smith'
     * ```
     *
     * @param arr The array of objects
     * @param string prop The given property
     * @param mixed val The val of the given property
     * @param string prop2 The property to search for
     * @returns mixed {*}
     */
    get_field(arr, prop, val, prop2){
      var r;
      if ( r = bbn.fn.get_row(arr, prop, val) ){
        return r[prop2 ? prop2 : val] || false;
      }
      return false;
    },

    /**
     * Returns the number of properties of a given object.
     * (similar to {@link numProperties()}).
     *
     * ```javascript
     * var myObj = {age:25, name:'adrian', surname:'cooper'};
     * bbn.fn.countProperties(myObj);
     * // (int) 3
     * ```
     *
     * @param obj The object
     * @returns int | false
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
     * Returns the number of properties of a given object.
     * (similar to {@link countProperties()}).
     * @todo Duplicate function
     *
     * ```javascript
     * var myObj = {age:25, name:'adrian', surname:'cooper'};
     * bbn.fn.numProperties(myObj);
     * // (int) 3
     * ```
     *
     * @param obj
     * @returns int | false
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
     * Removes the private properties in the object.
     *
     * ```javascript
     *  var myObj = { age:39, name:'thomas', surname:'smith', children: { name:'john', _age:12 } };
     *  bbn.fn.removePrivateProp(myObj, true);
     *  //(object ){ age:39, name:'thomas', surname:'smith', children: { name:'john'} };
     * ```
     * @param object obj
     * @param boolean deep. If set to true it will remove also deep private properties. Default false
     * @returns {boolean}
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

    isSame(obj1, obj2){
      if ( obj1 === obj2 ){
        return true;
      }
      if ( (typeof(obj1) === 'object') && (typeof(obj2) === 'object') ){
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
     * Extends object's properties
     *
     * ```javascript
     * var myObject = { age:39, name:'thomas', surname:'smith', children: { name:'john'} };
     * bbn.fn.extend(myObject,{name: 'alex', job : 'teacher'});
     * return (object){age: 39, name: "alex", surname: "smith", children: { name:'john'}, job: "teacher"}
     * ```
     *
     * @param object The object to extend
     * @param object The new properties to give to the object
     * @return object
     * ```
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

    extendOut(){
      let r = {};
      for ( let i = 0; i < arguments.length; i++ ){
        if ( typeof(arguments[i]) !== 'object' ){
          throw new Error("Each argument for bbn.fn.extend must be an object, " + typeof(arguments[i]) + " given");
        }
        if ( Array.isArray(arguments[i]) ){
          throw new Error("You cannot extend arrays with bbn.fn.extend");
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
     * Extends bbn object with the given namespace.
     *
     * ```javascript
     * var myObject = { age:39, name:'thomas', surname:'smith', children: { name:'john'} };
     * bbn.fn.autoExtend('user', myObject);
     * // (void)
     * ```
     *
     * @param string namespace (properties of bbn object)
     * @param object obj The value of the new namespace
     * @return void
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
     * Returns a new array without the empty elements of the original
     * @param arr
     * @returns Array
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

    arrayFromProp(arr, prop){
      let r = [];
      bbn.fn.each(arr, (i, a) => {
        r.push(a[prop])
      });
      return r;
    },

    pickValue(arr){
      if ( Array.isArray(arr) && arr.length ){
        return arr[Math.floor(Math.random() * arr.length)]
      }
    },

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

    iterate(obj, fn){
      if ( (obj !== null) && (typeof obj === 'object') ){
        for ( var n in obj ){
          if ( !bbn.fn.isFunction(obj.hasOwnProperty) || obj.hasOwnProperty(n) ){
            if ( fn(obj[n], n) === false ){
              return obj;
            }
          }
        }
      }
      return obj;
    },

    clone(obj){
      if ( bbn.fn.isArray(obj) ){
        return obj.slice().map((a) => {
          return typeof(a) === 'object' ? bbn.fn.clone(a) : a;
        });
      }
      if ( bbn.fn.isObject(obj) ){
        return bbn.fn.extend(true, {}, obj);
      }
      throw new Error(bbn._("Error in bbn.fn.clone: one cannot clone a non object"));
    },

    map(arr, fn, deepProp){
      return arr.map((a, i) => {
        a = fn(a, i);
        if ( deepProp && a[deepProp] && bbn.fn.isArray(a[deepProp]) ){
          a[deepProp] = bbn.fn.map(a[deepProp], fn, deepProp);
        }
        return a;
      });
    },

    download(filename, text, type){
      if ( !type ){
        type = 'octet/stream';
      }
      else if ( type.indexOf('/') === -1 ){
        type = 'text/' + type;
      }
      let a = window.document.createElement('a');
      a.className = 'bbn-no';
      a.href = window.URL.createObjectURL(new Blob([text], {type: type}));
      a.download = filename;
      // Append anchor to body.
      document.body.appendChild(a);
      a.click();
      // Remove anchor from body
      document.body.removeChild(a);
    },

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
    }
  })

})(window.bbn);