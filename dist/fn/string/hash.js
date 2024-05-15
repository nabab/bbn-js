import isDom from '../type/isDom.js';
import isCp from '../type/isCp.js';
import circularReplacer from '../object/circularReplacer.js';
import simpleHash from './simpleHash.js';
/**
 * Makes a hash out of anything
 * @param {Object|Array} obj
 * @returns {String}
 */
export default function hash(obj) {
    //log(obj);
    var st = "";
    for (var i in arguments) {
        if (arguments[i]) {
            var value = arguments[i];
            if (![undefined, Object, Array, null].includes(value.constructor)) {
                if (isDom(value)) {
                    if (value.bbnId) {
                        value =
                            "__BBN_DOM__" + value.tagName + "/" + value.bbnId + value.bbnHash;
                    }
                    else {
                        value = "__BBN_DOM__" + value.tagName + "/" + value.className;
                    }
                }
                else if (isCp(value)) {
                    value = "__BBN_CP__" + value.$options.name + "/" + value.$cid;
                }
                else {
                    value = value.constructor.toString();
                }
            }
            try {
                st += JSON.stringify(value, circularReplacer());
            }
            catch (e) {
                st += ".";
            }
        }
    }
    return simpleHash(st);
}
;
