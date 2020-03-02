/**
 * Created by BBN on 10/02/2017.
 */
// jshint esversion: 6
((bbn) => {
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
     * @method order
     * @param {Array} arr. An array of objects
     * @param {String} prop. The property to order
     * @param {String} dir 'asc' or 'desc'
     * @return {Array}
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
     * Compares the given objects and returns -1 if the value of the given property is different, 0 if the value of the property is the same.
     * ```javascript
     * bbn.fn.compareValues({name:'cami', age:6}, {name:'nina', age:6}, 'age')
     * // 0
     * bbn.fn.compareValues({name:'cami', age:6}, {name:'nina', age:6}, 'name')
     * // -1
     * ```
     * @method compareValues
     * @param {Object} a 
     * @param {Object} b 
     * @param {String} prop 
     * @param {String} dir 
     * @return {Number}
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
     * ```javascript
     * let arr = ["a", "b", "a", "b", "a", "b", "c", "c", "d"];
     * bbn.fn.unique(arr);
     * // ["a", "b", "c", "d"]
     * ```
     * @method unique
     * @param {Array} arr 
     * @return {Array}
     */
    unique(arr){
      return arr.filter(function(el, index, ar) {
        return index == ar.indexOf(el);
      });
    },
    /**
     * Returns the value of the given property in the given object.
     * ``` javascript
     * let obj = {name: 'Cami', age: 7}
     * bbn.fn.getProperty(obj, 'name')
     * // 'Cami'
     * ```
     * @method getProperty
     * @param {Object} obj 
     * @param {String} prop 
     */
    getProperty(obj, prop){
      if ( (typeof obj === 'object') && (typeof prop === 'string')){
        return prop.split('.').reduce((o, i) => o[i], obj);
      }
    },
    /**
     * Returns an array containing the given array items ordered by the given properties.
     * @method multiorder
     * @param {Array} arr 
     * @param {Array} orders 
     * @return {Array}
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
     * @method orderLike
     * @param {Array} to_order 
     * @param {Array} based_on 
     * @param {String} prop 
     * @param {Boolean} exclude 
     * @return {Array} 
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
     * Moves the array item corresponding to the idx of the second argument to the idx given in the third item.
     * ``` javascript
     * let arr = ['a', 'b', 'c']
     * bbn.fn.move(arr, 0, 1)
     * // ["b", "a", "c"]
     * ```
     * @method move
     * @param {Array} arr 
     * @param {Number} fromIndex 
     * @param {Number} toIndex 
     * @return {Array}
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
     * Compares the given values using the filter given in the third argument.
     * ```javascript 
     * bbn.fn.compare('5e543256c480ac577d30f76f9120eb74','7834739a24d04857a35a03431f27ab32');
     * // false
     * ```
     * @method compare
     * @param {String|Number} v1 
     * @param {String|Number} v2 
     * @param {String} mode 
     * @return {Boolean}
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
     * @todo mode doesn't work
     * Returns the index of a row in the array of objects arr where the prop is equal to val.
     * Prop can also be an object with several properties to search against. If there are more than 1 results returns only the first.
     * 
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
     * @method search
     *
     * @param {Array} arr The array of objects
     * @param {String} prop The property of the given val
     * @param {String|Number} val The value to search for
     * @param {String} mode The mode '===', 'contains', 'starts', 'startsi'
     * @return {Number} The index of the row
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
     * Returns the count of array items containing the given property with given val.
     * ``` javascript
     * var myArray = [{age:25,name:'adrian', surname:'cooper'}, {age:54,name:'jennifer', surname:'brown'}, {age:22,name:'thomas', surname:'smith'}];
     * bbn.fn.count(myArray, 'name', 'adrian')
     * // 1
     * ```
     * @method count
     * @param {Array} arr 
     * @param {String} prop 
     * @param {String|Number} val 
     * @param {String} mode 
     * @return {Number}
     */
    count(arr, prop, val, mode){
      return bbn.fn.filter(arr, prop, val, mode, false).length || 0;
    },
    /**
     * Returns the sum of the given prop in the array's items basing on the given filter. If the filter is an object the mode of filter can be specified as fourth argument.
     * ``` javascript
     * let myArray = [{age:25,name:'adrian', surname:'cooper'}, {age:54,name:'jennifer', surname:'brown'}, {age:22,name:'thomas', surname:'smith'}];
     * bbn.fn.sum(myArray, 'age', (a) => { return a.age > 22})
     * // 79
     * bbn.fn.sum(myArray, 'age', {age: 54})
     * // 54
     * bbn.fn.sum(myArray, 'age', {age: 5}, '>')
     * // 101
     * ```
     * @param {Array} arr 
     * @param {String} prop 
     * @param {Object|Function} filter 
     * @param {String} mode 
     * @return {Number}
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
     * Compares the conditions defined in the filter with the given data object.
     * ```javascript
     * let filter = {conditions:[{field:'age', operator: '<=', value: 8}],logic: 'AND' },
     * data = {age:5,name:'adrian', surname:'cooper'}
     * bbn.fn.compareConditions(data, filter)
     * // true
     * ```
     * @method compareConditions
     * @param {Object} data 
     * @param {Object} filter 
     * @return {Boolean}
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
     * ``` javascript
     * let filter = {url: "style"};
     * // {conditions:[{field:"url",operator:"=",value:"style"}],logic:"AND"}
     * ```
     * @method filterToCondition
     * @param {Object} filter 
     * @param {String} mode 
     * @return {Object}
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
     * Filters an array based on object properties.
     * ``` javascript
     * let myArray = [{url: 'home', loading: false}, {url: 'style', loading: true},{url: 'about', loading: false},{url: 'contact', loading: false}]
     * bbn.fn.filter(arr, {loading: true})
     * // [{url: 'style', loading: true}]
     * bbn.fn.filter(arr, (a)=>{return a.url === 'style'})
     * // [{url: 'style', loading: true}]
     * ```
     * @param {Array} arr 
     * @param {String|Object|Function} prop 
     * @param {Mixed} val 
     * @param {String} mode 
     * @return {Array}
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
     * Returns the object from the array where the value of the given property is the same of the given value.
     *
     * ```javascript
     * var myArray = [{age:25, name:'adrian', surname:'cooper'}, {age:54, name:'jennifer', surname:'brown'}, {age:22, name:'thomas', surname:'smith'}];
     * bbn.fn.get_row(myArray, 'name', 'thomas');
     * // (Object ){age: 22, name: "thomas", surname: "smith"}
     * ```
     * @method get_row
     *
     * @param {Array} arr The array of objects
     * @param {String} prop The property to search for
     * @param {String|Number} val The value of the property to search
     * @return {Object|Boolean}
     */
    get_row(arr, prop, val){
      var idx = bbn.fn.search(arr, prop, val);
      if ( idx > -1 ){
        return arr[idx];
      }
      return false;
    },

    /**
     * Returns the value of the first object matching the given filter.
     * ```javascript
     * var myArray = [{age:25, name:'adrian', surname:'cooper'}, {age:54, name:'jennifer', surname:'brown'}, {age:22, name:'thomas', surname:'smith'}];
     * bbn.fn.get_field(myArray, 'name','thomas','surname');
     * // (string) 'smith'
     * ```
     * 
     * @method get_field
     * 
     *
     * @param {Array} The array of objects
     * @param {String|Function} prop The given property
     * @param {Number|String} val The known value
     * @param {String} prop2 The property to search for
     * @return {Mixed} 
     */
    get_field(arr, prop, val, prop2){
      var r;
      if ( r = bbn.fn.get_row(arr, prop, val) ){
        return r[prop2 ? prop2 : val] || false;
      }
      return false;
    },

    /**
     * Returns the number of properties contained in the given object.
     * (similar to {@link numProperties()}).
     *
     * ```javascript
     * var myObj = {age:25, name:'adrian', surname:'cooper'};
     * bbn.fn.countProperties(myObj);
     * // (int) 3
     * ```
     * @method countProperties
     * @param {Object} obj 
     * @return {Boolean|Number}
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
     * @method numProperties
     * @param {Object}
     * @return {Number|Boolean}
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
     * 
     * ```javascript
     *  var myObj = { age:39, name:'thomas', surname:'smith', children: { name:'john', _age:12 } };
     *  bbn.fn.removePrivateProp(myObj, true);
     *  //(object ){ age:39, name:'thomas', surname:'smith', children: { name:'john'} };
     * ```
     * @method removePrivateProp
     * @param {Object} obj
     * @param {Boolean} deep If set to true it will remove also deep private properties. Default false
     * @return {boolean}
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
     * Returns true if the two objects given are the same.
     * @method isSame
     * @param {Object} obj1 
     * @param {Object} obj2 
     * @return {Boolean}
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
     * Merges the contents of two or more objects together into the first object. It overwrites the property if defined in the two objects given.
     * 
     * ```javascript
     * var myObject = { age:39, name:'thomas', surname:'smith', children: { name:'john'} };
     * bbn.fn.extend(myObject,{name: 'alex', job : 'teacher'});
     * return (object){age: 39, name: "alex", surname: "smith", children: { name:'john'}, job: "teacher"}
     * ```
     * @method extend
     *
     * 
     * @return {Object} 
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
     * Merges the contents of two or more objects together into the first object. Doesn't overwrite the property if defined in the two objects given.
     * 
     * ```javascript
     * var myObject = { age:39, name:'thomas', surname:'smith', children: { name:'john'} };
     * bbn.fn.extendOut(myObject,{name: 'alex', job : 'teacher'});
     * return (object){age: 39, name: "thomas", surname: "smith", children: { name:'john'}, job: "teacher"}
     * ```
     * @method extend
     * @return {Object} 
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
     * Extends bbn object with the given namespace.
     *
     * 
     * @method autoExtend
     * @param {String} namespace (properties of bbn object)
     * @param {Object} obj The value of the new namespace
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
     * Removes empty index from the given array.
     * @method removeEmpty
     * @param {Array} arr
     * @return Array
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
     * Given an array of objects returns an array taking the given property from the original array items. 
     * ``` javascript
     * let myArray = [{age:25,name:'adrian', surname:'cooper'}, {age:54,name:'jennifer', surname:'brown'}, {age:22,name:'thomas', surname:'smith'}];
     * bbn.fn.arrayFromProp(myArray, 'name');
     * // ["adrian", "jennifer", "thomas"]
     * ```
     * @method arrayFromProp
     * @param {Array} arr The arrasy of objects
     * @param {String} prop The property to create the final array
     * @return {Array}
     * 
     */
    arrayFromProp(arr, prop){
      let r = [];
      bbn.fn.each(arr, (a, i) => {
        r.push(a[prop])
      });
      return r;
    },
    /**
     * Return a random item from the given array.
     * @method pickValue
     * @param {Array} arr 
     * @return {Mixed}
     */
    pickValue(arr){
      if ( Array.isArray(arr) && arr.length ){
        return arr[Math.floor(Math.random() * arr.length)]
      }
    },
    /**
     * Returns an object containing the differences between the given objects.
     * ``` javascript
     * let obj = {name: "cami", age: 7}, 
     *     obj1 = {name: "cami", age: 8, isDog: true};
     * bbn.fn.diffObj(obj, obj1);
     * // {
     *    age: {type:"updated",data:7,newData:9},
     *    isDog: {type:"created",data:true}
     * }
     * bbn.fn.diffObj(obj, obj1, 'unchanged');
     * //{
     *    name:{type:"unchanged",data:"cami",newData:"cami"},
     *    age:{type:"updated",data:7,newData:9},
     *    isDog:{type:"created",data:true}
     * }
     * ```
     * @method diffObj
     * @param {Object} obj1 
     * @param {Object} obj2 
     * @param {String} unchanged Allowed values  'created', 'updated', 'deleted', 'unchanged'
     * @param {Boolean} notRoot 
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
     * @method fori
     * @param {Function} fn 
     * @param {Array} arr 
     * @param {Number} max 
     * @param {Number} min 
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
     * @method forir
     * @param {Function} fn 
     * @param {Array} arr 
     * @param {Number} max 
     * @param {Number} min 
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
     * Iterates over an array executing a function for each matched element.
     * ```javascript
     * let arr = ['a', 'b', 'c']
     * bbn.fn.each(arr, (value, index) => { 
     *  alert(value);
     * })
     * ```
     * @method each
     * @param {Array} arr 
     * @param {Function} fn 
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
     * Iterates over an object properties executing a function for each matched element.
     * ``` javascritp
     * let obj = {name: "cami", age: 7, isDog: true}
     * bbn.fn.iterate(obj, (value, index) => {
     *  bbn.fn.log(value)
     * })
     * // 'cami', 7, true
     * 
     * ```
     * @method iterate
     * @param {Object|Number} obj 
     * @param {Function} fn 
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
     * Clone the given object.
     * @method clone
     * @param {mixed} obj 
     * @return {mixed}
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
     * ```javascript
     * let myArray = [1,2,3,4];
     * let newArray = bbn.fn.map(myArray, (a) => { 
     *  a ++ ; 
     *  return a; 
     * } );
     * ```
     * @method map
     * @param {Array} arr 
     * @param {Function} fn 
     * @param {Boolean} deepProp 
     * @return {Array}
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
     * ```javascript
     * let myArray = [['a', 'b', 'c'],['d', 'e', 'f'],['g', 'h', 'i']];
     * bbn.fn.toCSV(myArray);
     * // 
     *   ""a","b","c";
     *   "d","e","f";
     *   "g","h","i""
     * ```
     * @method toCSV
     * @param {Array} arr The array
     * @param {String} [','] valSep The separator between values in the row
     * @param {String} [';'] rowSep The separator between rows
     * @param {String} ['"'] valEsc The value to escape 
     * @return {String} 
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
          o[n] = this.shortenObj(a);
        }
      });
      return o;
    }
  })

})(window.bbn);