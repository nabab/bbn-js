import { checkPropsDetails } from "./checkPropsDetails.js";
const checkPropsOrDie = function (obj, props, checkEmpty = false) {
    let res = checkPropsDetails(obj, props, checkEmpty);
    if (res.error) {
        throw new Error(res.error);
    }
    return true;
};
export { checkPropsOrDie };
