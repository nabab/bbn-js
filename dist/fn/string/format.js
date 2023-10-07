import { checkType } from '../type/checkType.js';
var format = function (str) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (args.length) {
        var i_1 = 0;
        return str.replace(/\%([d|s])/g, function (match, type) {
            var tmp = args[i_1++];
            checkType(tmp, type === 'd' ? 'number' : 'string', bbn._("The value doesn't correspond to the format"));
            return tmp;
        });
    }
    return str;
};
export { format };
