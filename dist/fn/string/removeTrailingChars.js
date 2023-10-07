import { substr } from './substr';
/**
 * @method   removeTrailingChars
 * @todo     Add method description for removeTrailingChars
 * @global
 * @memberof bbn.fn
 * @param    {String} st
 * @param    {String} char
 * @returns  {*}
 */
const removeTrailingChars = function (st, char) {
    if (!char) {
        char = " ";
    }
    if (char.length) {
        while (substr(st, -char.length) === char) {
            st = substr(st, 0, st.length - char.length);
        }
        while (substr(st, 0, char.length) === char) {
            st = substr(st, char.length);
        }
    }
    return st;
};
export { removeTrailingChars };
