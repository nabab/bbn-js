import checkPropsDetails from './checkPropsDetails.js';
export default function checkProps(obj, props, checkEmpty = false) {
    return checkPropsDetails(obj, props, checkEmpty).result;
}
;
