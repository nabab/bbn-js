import { isDom } from "./isDom.js";
const isCp = function (...args) {
    var _a;
    if (!args.length) {
        return false;
    }
    if (!('cp' in bbn) || !('isComponent' in bbn['cp']) || !(typeof bbn['cp'].isComponent === 'function')) {
        return false;
    }
    for (let a of args) {
        let res = bbn.cp.isComponent(a);
        if (!res || isDom(a) || !((_a = a.$el) === null || _a === void 0 ? void 0 : _a.bbnCid)) {
            return false;
        }
    }
    return true;
};
export { isCp };
