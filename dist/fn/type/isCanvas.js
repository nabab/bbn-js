/**
 * Returns true if the given argumen is a Canvas.
 *
 * @method   isCanvas
 * @global
 * @example
 * ```javascript
 * let myCanvas = document.createElement('canvas');
 * bbn.fn.isCanvas(myCanvas);
 * //true
 * ```
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isCanvas(...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if (!(a instanceof HTMLCanvasElement)) {
            return false;
        }
    }
    return true;
}
;
