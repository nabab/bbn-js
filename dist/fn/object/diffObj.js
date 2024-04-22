import isDate from '../type/isDate.js';
import createObject from './createObject.js';
import isFunction from '../type/isFunction.js';
import isValue from '../type/isValue.js';
import isDom from '../type/isDom.js';
import numProperties from './numProperties.js';
var diffObjProcessed = [];
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
export default function diffObj(obj1, obj2, unchanged, notRoot) {
    if (unchanged === void 0) { unchanged = false; }
    if (notRoot === void 0) { notRoot = false; }
    if (!notRoot) {
        diffObjProcessed = [];
    }
    var VALUE_CREATED = 'created', VALUE_UPDATED = 'updated', VALUE_DELETED = 'deleted', VALUE_UNCHANGED = 'unchanged', _compareValues = function (value1, value2) {
        if (value1 === value2) {
            return VALUE_UNCHANGED;
        }
        if (isDate(value1) && isDate(value2) && value1.getTime() === value2.getTime()) {
            return VALUE_UNCHANGED;
        }
        if ('undefined' == typeof value1) {
            return VALUE_CREATED;
        }
        if ('undefined' == typeof value2) {
            return VALUE_DELETED;
        }
        return VALUE_UPDATED;
    };
    if (notRoot === undefined) {
        notRoot = false;
    }
    var diff = createObject();
    if (!isFunction(obj1) && !isFunction(obj2)) {
        if (isValue(obj1) || isValue(obj2)) {
            var res = _compareValues(obj1, obj2);
            if (unchanged || res !== VALUE_UNCHANGED) {
                var ret = createObject();
                Object.defineProperty(ret, 'type', {
                    value: res,
                    enumerable: false,
                });
                Object.defineProperty(ret, 'data', {
                    value: obj1 === undefined ? obj2 : obj1,
                    enumerable: false,
                });
                Object.defineProperty(ret, '_bbnDiffObjProof', {
                    value: true,
                    enumerable: false,
                });
                if (obj1 !== undefined) {
                    Object.defineProperty(ret, 'newData', {
                        value: obj2,
                        enumerable: false,
                    });
                }
                return ret;
            }
            return false;
        }
        if (isDom(obj1) || isDom(obj2)) {
            return false;
        }
        if (diffObjProcessed.includes(obj1) || diffObjProcessed.includes(obj2)) {
            //error(bbn._("Can't compare objects because they contain circular references"));
            return false;
        }
        diffObjProcessed.push(obj1, obj2);
        for (var key in obj1) {
            if (isFunction(obj1[key])) {
                continue;
            }
            var value2 = undefined;
            if ('undefined' != typeof obj2[key]) {
                value2 = obj2[key];
            }
            var res = diffObj(obj1[key], value2, unchanged, true);
            if (res) {
                diff[key] = res;
            }
        }
        for (var key in obj2) {
            if (isFunction(obj2[key]) || 'undefined' != typeof obj1[key]) {
                continue;
            }
            var res = diffObj(undefined, obj2[key], unchanged, true);
            if (res) {
                diff[key] = res;
            }
        }
    }
    return !notRoot || unchanged || numProperties(diff) ? diff : false;
}
;
