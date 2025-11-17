/**
  * Returns an object with the original objects' properties starting with an alphanumeric character.
  *
  * It is presumed that external libraries, bbn variables use prefixes such as _ or $ for
  * naming private properties; this returns a new object purged from these properties.
  *
  * @method   removePrivateProp
  * @global
  * @example
  * ```javascript
  * bbn.fn.removePrivateProp({
  *   _bbn_timestamp: 1587269593987,
  *   name: "Wonka",
  *   fname: "Willy"
  * });
  * // {name: "Wonka", fname: "Willy"}
  * ```
  * @memberof bbn.fn
  * @param    {Object}  obj  The original object
  * @param    {Boolean} deep If true the function will be reapplied on object properties
  * @returns  {Object}  A new object without only the _public_ properties.
  */
export default function removePrivateProp(obj: object, deep?: boolean): any;
