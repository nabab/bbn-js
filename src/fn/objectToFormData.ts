import { isArray } from './isArray';
import { each } from './each';
import { isObject } from './isObject';
import { iterate } from './iterate';
import { isNull } from './isNull';

const objectToFormData = function (obj: object, key: string = '', ignoreList?: string[]) {
	let formData = new FormData();
	let appendFormData = (data, key = '') => {
		if (!ignoreList || (isArray(ignoreList) && !ignoreList.includes(key))) {
			if (data instanceof File) {
				formData.append(key, data);
			} else if (isArray(data)) {
				each(data, (v, i) => {
					appendFormData(v, key + '[' + i + ']');
				});
			} else if (isObject(data) && Object.keys(data).length) {
				iterate(data, (v, i) => {
					if (i in data) {
						appendFormData(v, !key ? i : key + '[' + i + ']');
					}
				});
			} else {
				if (!isNull(data) && data !== undefined) {
					formData.append(key, data);
				}
			}
		}
	};
	appendFormData(obj, key);
	return formData;
};

export { objectToFormData };
