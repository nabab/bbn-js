import checkPropsDetails from './checkPropsDetails.js';
export default function checkProps(obj, props, checkEmpty) {
    if (checkEmpty === void 0) { checkEmpty = false; }
    return checkPropsDetails(obj, props, checkEmpty).result;
}
;
