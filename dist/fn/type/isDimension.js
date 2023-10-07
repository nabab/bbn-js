import { isValidDimension } from './isValidDimension';
/**
 * Returns true if the given value is a valid CSS dimension string or a number, false otherwise.
 *
 * @method   isDimension
 * @global
 * @memberof bbn.fn
 * @param    {String} st
 * @returns
 */
const isDimension = function (...args) {
    if (!args.length)
        return false;
    for (let st of args) {
        if (typeof st !== "number" || st < 0) {
            return false;
        }
        if (!isValidDimension(st)) {
            return false;
        }
    }
    return true;
};
export { isDimension };
