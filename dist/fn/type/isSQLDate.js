/**
 * @ignore
 * @method   isSQLDate
 * @todo     Add method description for isSQLDate
 * @global
 * @memberof bbn.fn
 * @returns  {Boolean}
 */
export default function isSQLDate(...args) {
    if (!args.length)
        return false;
    for (let a of args) {
        if (typeof a !== "string" ||
            !a.match(/^([1-2]\d{3})-((0\d)|(1[12]))-(([0-2]\d)|(3[01]))(?:( [0-2]\d):([0-5]\d):([0-5]\d))?$/)) {
            return false;
        }
    }
    return true;
}
;
