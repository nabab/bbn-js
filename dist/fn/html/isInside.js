import { getAncestors } from './getAncestors.js';
import { isString } from '../type/isString.js';
import { each } from '../loop/each.js';
var isInside = function (ele, ancestor) {
    var ancestors = getAncestors(ele);
    if (ancestors.length) {
        if (isString(ancestor)) {
            var ok_1 = false;
            each(ancestors, function (a) {
                if (a.matches && a.matches(ancestor)) {
                    ok_1 = true;
                    return false;
                }
            });
            return ok_1;
        }
        if (ancestor instanceof HTMLElement) {
            return ancestors.indexOf(ancestor) > -1;
        }
    }
    return false;
};
export { isInside };
