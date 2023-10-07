import { isArray } from '../type/isArray.js';
import { each } from '../loop/each.js';
import { md5 } from './md5.js';
/**
 * Create a unique string in md5 format.
 *
 * Converts and return all the arguments inserted in a unique string in md5 format.
 *
 * @method   uniqString
 * @global
 *
 * @example
 * ```javascript
 * //"6cb083da4d4987af9b4fa4ad8ca23bb1"
 * bbn.fn.uniqString('test',['test'],{id:1, test:2},4);
 * ```
 * @memberof bbn.fn
 * @returns  {String} The unique string in md5 format
 */
var uniqString = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var st = "";
    var _loop_1 = function () {
        if (!args[i]) {
            st += "__bbn_empty__";
        }
        else if (typeof args[i] === "object") {
            if (isArray(args[i])) {
                st += JSON.stringify(args[i]);
            }
            else {
                // An object with the same properties, even in different order, should produce the same answer
                var tmp_1 = {};
                var ks = Object.keys(args[i]).sort();
                each(ks, function (k) {
                    tmp_1[k] = args[i][k];
                });
                st += JSON.stringify(tmp_1);
            }
        }
        else if (typeof args[i] !== "string") {
            st += args[i].toString();
        }
        else {
            st += args[i];
        }
    };
    for (var i = 0; i < args.length; i++) {
        _loop_1();
    }
    return md5(st);
};
export { uniqString };
