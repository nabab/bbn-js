import each from '../loop/each.js';
export default function isPropSize(name) {
    var isTrue = false;
    each(['width', 'height', 'gap', 'margin', 'padding', 'top', 'left', 'right', 'bottom'], function (a) {
        if (name.indexOf(a) !== -1) {
            isTrue = true;
            return false;
        }
    });
    return isTrue;
}
;
