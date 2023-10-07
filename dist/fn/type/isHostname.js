import { isString } from "./isString.js";
import { isIP } from "./isIP.js";
const isHostname = function (...args) {
    if (!args.length)
        return false;
    for (let st of args) {
        if (!isString(st)) {
            return false;
        }
        if (!isIP(st) && !bbn.var.regexp.hostname.test(st)) {
            return false;
        }
    }
    return true;
};
export { isHostname };
