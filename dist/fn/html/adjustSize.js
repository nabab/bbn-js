import { each } from '../loop/each.js';
var adjustSize = function (type, eles) {
    var max = 0, idx;
    each(eles, function (el) {
        el.style[type] = 'auto';
    });
    each(eles, function (el, i) {
        var rect = el.getBoundingClientRect(), s = rect[type] % 1 ? rect[type] - (rect[type] % 1) + 1 : rect[type];
        //s = rect[type];
        if (s > max) {
            max = s;
            idx = i;
        }
    });
    each(eles, function (el, i) {
        if (max) {
            el.style[type] = max + 'px';
        }
    });
};
export { adjustSize };
