import { checkPropsDetails } from './checkPropsDetails.js';
var checkProps = function (obj, props, checkEmpty) {
    if (checkEmpty === void 0) { checkEmpty = false; }
    return checkPropsDetails(obj, props, checkEmpty).result;
};
export { checkProps };
