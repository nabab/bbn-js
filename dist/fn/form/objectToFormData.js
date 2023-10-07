import { isArray } from '../type/isArray.js';
import { each } from '../loop/each.js';
import { isObject } from '../type/isObject.js';
import { iterate } from '../loop/iterate.js';
import { isNull } from '../type/isNull.js';
/**
 * @method   objectToFormData
 * @todo     Add method description for objectToFormData
 * @global
 * @memberof bbn.fn
 * @param    {Object|Array|File} obj
 * @param    {String}            key
 * @param    {Array}             ignoreList
 * @returns
 */
var objectToFormData = function (obj, key, ignoreList) {
    if (key === void 0) { key = ''; }
    if (ignoreList === void 0) { ignoreList = null; }
    var formData = new FormData();
    var appendFormData = function (data, key) {
        if (key === void 0) { key = ''; }
        if (!ignoreList || (isArray(ignoreList) && !ignoreList.includes(key))) {
            if (data instanceof File) {
                formData.append(key, data);
            }
            else if (isArray(data)) {
                each(data, function (v, i) {
                    appendFormData(v, key + '[' + i + ']');
                });
            }
            else if (isObject(data) && Object.keys(data).length) {
                iterate(data, function (v, i) {
                    if (i in data) {
                        appendFormData(v, !key ? i : key + '[' + i + ']');
                    }
                });
            }
            else {
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
