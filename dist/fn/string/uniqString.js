import { isArray } from "../type/isArray.js";
import { each } from "../loop/each.js";
import { md5 } from "./md5.js";
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
const uniqString = function (...args) {
    var st = "";
    for (var i = 0; i < args.length; i++) {
        if (!args[i]) {
            st += "__bbn_empty__";
        }
        else if (typeof args[i] === "object") {
            if (isArray(args[i])) {
                st += JSON.stringify(args[i]);
            }
            else {
                // An object with the same properties, even in different order, should produce the same answer
                let tmp = {};
                let ks = Object.keys(args[i]).sort();
                each(ks, (k) => {
                    tmp[k] = args[i][k];
                });
                st += JSON.stringify(tmp);
            }
        }
        else if (typeof args[i] !== "string") {
            st += args[i].toString();
        }
        else {
            st += args[i];
        }
    }
    return md5(st);
};
export { uniqString };
