import checkType from './fn/type/checkType.js';
/**
 * Translate an expression using the object bbn.lng
 *
 * @param {String} st
 * @returns {String}
 */
export default function _() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var st = args.shift();
    var res = bbn.lng[st] || st;
    if (args.length) {
        var i_1 = 0;
        return res.replace(/\%([d|s])/g, function (match, type) {
            var tmp = args[i_1++];
            if (!tmp) {
                tmp = type === 'd' ? 0 : '';
            }
            checkType(tmp, type === 'd' ? 'number' : 'string', bbn._("The value you gave did not correspond, check the loggg"));
            return tmp;
        });
    }
    return res;
}
;
