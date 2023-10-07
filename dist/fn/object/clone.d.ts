/**
 * Creates and returns a perfect clone - but different - from the given object.
 *
 * @method   clone
 * @global
 * @example
 * ```javascript
 * let obj = {name: "Thomas"};
 * let objCopy = bbn.fn.clone(obj);
 * obj.name = "Julie";
 * // obj:     {name: "Julie"}
 * // objCopy: {name: "Thomas"}
 * ```
 * @memberof bbn.fn
 * @param    {Object} obj The source object
 * @returns  {Object} A new object
 */
declare const clone: (obj: any) => any;
export { clone };
