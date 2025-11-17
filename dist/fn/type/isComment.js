/**
 * Returns true if the given argument is a dom comment;
 * @method   isComment
 * @example
 * ```javascript
 * bbn.fn.isComment(node.childNodes[0]);
 * //true
 * ```
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isComment(...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if (!(a instanceof Comment)) {
            return false;
        }
    }
    return true;
}
;
