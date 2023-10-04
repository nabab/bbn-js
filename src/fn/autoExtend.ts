import { extend } from './extend';

const autoExtend = function (namespace, obj) {
	if (!bbn[namespace]) {
		bbn[namespace] = {};
		//$.extend(true, bbn[namespace], obj);
		extend(bbn[namespace], obj);
	} else {
		// $.extend(true, bbn[namespace], obj);
		extend(bbn[namespace], obj);
	}
};

export { autoExtend };
