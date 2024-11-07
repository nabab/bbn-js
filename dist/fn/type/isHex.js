/**
 * @method   isHex
 * @todo     Add method description for isFunction
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isHex(num) {
    return Boolean(num.match(/^(0x)?[0-9a-f]+$/i));
}
;
