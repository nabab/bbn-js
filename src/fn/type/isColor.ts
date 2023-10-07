import { isString } from "./isString.js";

/**
 * Intended to check if the argument provided is a color.
 *
 * It is possible to pass as argument a string with hexadecimal value in rgb or the name of the color.
 *
 * @method   isColor
 * @global
 *
 * @example
 * ```javascript
 * bbn.fn.isColor("#FF0000")
 * //true
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isColor("rgb 255, 0, 0");
 * //true
 * ```
 *
 * @example
 * ```javascript
 * bbn.fn.isColor("red");
 * //true
 * ```
 * @memberof bbn.fn
 * @param    {String} st
 * @returns  {Boolean}
 */
const isColor = function (...args: any[]) {
  if (!args.length) return false;

  var reg = new RegExp(
    "^(#[a-f0-9]{6}|#[a-f0-9]{3}|rgb *( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *)|rgba *( *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *, *[0-9]{1,3}%? *)|black|green|silver|gray|olive|white|yellow|maroon|navy|red|blue|purple|teal|fuchsia|aqua)$",
    "i"
  );

  for (let st of args) {
    if (!isString(st)) {
      return false;
    }

    if (!reg.test(st)) {
      return false;
    }
  }

  return true;
};

export { isColor };
