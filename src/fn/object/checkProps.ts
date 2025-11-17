import checkPropsDetails from './checkPropsDetails.js'  ;

export default function checkProps(obj: object, props: string | string[], checkEmpty: boolean = false) {
	return checkPropsDetails(obj, props, checkEmpty).result;
};
