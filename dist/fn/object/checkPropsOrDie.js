import { checkPropsDetails } from './checkPropsDetails.js';
var checkPropsOrDie = function (obj, props, checkEmpty) {
    if (checkEmpty === void 0) { checkEmpty = false; }
    var res = checkPropsDetails(obj, props, checkEmpty);
    if (res.error) {
        throw new Error(res.error);
    }
    return true;
};
export { checkPropsOrDie };
