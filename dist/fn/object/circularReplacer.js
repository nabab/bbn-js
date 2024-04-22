import isDom from '../type/isDom.js';
import isCp from '../type/isCp.js';
/**
 * Returns a function to give to JSON.stringify in order to avoid circular values.
 *
 * @returns Function
 */
export default function circularReplacer() {
    var visited = new WeakSet();
    return function (key, value) {
        if (typeof value === "object" && value !== null) {
            if (visited.has(value)) {
                return;
            }
            visited.add(value);
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
        }
        return value;
    };
}
;
