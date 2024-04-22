/**
  * Returns the number of properties contained in the object.
  *
  * Only takes into account the own properties - not the inherited ones - and the non _private_ ones.
  *
  * @method   numProperties
  * @global
  * @example
  * ```javascript
  * bbn.fn.numProperties({author: "Chuck Palahniuk", "title": "Fight club"});
  * // 2
  * ```
  * @example
  * ```javascript
  * bbn.fn.numProperties({username: "chuck", "password": "soap", _bbn_timestamp: 1587323193751});
  * // 2
  * @example
  * ```javascript
  * let d = new Date();
  * bbn.fn.numProperties(d);
  * // 0
  * d.myProp = 1;
  * bbn.fn.numProperties(d);
  * // 1
  * ```
  * @memberof bbn.fn
  * @param    {Object} obj The object to analyze
  * @returns  {Number} The number of properties
  */
export default function numProperties(obj: object): number;
