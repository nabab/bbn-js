import simpleHash from './simpleHash.js';
import treatForHash from './treatForHash.js';
/**
 * Makes a hash out of anything
 * @param {[*]} args
 * @returns {String}
 */
export default function hash() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    //log(obj);
    var st = "";
    var depth = null;
    if ((args.length === 2) && (typeof args[1] === 'number')) {
        depth = args[1];
        args = [args[0]];
    }
    for (var i in args) {
        st += treatForHash(args[i], depth, 0, null, treatForHash);
    }
    return simpleHash(st);
}
;
