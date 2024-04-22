import hash from '../string/hash.js';
import each from '../loop/each.js';
import analyzeFunction from '../misc/analyzeFunction.js';
/**
  * Checks whether the data contained in the given objects is identical.
  *
  * The properties starting with a non alphanumerical character and the
  * inherited ones are removed for the comparison, then the properties are
  * compared individually without the order being taken into account.
  *
  * @method   isSame
  * @global
  * @example
  * ```javascript
  * bbn.fn.isSame(
  *   {name: "Wonka", fname: "Willy"},
  *   {fname: "Willy", name: "Wonka"}
  * );
  * // true
  * ```
  * @example
  * ```javascript
  * // Doesn't take into account properties starting with non-alphanumeric characters
  * bbn.fn.isSame(
  *   {name: "Wonka", fname: "Willy", _bbn_timestamp: 1587269593987},
  *   {fname: "Willy", name: "Wonka"}
  * );
  * // true
  * ```
  * @example
  * ```javascript
  * bbn.fn.isSame(
  *   {name: "Wonka", fname: "Willy", real: false},
  *   {fname: "Willy", name: "Wonka"}
  * );
  * // false
  * ```
  * @memberof bbn.fn
  * @param    {Object} obj1
  * @param    {Object} obj2
  * @returns  {Boolean}
  */
export default function isSame(obj1, obj2, done) {
    if (!done) {
        done = [];
    }
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object') {
        var tmp1 = Object.keys(obj1).sort(), tmp2 = Object.keys(obj2).sort();
        // Case where the keys are different
        if (hash(tmp1) !== hash(tmp2)) {
            return false;
        }
        var ok_1 = true;
        if (obj1 && typeof obj1 === 'object') {
            if (done.includes(obj1)) {
                return ok_1;
            }
            done.push(obj1);
        }
        each(tmp1, function (a) {
            if (!isSame(obj1[a], obj2[a])) {
                ok_1 = false;
                return false;
            }
        });
        return ok_1;
    }
    else if (obj1 && obj2 && typeof obj1 === 'function' && typeof obj2 === 'function') {
        var tmp1 = analyzeFunction(obj1);
        var tmp2 = analyzeFunction(obj2);
        return tmp1.hash === tmp2.hash;
    }
    return false;
}
;
