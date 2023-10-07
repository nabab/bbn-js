import { clone } from './clone' ;
import { each } from '../loop/each' ;
import { isString } from '../type/isString' ;
import { shorten } from '../string/shorten' ;

/**
 * Shortens all the strings contained in the object properties or element in a array.
 *
 * Modifies directly the given object by cuttin all its too long strings, and adding ellipsis (...) in this case.
 *
 * @method   shortenObj
 * @global
 * @example
 * ```javascript
 * bbn.fn.shortenObj({
 *   title: "Once upon a time in the west",
 *   synopsis: "There's a single piece of land around Flagstone with water on it, and rail baron Morton (Gabriele Ferzetti) aims to have it, knowing the new railroad will have to stop there. He sends his henchman Frank (Henry Fonda) to scare the land's owner, McBain (Frank Wolff), but Frank kills him instead and pins it on a known bandit, Cheyenne (Jason Robards). Meanwhile, a mysterious gunslinger with a score to settle (Charles Bronson) and McBain's new wife, Jill (Claudia Cardinale), arrive in town."
 * }, 50)
 * // {
 * //   "title": "Once upon a time in the west",
 * //   "synopsis": "There's a single piece of land around Flagstone wi..."
 * // }
 * ```
 * @memberof bbn.fn
 * @param    {(Object|Array)} obj
 * @param    {Number}         [max=100]
 * @returns  {(Object|Array)} The same object, modified
 */
const shortenObj = function (obj, max = 100): object {
  let o = clone(obj);
  each(o, (a, n) => {
    if (isString(a) && a.length > max) {
      o[n] = shorten(a, max);
    } else if (a && typeof a === "object") {
      o[n] = shortenObj(a);
    }
  });
  return o;
};

export { shortenObj };
