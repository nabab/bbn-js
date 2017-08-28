/**
 * Created by BBN on 10/02/2017.
 */
;(function($, bbn){
  "use strict";

  $.extend(bbn.fn, {

    /**     OBJECTS AND ARRAYS    */

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
    order: function(arr, prop, dir){
      var r = typeof(arr.toJSON) === 'function' ? arr.toJSON() : arr;
      dir = typeof(dir) === 'string' ? ( dir.toLowerCase() === 'desc' ? 'desc' : 'asc' ) : 'asc';
      return r.sort(function(a, b){
        var va = a[prop],
            vb = b[prop],
            ta = (typeof (a[prop])).toLowerCase(),
            tb = (typeof (b[prop])).toLowerCase();
        if ( ta === tb ){
          switch (ta ){
            case 'string':
              va = bbn.fn.removeAccents(a[prop]).toLowerCase();
              vb = bbn.fn.removeAccents(b[prop]).toLowerCase();
              break;
            case 'boolean':
              va = a[prop] ? 1 : 0;
              vb = b[prop] ? 1 : 0;
              break;
            case 'object':
              if ( a[prop].getTime ){
                va = a[prop].getTime();
                vb = b[prop].getTime();
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
      });
    },


    move: function(arr, fromIndex, toIndex){
      var element = arr[fromIndex];
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
    },

    iterate: function(obj, fn){
      for ( var n in obj ){
        if ( (n.substr(0, 1) !== '_') && obj.hasOwnProperty(n) ){
          fn(n, obj[n]);
        }
      }
    },

    compare: function(v1, v2, mode){
      if ( v1 === undefined ){
        v1 = '';
      }
      if ( v2 === undefined ){
        v2 = '';
      }
      switch ( mode ){
        case "===":
        case "equal":
        case "is":
          return v1 === v2;
        case "!==":
        case "notequal":
        case "isnotequal":
          return v1 !== v2;
        case "!=":
        case "different":
          return v1 != v2;
        case "contains":
        case "contain":
          return v1.toString().indexOf(v2.toString()) !== -1;
        case "starts":
        case "start":
          return v1.toString().indexOf(v2.toString()) === 0;
        case "startsi":
        case "starti":
          if ( v1 && v2 ){
            return bbn.fn.removeAccents(v1.toString()).toLowerCase().indexOf(
                bbn.fn.removeAccents(v2.toString()).toLowerCase()
              ) === 0;
          }
        case "like":
          return bbn.fn.removeAccents(v1.toString()).toLowerCase() === bbn.fn.removeAccents(v2.toString()).toLowerCase();
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
    search: function(arr, prop, val, mode, startFrom){
      if ( arr ){
        var filter = {},
            found,
            isObj = typeof(prop) === 'object',
            r = typeof(arr.toJSON) === 'function' ? arr.toJSON() : arr;
        if ( Array.isArray(r) && r.length && (r[0]!== undefined) ){
          if ( isObj ){
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
          else if ( (startFrom < 0) || (startFrom >= r.length - 1) ){
            return -1;
          }
          for ( let i = startFrom; i < r.length; i++ ){
            found = 1;
            for ( var n in filter ){
              if ( !bbn.fn.compare(r[i][n], filter[n], mode) ){
                found = false;
                break;
              }
            }
            if ( found ){
              return i;
            }
          }
        }
      }
      return -1;
    },

    count: function(arr, prop, val, mode){
      let num = 0,
          start = 0,
          tmp;
      if ( arr ){
        var filter = {},
            isObj  = typeof(prop) === 'object',
            r      = typeof(arr.toJSON) === 'function' ? arr.toJSON() : arr;
        if ( Array.isArray(r) && r.length && (r[0] !== undefined) ){
          if ( isObj ){
            mode = val;
            filter = prop;
          }
          else if ( typeof(prop) === 'string' ){
            filter[prop] = val;
          }
          else{
            throw new Error("Search function error: The prop argument should be a string or an object");
          }
          while ( (tmp = bbn.fn.search(r, filter, mode, start)) > -1 ){
            start = tmp + 1;
            num++;
          }
        }
      }
      return num;
    },


    // Filters an object
    filterObj: function(arr, prop, val, mode, deep){
      var found,
          filter = {},
          res = [],
          isObj = typeof(prop) === 'object',
          r = typeof (arr.toJSON) === 'function' ? arr.toJSON() : arr;
      if ( Array.isArray(r) && r.length && (r[0]!== undefined) ){
        if ( isObj ){
          mode = val;
          filter = prop;
        }
        else if ( typeof(prop) === 'string'){
          filter[prop] = val;
        }
        else{
          throw new Error("Search function error: The prop argument should be a string or an object");
        }
        for ( var i = 0; i < r.length; i++ ){
          found = 1;
          for ( var n in filter ){
            if ( !bbn.fn.compare(r[i][n], filter[n], mode) ){
              found = false;
              break;
            }
          }
          if ( found ){
            res.push(r[i]);
          }
        }
      }
      return res;

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
    get_row: function(arr, prop, val){
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
    get_field: function(arr, prop, val, prop2){
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
    countProperties: function(obj){
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
    numProperties: function(obj){
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
    removePrivateProp: function(obj, deep){
      var r = false;
      if ( typeof(obj) === "object" ){
        r = {};
        for ( var n in obj ){
          if ( n.indexOf('_') !== 0 ){
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
     * Extends object's properties
     *
     * ```javascript
     * var myObject = { age:39, name:'thomas', surname:'smith', children: { name:'john'} };
     * bbn.fn.extend(myObject,{job : 'teacher'});
     * // (object){age: 39, name: "thomas", surname: "smith", children: { name:'john'}, job: "teacher"}
     * ```
     *
     * @param object The object to extend
     * @param object The new properties to give to the object
     * @return object
     * ```
     */
    extend: function(){
      var r = arguments[0];
      if ( typeof(r) !== 'object' ){
        throw new Error("Each argument for bbn.fn.extend must be an object");
        return;
      }
      if ( Array.isArray(r) ){
        throw new Error("You cannot extend arrays with bbn.fn.extend");
        return;
      }
      for ( var i = 1; i < arguments.length; i++ ){
        if ( typeof(arguments[i]) !== 'object' ){
          throw new Error("Each argument for bbn.fn.extend must be an object, " + typeof(arguments[i]) + " given");
          return;
        }
        if ( Array.isArray(arguments[i]) ){
          throw new Error("You cannot extend arrays with bbn.fn.extend");
          return;
        }
        for ( var n in arguments[i] ){
          if ( (typeof(r[n]) === 'object') &&
            (typeof(arguments[i][n]) === 'object') &&
            !$.isFunction(r[n]) &&
            !Array.isArray(r[n]) &&
            !Array.isArray(arguments[i][n])
          ){
            bbn.fn.extend(r[n], arguments[i][n]);
          }
          else if ( r[n] === undefined){
            r[n] = arguments[i][n];
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
    autoExtend: function(namespace, obj){
      if ( !bbn[namespace] ){
        bbn[namespace] = {};
        $.extend(bbn[namespace], obj);
      }
      else if ( bbn.env.isInit ){
        $.extend(bbn[namespace], obj);
      }
    },

    /**
     * Returns true if the argument is an object with length property and numeric value in it
     *
     * @param obj
     * @returns {boolean}
     */
    isArray: function(obj){
      if ( (typeof(obj) !== 'object') || (obj.length === undefined) ){
        return false;
      }
      return (typeof(obj) !== undefined) && (obj.length !== undefined);
    },

    /**
     * Returns a new array without the empty elements of the original
     * @param arr
     * @returns Array
     */
    removeEmpty: function(arr){
      var tmp = [];
      if ( bbn.fn.isArray(arr) ){
        for ( var i = 0; i < arr.length; i++ ){
          if ( arr[i] ){
            tmp.push(arr[i]);
          }
        }
      }
      return tmp;
    }

  })

})(jQuery, bbn);