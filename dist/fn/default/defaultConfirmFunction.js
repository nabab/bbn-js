import isFunction from '../type/isFunction.js';
export default function defaultConfirmFunction(text, yesFn, noFn) {
    if (noFn === void 0) { noFn = null; }
    var ok = 0;
    if (confirm(text)) {
        if (isFunction(yesFn)) {
            yesFn();
            ok = 1;
        }
    }
    if (!ok && isFunction(noFn)) {
        noFn();
    }
}
;
