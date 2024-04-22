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
export default function isCanvas() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return false;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var a = args_1[_a];
        if (!(a instanceof HTMLCanvasElement)) {
            return false;
        }
    }
    return true;
}
;
