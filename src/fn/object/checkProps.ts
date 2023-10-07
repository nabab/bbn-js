import { checkPropsDetails } from "./checkPropsDetails.js";

const checkProps = function (obj: object, props: string | string[], checkEmpty: boolean = false) {
	return checkPropsDetails(obj, props, checkEmpty).result;
};

export { checkProps };
