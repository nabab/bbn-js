/**
 * Returns true if the given argumen is a VueJS object.
 *
 * @method   isVue
 * @global
 * @example
 * ```javascript
 * let myObj =  new Vue({});
 * bbn.fn.isVue(myObj);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
declare const isVue: (...args: any[]) => boolean;
export { isVue };
