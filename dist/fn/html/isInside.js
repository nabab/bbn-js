import { getAncestors } from "./getAncestors.js";
import { isString } from "../type/isString.js";
import { each } from "../loop/each.js";
const isInside = function (ele, ancestor) {
    let ancestors = getAncestors(ele);
    if (ancestors.length) {
        if (isString(ancestor)) {
            let ok = false;
            each(ancestors, (a) => {
                if (a.matches && a.matches(ancestor)) {
                    ok = true;
                    return false;
                }
            });
            return ok;
        }
        if (ancestor instanceof HTMLElement) {
            return ancestors.indexOf(ancestor) > -1;
        }
    }
    return false;
};
export { isInside };
