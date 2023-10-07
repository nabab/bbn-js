import { iterate } from '../loop/iterate.js';
import { isArray } from '../type/isArray.js';
import { each } from '../loop/each.js';
import { isObject } from '../type/isObject.js';
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
var extend = function () {
    var originalArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        originalArgs[_i] = arguments[_i];
    }
    var deep = false;
    var args = [];
    for (var i = 0; i < originalArgs.length; i++) {
        if (originalArgs[i] === true) {
            deep = true;
        }
        else if (!originalArgs[i]) {
            continue;
        }
        else if (typeof originalArgs[i] !== "object") {
            throw new Error(bbn._("Error in extend: all arguments should be object, you have given ") + typeof originalArgs[i]);
        }
        else {
            args.push(originalArgs[i]);
        }
    }
    if (!args.length) {
        throw new Error("No argument given");
    }
    var out = args[0];
    for (var i = 1; i < args.length; i++) {
        iterate(args[i], function (a, key) {
            if (deep) {
                if (isArray(a)) {
                    out[key] = isArray(out[key]) ? out[key] : [];
                    each(a, function (b, i) {
                        if (b && typeof b === "object") {
                            var tmp = out[key][i];
                            if (isArray(b)) {
                                if (!isArray(tmp)) {
                                    tmp = [];
                                }
                            }
                            else if (!isObject(tmp)) {
                                tmp = {};
                            }
                            out[key][i] = extend(true, tmp, b);
                        }
                        else {
                            out[key][i] = b;
                        }
                    });
                }
                else if (isObject(a)) {
                    out[key] = extend(true, out[key] && typeof out[key] === "object"
                        ? out[key]
                        : Object.create(Object.getPrototypeOf(a)), a);
                }
                else {
                    out[key] = a;
                }
            }
            else if (out[key] !== a) {
                out[key] = a;
            }
        });
        if (args[i].__bbnNoData) {
            Object.defineProperty(out, "__bbnNoData", {
                value: true,
                enumerable: false,
                configurable: false,
                writable: false,
            });
        }
    }
    return out;
};
export { extend };
