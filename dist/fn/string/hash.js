import { isDom } from '../type/isDom.js';
import { isCp } from '../type/isCp.js';
import { circularReplacer } from '../object/circularReplacer.js';
import { simpleHash } from './simpleHash.js';
/**
 * Makes a hash out of anything
 * @param {Object|Array} obj
 * @returns {String}
 */
var hash = function (obj) {
    //log(obj);
    var st = "__bbn__";
    for (var i in arguments) {
        if (arguments[i]) {
            var value = arguments[i];
            if (isDom(value)) {
                if (value.bbnId) {
                    st +=
                        "__BBN_DOM__" + value.tagName + "/" + value.bbnId + value.bbnHash;
                }
                else {
                    st += "__BBN_DOM__" + value.tagName + "/" + value.className;
                }
            }
            else if (isCp(value)) {
                st += "__BBN_CP__" + value.$options.name + "/" + value.$cid;
            }
            else {
                try {
                    st += JSON.stringify(arguments[i], circularReplacer());
                }
                catch (e) {
                    st += ".";
                }
            }
        }
    }
    return simpleHash(st);
};
export { hash };
