import { checkPropsDetails } from './checkPropsDetails';
const checkProps = function (obj, props, checkEmpty = false) {
    return checkPropsDetails(obj, props, checkEmpty).result;
};
export { checkProps };
