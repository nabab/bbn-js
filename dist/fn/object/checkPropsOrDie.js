import checkPropsDetails from './checkPropsDetails.js';
export default function checkPropsOrDie(obj, props, checkEmpty = false) {
    let res = checkPropsDetails(obj, props, checkEmpty);
    if (res.error) {
        throw new Error(res.error);
    }
    return true;
}
;
