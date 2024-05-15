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
    var st = "__bbn__";
    for (var i in arguments) {
        if (arguments[i]) {
            var value = arguments[i];
            if (value === null) {
                st += "__BBN_NULL__";
            }
            else if (value === undefined) {
                st += "__BBN_UNDEFINED__";
            }
            else if (typeof value === "string") {
                st += "__BBN_STRING__" + value;
            }
            else if (typeof value === "number") {
                st += "__BBN_NUMBER__" + value;
            }
            else if (typeof value === "boolean") {
                st += "__BBN_BOOLEAN__" + value;
            }
            else if (typeof value === "function") {
                st += "__BBN_FUNCTION__" + value.toString();
            }
            else if (value instanceof Date) {
                st += "__BBN_DATE__" + value.getTime();
            }
            else if (value instanceof RegExp) {
                st += "__BBN_REGEXP__" + value.toString();
            }
            else if (Array.isArray(value)) {
                st += "__BBN_ARRAY__" + JSON.stringify(value, circularReplacer());
            } /*else if (value instanceof Error) {
              st += "__BBN_ERROR__" + value.message;
            } else if (value instanceof Map) {
              st += "__BBN_MAP__" + JSON.stringify([...value]);
            } else if (value instanceof Set) {
              st += "__BBN_SET__" + JSON.stringify([...value]);
            } else if (value instanceof WeakMap) {
              st += "__BBN_WEAKMAP__" + JSON.stringify([...value]);
            } else if (value instanceof WeakSet) {
              st += "__BBN_WEAKSET__" + JSON.stringify([...value]);
            } else if (value instanceof ArrayBuffer) {
              st += "__BBN_ARRAYBUFFER__" + value.byteLength;
            } else if (value instanceof DataView) {
              st += "__BBN_DATAVIEW__" + value.byteLength;
            } else if (value instanceof Int8Array) {
              st += "__BBN_INT8ARRAY__" + value.byteLength;
            } else if (value instanceof Uint8Array) {
              st += "__BBN_UINT8ARRAY__" + value.byteLength;
            } else if (value instanceof Uint8ClampedArray) {
              st += "__BBN_UINT8CLAMPEDARRAY__" + value.byteLength;
            } else if (value instanceof Int16Array) {
              st += "__BBN_INT16ARRAY__"*/
            else if (isDom(value)) {
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
            else if (typeof value === "object") {
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
}
;
