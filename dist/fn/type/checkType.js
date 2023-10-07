import { isArray } from './isArray.js';
import { each } from '../loop/each.js';
import { isFunction } from './isFunction.js';
import { isString } from './isString.js';
import { correctCase } from '../string/correctCase.js';
import { error } from '../browser/error.js';
import { log } from '../browser/log.js';
var checkType = function (value, type, msg) {
    var logs = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        logs[_i - 3] = arguments[_i];
    }
    var ok = false;
    if (!isArray(type)) {
        type = [type];
    }
    var typesList = [];
    each(type, function (t) {
        var _a;
        if (t === String) {
            t = 'string';
        }
        else if (t === Number) {
            t = 'number';
        }
        else if (t === Array) {
            t = 'array';
        }
        else if (t === Boolean) {
            t = 'boolean';
        }
        else if (t === Object) {
            t = 'object';
        }
        else if (t === Function) {
            t = 'function';
        }
        if (isFunction(t)) {
            typesList.push(t.name || ((_a = t.constructor) === null || _a === void 0 ? void 0 : _a.name) || t.toString());
            if (value instanceof t) {
                ok = true;
                return false;
            }
        }
        else if (!isString(t) || !isFunction(bbn.fn['is' + correctCase(t)])) {
            error("The type ".concat(t, " is not recognized"));
        }
        else if (bbn.fn['is' + correctCase(t)](value)) {
            ok = true;
            return false;
        }
        else {
            typesList.push(t);
        }
    });
    if (!ok) {
        log(['Value given', value, 'type', typeof value, 'expected', typesList.join(' or ')]);
        if (logs.length) {
            log(logs);
        }
        throw new Error((msg ? msg + ' - ' : '') + bbn._('The value should be a %s', typesList.join(' ' + bbn._('or a') + ' ')));
    }
};
export { checkType };
