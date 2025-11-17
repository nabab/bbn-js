/**
 * Returns true if the given argument is an object.
 * @method   isObject
 * @global
 * @example
 * ```javascript
 * bbn.fn.isObject({name: 'cami', age: 7});
 * //true
 * ```
 * @example
 * ```javascript
 * bbn.fn.isObject([{name: 'cami', age: 7}]);
 * //false
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isObject(...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if (({}).toString.apply(a) !== "[object Object]") {
            return false;
        }
    }
    return true;
}
;
