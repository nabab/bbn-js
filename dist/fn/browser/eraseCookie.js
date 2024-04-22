/**
 * Erase the cookie corresponding to the given name;
 *
 * @method   eraseCookie
 * @global
 * @example
 * ``` javascript
 * // 'en'
 * bbn.fn.erase('lang');
 * ```
 * @memberof bbn.fn
 * @returns  {*}
 */
export default function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}
;
